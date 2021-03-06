import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    useEffect(() => {
        console.log('product called')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {

                setProduct(data)
                setDisplayProduct(data)
            }
            )
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);

                }

            }

            setCart(storedCart);

        }
    }, [products])


    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDb(product.key)
    }
    const handleSearch = event => {
        const serachText = (event.target.value);
        const matchedItems = products.filter(product => product.name.toLowerCase().includes(serachText));
        setDisplayProduct(matchedItems);

    }
    return (
        <div>
            <div className="search-container">
                <input onChange={handleSearch} className='input-feild' type="text" />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    <h3>products:{products.length}</h3>

                    {
                        displayProduct.map(product => <Product

                            key={product.key}
                            handleAddToCart={handleAddToCart}
                            product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}

                    >
                        <Link to='/review'>
                            <button className='addToCart-btn'>Review</button> </Link>

                    </Cart>
                </div>

            </div>
        </div>

    );
};

export default Shop;