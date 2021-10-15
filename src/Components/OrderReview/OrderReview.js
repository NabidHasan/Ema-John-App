import Cart from '../Cart/Cart';
import useCarts from '../../Hooks/useCarts';
import useProducts from '../../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products, setProduct] = useProducts();
    const [carts, setCart] = useCarts(products);
    const history = useHistory();

    const handleRemove = (key) => {
        const newItems = carts.filter(product => product.key !== key)
        setCart(newItems);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    carts.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}

                    ></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={carts}>

                    <button onClick={handlePlaceOrder} className='addToCart-btn'>Place Order</button>

                </Cart>
            </div>


        </div >
    );
};

export default OrderReview;