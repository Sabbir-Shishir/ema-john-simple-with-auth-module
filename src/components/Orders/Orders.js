import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const handleReviewItem = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleReviewItem={handleReviewItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 &&
                    <div className='cart-empty-content'>
                        <h2 className='no-item-txt'>No Items for Review</h2>
                        <Link to='/shop' className='shop-more-link'>Shop More</Link>
                    </div>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                        <button className='shipping-btn'>proceed shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;