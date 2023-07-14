import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import './generated-meals.styles.scss';
const GeneratedMeals = () => {
   const categoryMap = useSelector(selectCategoriesMap);
    const { meals } = categoryMap;
    const {age, activityLevel, gender, goal, height, weight } = categoryMap;
    const calcBMRMan = function (weight, height, age, activityLevel) {
        const bmr = 10 * +weight + 6.25 * +height - 5 * +age + 5;
        let calories;
        if (activityLevel === 'littleExercise') calories = bmr * 1.2;
        if (activityLevel === 'sports1-3') calories = bmr * 1.375;
        if (activityLevel === 'sports3-5') calories = bmr * 1.55;
        if (activityLevel === 'sports6-7') calories = bmr * 1.725;
        if (activityLevel === 'sports2xDay') calories = bmr * 1.9;
        return calories;
      };
    
      const calcBMRWoman = function (weight, height, age, activityLevel) {
        const bmr = 10 * +weight + 6.25 * +height - 5 * +age - 161;
        let calories;
        if (activityLevel === 'littleExercise') calories = bmr * 1.2;
        if (activityLevel === 'sports1-3') calories = bmr * 1.375;
        if (activityLevel === 'sports3-5') calories = bmr * 1.55;
        if (activityLevel === 'sports6-7') calories = bmr * 1.725;
        if (activityLevel === 'sports2xDay') calories = bmr * 1.9;
        return calories;
      };
      
    const caloriesMan = calcBMRMan(weight, height, age, activityLevel);
    const caloriesWoman = calcBMRWoman(weight, height, age, activityLevel);
    let calories = gender === 'male' ? caloriesMan : caloriesWoman;
    
    if (goal === 'gainWeight') {
        calories = Math.trunc(calories + 500);
      } else if (goal === 'loseWeight') {
        calories = Math.trunc(calories - 500);
      } else if (goal === 'maintainWeight') {
        calories = Math.trunc(calories);
        // No action needed, calories remain unchanged
      }
     
      //43% Carbs 27%Proteins 30%Fat
      // const protein = Math.trunc(calories * 0.27 / 4);
      // const carbohydrates = Math.trunc(calories * 0.43 / 4);
      // const fats = Math.trunc(calories * 0.3 / 9);

      // for 100 calories there should be (gr): 

// 10.75 grams of carbohydrates
// 6.75 grams of proteins
// 3.33 grams of fats

//300 calories should be the snack

    return (
    <div>
        <div className="meal-cart">{meals[0] ? <div className="meal-info">
           <h1>Nr 1. {meals[0].name}</h1>
           <img src={meals[0].imageUrl} alt={meals[0].name} />
           <p>Meal Calories: {calories / 3 - 300}</p>
           <p>{meals[0].nameIngridient1per100cal}: {Math.trunc((meals[0].ingridient1per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[0].nameIngridient2per100cal}: {Math.trunc((meals[0].ingridient2per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[0].nameIngridient3per100cal}: {Math.trunc((meals[0].ingridient3per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[0].nameIngridient4per100cal}: {Math.trunc((meals[0].ingridient4per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>Recipe: {meals[0].recipe}</p>
            </div>
                : <p className="no-meals">No meal generated yet...(1)</p>}</div>
                   <div className="meal-cart">{meals[1] ? <div className="meal-info">
           <h1>Nr 1. {meals[1].name}</h1>
           <img src={meals[1].imageUrl} alt={meals[0].name} />
           <p>Meal Calories: {calories / 3 - 300}</p>
           <p>{meals[1].nameIngridient1per100cal}: {Math.trunc((meals[1].ingridient1per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[1].nameIngridient2per100cal}: {Math.trunc((meals[1].ingridient2per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[1].nameIngridient3per100cal}: {Math.trunc((meals[1].ingridient3per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[1].nameIngridient4per100cal}: {Math.trunc((meals[1].ingridient4per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>Recipe: {meals[1].recipe}</p>
            </div>
                : <p className="no-meals">No meal generated yet...(2)</p>}</div>
                                   <div className="meal-cart">{meals[2] ? <div className="meal-info">
           <h1>Nr 1. {meals[2].name}</h1>
           <img src={meals[2].imageUrl} alt={meals[0].name} />
           <p>Meal Calories: {calories / 3 - 300}</p>
           <p>{meals[2].nameIngridient1per100cal}: {Math.trunc((meals[2].ingridient1per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[2].nameIngridient2per100cal}: {Math.trunc((meals[2].ingridient2per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[2].nameIngridient3per100cal}: {Math.trunc((meals[2].ingridient3per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[2].nameIngridient4per100cal}: {Math.trunc((meals[2].ingridient4per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>Recipe: {meals[2].recipe}</p>
            </div>
                : <p className="no-meals">No meal generated yet...(3)</p>}</div>
                <div className="meal-cart">
                  <p className="no-meals">300 Calories Snack</p>
                </div>

    </div>)
}

export default GeneratedMeals;