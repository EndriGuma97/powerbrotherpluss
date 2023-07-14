import './meal-card.styles.scss';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const MealCard = ({ meal }) => {
    const { name, type, imageUrl } = meal;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
const addMealToCart = () => dispatch(addItemToCart(cartItems, meal));
    return (
    <div className='meal-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{type}</span>
        </div>
        <button className='invertedBut' onClick={addMealToCart}>ADD</button>

    </div>
    )
}

export default MealCard;