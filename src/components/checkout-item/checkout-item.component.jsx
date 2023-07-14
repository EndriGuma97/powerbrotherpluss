import { useSelector, useDispatch } from 'react-redux';
import './checkout-item.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart } from '../../store/cart/cart.action';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl} = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
   
   const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;