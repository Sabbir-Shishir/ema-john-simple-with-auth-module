import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart, error } = props;
    const { name, img, seller, ratings, price } = product;

    return (
        <div id='product' className='product'>
            <img src={img} onError={event => event.target.src = error} alt='' />
            <div className='product-info'>
                <div className='price-and-name-container'>
                    <p className='product-name'>{name}</p>
                    <p className='price'>Price: ${price}</p>
                </div>
                <div className='seller-and-ratings-container'>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                Add to Cart
                <span className='cart-icon'>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </span>
            </button>
        </div>
    );
};

export default Product;