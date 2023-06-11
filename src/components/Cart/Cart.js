import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, clearCart, children } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <div className='cart-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${Math.round(tax)}</p>
                <p className='grand-total'>Grand Total: ${Math.round(grandTotal)}</p>
            </div>
            <button onClick={clearCart} className='cart-dlt-btn'>
                Clear Cart
                <span className='trash-icon'>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </span>
            </button>
            {children}
        </div>
    );
};

export default Cart;