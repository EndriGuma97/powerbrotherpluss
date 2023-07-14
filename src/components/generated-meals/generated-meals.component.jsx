import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import './generated-meals.styles.scss';

const GeneratedMeals = () => {

  const [activeCard, setActiveCard ] = useState(1);
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
    <div className="generatedmealcards">
        <div className="meal-cart" style={{ display: activeCard === 1 ? 'block' : 'none' }}>{meals[0] ? <div className="meal-info">
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
                  <div className="meal-cart" style={{ display: activeCard === 2 ? 'block' : 'none' }}>{meals[1] ? <div className="meal-info">
           <h1>Nr 2. {meals[1].name}</h1>
           <img src={meals[1].imageUrl} alt={meals[1].name} />
           <p>Meal Calories: {calories / 3 - 300}</p>
           <p>{meals[1].nameIngridient1per100cal}: {Math.trunc((meals[1].ingridient1per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[1].nameIngridient2per100cal}: {Math.trunc((meals[1].ingridient2per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[1].nameIngridient3per100cal}: {Math.trunc((meals[1].ingridient3per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[1].nameIngridient4per100cal}: {Math.trunc((meals[1].ingridient4per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>Recipe: {meals[1].recipe}</p>
            </div>
                : <p className="no-meals">No meal generated yet...(2)</p>}</div>
                                    <div className="meal-cart" style={{ display: activeCard === 3 ? 'block' : 'none' }}>{meals[2] ? <div className="meal-info">
           <h1>Nr 3. {meals[2].name}</h1>
           <img src={meals[2].imageUrl} alt={meals[2].name} />
           <p>Meal Calories: {calories / 3 - 300}</p>
           <p>{meals[2].nameIngridient1per100cal}: {Math.trunc((meals[2].ingridient1per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[2].nameIngridient2per100cal}: {Math.trunc((meals[2].ingridient2per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[2].nameIngridient3per100cal}: {Math.trunc((meals[2].ingridient3per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>{meals[2].nameIngridient4per100cal}: {Math.trunc((meals[2].ingridient4per100cal * (calories / 3 - 300)) / 100)} gr</p>
           <p>Recipe: {meals[2].recipe}</p>
            </div>
                : <p className="no-meals">No meal generated yet...(3)</p>}</div>
                <div className="meal-cart" style={{ display: activeCard === 4 ? 'block' : 'none' }}>
                  <p className="no-meals">300 Calories Snack</p>
                </div> 
                <div className="carousel-buttons">             <span onClick={() => setActiveCard(activeCard > 1 ? activeCard - 1 : 4)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path></svg></span>
                <span onClick={() => setActiveCard(activeCard < 4 ? activeCard + 1 : 1)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path></svg></span></div>
   
  
    </div>)
}

export default GeneratedMeals;