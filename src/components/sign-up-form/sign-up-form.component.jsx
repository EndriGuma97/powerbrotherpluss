import { useState } from 'react';
import './sign-up-form.styles.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',
    weight: '',
    height: '',
    age: '',
    activityLevel: '',
    gender: '',
    goal: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password, confirmPassword, weight, height, age, activityLevel, gender, goal} = formFields;

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      if(password !== confirmPassword) {
        alert("password do not match");
        return;
      }

      try {
        const { user } = await createAuthUserWithEmailAndPassword(email, password);
        await createUserDocumentFromAuth(user, {
          email,
          weight,
          height,
          age,
          activityLevel,
          gender,
          goal,
          meals: '',
      });
      resetFormFields();
      window.location.reload();

      } catch (error) {
        if(error.code === 'auth/email-already-in-use') {
          alert("Cannot create user, email already in use");
        } else {
        console.log('user creation encountered an error',error);
      } }
    }
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormFields({...formFields, [name]: value});

    };

    return (
 <div className='sign-up-container'>
  <h2>Don't have an account?</h2>
    <span>Sign up to get started</span>
    <form onSubmit={handleSubmit}>
       <div className='group'>
       <input className="form-input" type="email" required onChange={handleChange} name='email' value={email}/>
        <label className={`${email.length ? 'shrink' : ''} form-input-label`}>Email</label>
         </div>
        <div className='group'>
        <input className="form-input" type="password" required onChange={handleChange} name='password' value={password}/>
          <label className={`${password.length ? 'shrink' : ''} form-input-label`}>Password</label>
       </div>
        <div className='group'>
        <input className="form-input" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
          <label className={`${confirmPassword.length ? 'shrink' : ''} form-input-label`}>Confirm Password</label>
        </div>
        <div className='group'>
        <input className="form-input" type="number" required onChange={handleChange} name='weight' value={weight}/>
        <label className={`${weight.length ? 'shrink' : ''} form-input-label`}>Weight(kg)</label>
        </div>
        <div className='group'>
        <input className="form-input" type="number" required onChange={handleChange} name='height' value={height}/>
          <label className={`${height.length ? 'shrink' : ''} form-input-label`}>Height(cm)</label>
        </div>
        <div className='group'>
        <input className="form-input" type="number" required onChange={handleChange} name='age' value={age}/>
          <label className={`${age.length ? 'shrink' : ''} form-input-label`}>Age</label>
        </div>
        <div className='group'>
        <select  className="form-input" id="myOptions1" required onChange={handleChange} name='activityLevel' value={activityLevel}>
  <option value=""></option>
  <option value="littleExercise">Little/no exercise</option>
  <option value="sports1-3">Sports 1-3 days/week</option>
  <option value="sports3-5">Sports 3-5 days/week</option>
  <option value="sports6-7">Sports 6-7 days/week</option>
  <option value="sports2xDay">Sports & physical job or 2x day training</option>
</select>
          <label className={`${activityLevel.length ? 'shrink' : ''} form-input-label`}>How active you are</label>
      </div>
<div className='group'>
<select className="form-input" id="myOptions2" required onChange={handleChange} name='gender' value={gender}>
  <option value=""></option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
  <label className={`${gender.length ? 'shrink' : ''} form-input-label`}>Your gender</label>
        </div>
<div className='group'>
        <select className="form-input" id="myOptions3" required onChange={handleChange} name='goal' value={goal}>
  <option value=""></option>
  <option value="loseWeight">Lose Weight</option>
  <option value="maintainWeight">Maintain Weight</option>
  <option value="gainWeight">Gain Weight</option>
</select>
<label className={`${goal.length ? 'shrink' : ''} form-input-label`}>Goal</label></div>
<button className="button-container" type="submit">Get started</button>
    </form>
 </div>
    )
}
export default SignUpForm;