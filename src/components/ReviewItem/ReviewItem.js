import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleReviewItem }) => {
    const { id, name, price, quantity, img, shipping } = product;
    const error = 'error.jpg';
    return (
        <div className='review-item'>
            <div>
                <img src={img} onError={event => event.target.src = error} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: <span>{price}</span></small></p>
                    <p><small>Shipping: <span>{shipping}</span></small></p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleReviewItem(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;