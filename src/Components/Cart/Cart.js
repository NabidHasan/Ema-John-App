import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalQty = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQty = totalQty + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = total * 0.10;
    const finalTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Item Order: {totalQty}</h5>
            <h6>Total: {total}</h6>
            <p>Tax:{tax}</p>
            <p>Shipping:{shipping}</p>
            <p>FinalTotal:{finalTotal}</p>
        </div>
    );
};

export default Cart;