import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCarts = products => {
    const [carts, setCart] = useState([]);

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
    return [carts, setCart]
};

export default useCarts;