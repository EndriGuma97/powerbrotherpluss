import './main-page.styles.scss';
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { selectCategoriesMap } from "../../store/categories/category.selector";


const MainPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  
 const categoriesMap = useSelector(selectCategoriesMap);
    
    const {age, activityLevel, gender, goal, height, weight } = categoriesMap;
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
      const protein = Math.trunc(calories * 0.27 / 4);
      const carbohydrates = Math.trunc(calories * 0.43 / 4);
      const fats = Math.trunc(calories * 0.3 / 9);

    return (
      <div className='main-pg'>
      <div className="profile-card">
           <div className="profile-card-header">
             <h2>Profile</h2>
           </div>
           <div className="profile-card-content">
             <div className="profile-card-info">
               <div className="profile-card-info-item">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M168,56a8,8,0,0,1,8-8h16V32a8,8,0,0,1,16,0V48h16a8,8,0,0,1,0,16H208V80a8,8,0,0,1-16,0V64H176A8,8,0,0,1,168,56Zm62.56,54.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.66,79.66,0,0,1,36.06,28.75A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a87.57,87.57,0,0,0,53.92-18.5,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z"></path></svg>
                 <span className="info-label">Age:</span>
                 <span className="info-value">{age}</span>
               </div>
               <div className="profile-card-info-item">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path></svg>
                 <span className="info-label">Goal:</span>
                 <span className="info-value">{goal}</span>
               </div>
               <div className="profile-card-info-item">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,24H168a8,8,0,0,0,0,16h20.69L163.54,65.15A64,64,0,1,0,112,175.48V192H88a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V208h24a8,8,0,0,0,0-16H128V175.48a63.92,63.92,0,0,0,45.84-98L200,51.31V72a8,8,0,0,0,16,0V32A8,8,0,0,0,208,24ZM120,160a48,48,0,1,1,48-48A48.05,48.05,0,0,1,120,160Z"></path></svg>
                 <span className="info-label">Gender:</span>
                 <span className="info-value">{gender}</span>
               </div>
               <div className="profile-card-info-item">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"></path></svg>
                 <span className="info-label">Height:</span>
                 <span className="info-value">{height} cm</span>
               </div>
               <div className="profile-card-info-item">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z"></path></svg>
                 <span className="info-label">Weight:</span>
                 <span className="info-value">{weight} kg</span>
               </div>
             </div>
           </div>
         </div>
      <div className="nutrition-info">
        <div className="header">
        <span className="highlight">Nutrition</span> Information
      </div>
      <div className="nutrition-info-item calories">
        <span className="nutrition-info-label">Total calories you should consume per day</span>
        <span className="nutrition-info-value">{calories}</span>
      </div>
      <div className="nutrition-info-item proteins">
        <span className="nutrition-info-label">Proteins(gr)</span>
        <span className="nutrition-info-value">{protein}</span>
      </div>
      <div className="nutrition-info-item carbs">
        <span className="nutrition-info-label">Carbs(gr)</span>
        <span className="nutrition-info-value">{carbohydrates}</span>
      </div>
      <div className="nutrition-info-item fats">
        <span className="nutrition-info-label">Fats(gr)</span>
        <span className="nutrition-info-value">{fats}</span>
      </div>
      <div className="disclaimer">
      These calculations are approximate. The total calories are calculated based on your Basal Metabolic Rate (BMR) multiplied by your activity level. The nutrient breakdown is approximately 43% carbs, 27% proteins, and 30% fats. Remember to adjust your meals according to your body's needs and consult a healthcare professional if necessary.
      </div>
    </div>
    </div>
    )
};

export default MainPage;