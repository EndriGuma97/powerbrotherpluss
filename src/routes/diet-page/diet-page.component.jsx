
import MEAL_DATA from '../../meal-data.json';
import MealCard from '../../components/meal-card/meal-card.component';



import './diet-page.styles.scss';

const DietPage = () => {
    return (
        <div className='dietPage'>
                        <div className='designwrapMeals'>
                <h1 className='designMeals'>ADD MEALS</h1>
            </div>
            <div className='disclaimer-Meals'>Add 3 Meals & Generate your Diet to the Diet Page</div>
        <div className='meals-container'>
            {MEAL_DATA.map((meal) => (
           <MealCard key={meal.id} meal={meal}/>
            ))}
        </div></div>
    
    );
};
export default DietPage;
