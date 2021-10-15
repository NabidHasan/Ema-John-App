import React from 'react';

const ReviewItem = (props) => {
    const { name, key, price, quantity } = props.product;
    const { handleRemove } = props;
    return (
        <div className='product'>


            <div>
                <h3 className='name'> {name}</h3>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <button onClick={() => handleRemove(key)} className='addToCart-btn'>Remove</button>
            </div>


        </div>
    );
};

export default ReviewItem;