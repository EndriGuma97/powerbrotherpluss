import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateDocMeal } from '../../utils/firebase/firebase.utils';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setCategoriesMapMeals } from '../../store/categories/category.action';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import GeneratedMeals from '../../components/generated-meals/generated-meals.component';

const Checkout = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const cartItems = useSelector(selectCartItems);
    const categoryMap = useSelector(selectCategoriesMap);

    const generateRecipe = () => updateDocMeal(currentUser.uid, cartItems);
    const saveGeneratedMeals = () => dispatch(setCategoriesMapMeals(cartItems));

    const handeButtonClickNew = () => {
        generateRecipe();
        saveGeneratedMeals();
    }
    return (
        <div>
            
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Meals</span>
                </div>
                <div className='header-block'>
                    <span>Name</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

                {cartItems.map((cartItem) => {
                    return (
                     <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })}
       <button className='generateButton' onClick={handeButtonClickNew}>Generate Diet</button>
       <div className="disclaimer">To ensure your daily nutritional needs are met, it is recommended to choose a minimum of 3 meals, if you generate more than 3 meals, only the first 3 will be selected to create a balanced meal plan that perfectly aligns with your dietary requirements.</div>
       {categoryMap ? <GeneratedMeals />: ''}
        </div>

        
        </div>
    )
}

export default Checkout;