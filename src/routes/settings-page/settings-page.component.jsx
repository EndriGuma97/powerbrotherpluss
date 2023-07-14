import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateDocUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';
import { updateCategoriesWeight, updateCategoriesHeight, updateCategoriesAge, updateCategoriesActivityLevel, updateCategoriesGoal } from '../../store/categories/category.action';
import './settings-page.styles.scss';

const defaultFormFields = {
    weight: '',
    height: '',
    age: '',
    activityLevel: '',
    goal: '',
}


const SettingsPage = () => {
     
    const dispatch = useDispatch();
    
    const currentUser = useSelector(selectCurrentUser);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { weight, height, age, activityLevel, goal} = formFields;
    
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

     
    const updateUser = () => {
      dispatch(updateCategoriesWeight(weight));
      dispatch(updateCategoriesHeight(height));
      dispatch(updateCategoriesAge(age));
      dispatch(updateCategoriesActivityLevel(activityLevel));
      dispatch(updateCategoriesGoal(goal));
      
    }
    const handleSubmit = async (event) => {
      
      event.preventDefault();
      try {
        updateUser();
      await updateDocUser(currentUser.uid, weight, height, age, activityLevel, goal);
      resetFormFields();
      alert('New settings saved!')
    
    }
      catch (error) {
        console.log('Encountered Error', error);
      }
    }

    const handleChange = (event) => {
  const { name, value } = event.target;

  setFormFields({...formFields, [name]: value});

};

    return (
      <div className='setComp'>
        <form className="settings" onSubmit={handleSubmit}>
          <div className="header">Settings</div>
          <div className="setting-item">
            <div className="label">Weight(kg)</div>
            <input type="number" required onChange={handleChange} name="weight" value={weight} className="input" />
          </div>
          <div className="setting-item">
            <div className="label">Height(cm)</div>
            <input type="number" required onChange={handleChange} name="height" value={height} className="input" />
          </div>
          <div className="setting-item">
            <div className="label">Age</div>
            <input type="number" required onChange={handleChange} name='age' value={age} className="input" />
          </div>
          <div className="setting-item">
            <div className="label">How active you are</div>
            <select className="select" required onChange={handleChange} name='activityLevel' value={activityLevel}>
              <option value="">Select activity level</option>
              <option value="sports1-3">Sports 1-3 days/week</option>
              <option value="sports3-5">Sports 3-5 days/week</option>
              <option value="sports6-7">Sports 6-7 days/week</option>
              <option value="sports2xDay">Sports & physical job or 2x day training</option>
            </select>
          </div>
          <div className="setting-item">
            <div className="label">Goal</div>
            <select className="select" required onChange={handleChange} name='goal' value={goal}>
              <option value="">Select goal</option>
              <option value="loseWeight">Lose weight</option>
              <option value="maintainWeight">Maintain weight</option>
              <option value="gainWeight">Gain weight</option>
            </select>
          </div>
          <button className="save-button" type='submit'>Save new changes</button>
        </form>
        <div className="disclaimer">If you wish to delete your account, please send an email to andrewgouma@gmail.com from the email address associated with your account. Please include the subject line "Account Deletion Request".

Please note that by sending the email, you are requesting the deletion of your account. The account deletion process may take up to 24 hours to complete. </div>
        </div>
      );
}

export default SettingsPage;