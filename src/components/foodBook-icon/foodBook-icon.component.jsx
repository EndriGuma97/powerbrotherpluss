import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ReactComponent  as FoodBookSVG } from '../../assets/foodBook.svg';

import './foodBook-icon.styles.scss';

const FoodBookIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);

    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return (
        <div className='foodBook-icon-container' onClick={toggleIsCartOpen}>
            <FoodBookSVG className="foodBook-icon"/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )

}

export default FoodBookIcon;