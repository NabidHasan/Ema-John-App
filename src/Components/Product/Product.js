import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';



const Product = (props) => {
    const { img, name, seller, stock, price, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className='product'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3 className='name'>{name}</h3>
                    <p>by: {seller}</p>
                    <h4>${price}</h4>
                    <p>only {stock} left in stock - order soon</p>


                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star set-color"
                        fullSymbol="fas fa-star set-color"
                    ></Rating>
                    <br />


                    <button onClick={() => props.handleAddToCart(props.product)} className='addToCart-btn'>{element} add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;