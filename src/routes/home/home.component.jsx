import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form.component.jsx/sign-in-form-component";
import MainPage from "../main-page/main-page.component";
import './home.styles.scss'



const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
    return (
<div>
         {!currentUser ? (<div>
          <div className="homepage">
    <div className="homepage__content">
      <h1 className="homepage__tagline">Fuel Your Body, Achieve Your Goals</h1>
      <div className="homepage__testimonial">
        <blockquote className="homepage__quote">
          "Feel healthier and more energized than ever."
        </blockquote>
      </div>
      <div className="homepage__features">
        <div className="homepage__feature">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customization feature" />
          <p className="homepage__feature-description">
            Personalized meal plans tailored just for you.
          </p>
        </div>
        <div className="homepage__feature">
          <img src="https://images.pexels.com/photos/6456133/pexels-photo-6456133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Community feature" />
          <p className="homepage__feature-description">
          Personalized workout routines.
          </p>
        </div>
      </div>
    </div>
  </div>
          
          
          <div className="authentication-container"><SignInForm />
         <SignUpForm /></div></div>) : <div><MainPage/></div>}
        </div>
  
    );
  }

export default Home;