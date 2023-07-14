import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import FoodBookIcon from "../../components/foodBook-icon/foodBook-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { useSelector } from 'react-redux';
import './navigation.styles.scss';
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import MobileNav from "../../components/mobile-nav/mobile-nav.component";

const Navigation = () => {
   const currentUser = useSelector(selectCurrentUser);
   const isCartOpen = useSelector(selectIsCartOpen);


return <Fragment>
    {currentUser ? (
   <div className="navigation"><Link className="logo-container" to='/'>PowerBrother+</Link>
    <div className="nav-links-container">
        <Link className="nav-link" to='/'>MAIN</Link>
        <Link className="nav-link" to='/workout-page'>WORKOUTS</Link>
        <Link className="nav-link" to='/diet-page'>MEALS</Link>
        <Link className="nav-link" to='/settings-page'>SETTINGS</Link>
        <Link className="nav-link" to='/' onClick={signOutUser} >LOGOUT</Link>
        <FoodBookIcon />
        {isCartOpen && <CartDropdown />}
        </div>
        
        </div>) : ('')}
        {currentUser ? (<div className="foodBookIconCont">
<div><MobileNav /></div><div ><FoodBookIcon />{isCartOpen && <CartDropdown />}</div></div>) : ('')}
    <Outlet />
    </Fragment>
}

export default Navigation;