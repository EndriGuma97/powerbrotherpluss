import { useState } from 'react';
import '../sign-up-form/sign-up-form.styles.scss';
import {signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      } catch (error) { 
        console.log(error)
        switch(error.code) {
            case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
                case 'auth/user-not-found':
                  alert('User not found');
                  break;
                default:
                    console.log(error);
        }
      }
    }
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormFields({...formFields, [name]: value})

    };


    return (
 <div className='sign-up-container'>
  <h2>Already have an account?</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
       <div className='group'>
       <input className="form-input" type="email" required onChange={handleChange} name='email' value={email}/>
        <label className={`${email.length ? 'shrink' : ''} form-input-label`}>Email</label>
         </div>
        <div className='group'>
        <input className="form-input" type="password" required onChange={handleChange} name='password' value={password}/>
          <label className={`${password.length ? 'shrink' : ''} form-input-label`}>Password</label>
       </div>
<button className="button-container" type="submit">Sign In</button>
    </form>
 </div>
    )
}
export default SignInForm;