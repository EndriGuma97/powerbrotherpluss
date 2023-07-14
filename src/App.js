import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './store/user/user.selector';
import { onAuthStateChangedListener, createUserDocumentFromAuth, getCategoriesAndDocument } from './utils/firebase/firebase.utils';
import { setCategoriesMap } from './store/categories/category.action';
import { setCurrentUser } from './store/user/user.action';
import Spinner from './components/spinner/spinner.component';
const  Home = lazy(() => import('./routes/home/home.component'));
const WorkoutPage = lazy(() => import('./routes/workout-page/workout-page.component'));
const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const DietPage = lazy(() => import('./routes/diet-page/diet-page.component'));
const SettingsPage = lazy(() => import('./routes/settings-page/settings-page.component'));
const  MainPage = lazy(() => import('./routes/main-page/main-page.component'));

const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

const FirstDay = lazy(() => import('./components/day1.workoutPage.component/day1.workoutPage.component'));
const SecondDay = lazy(() => import('./components/day2.workoutPage.component/day2.workoutPage.component'));
const ThirdDay = lazy(() => import('./components/day3.workoutPage.component/day3.workoutPage.component'));



const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
        
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => { 
    if(currentUser){

    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocument();        
        dispatch(setCategoriesMap(categoryMap.find(obj => Object.values(obj).includes(currentUser.email))));
    };

    getCategoriesMap();}

    if(!currentUser) {
      dispatch(setCategoriesMap(''));
    }
}, [currentUser]);

useEffect(() => {
  if (!currentUser) {
    navigate('/');
  }
}, [currentUser, navigate]);

 
  return (
    <Suspense fallback={<Spinner />}>
  <Routes>
  <Route path="/" element={<Navigation />}>
  <Route index element={<Home />} />
    {!currentUser ? (
      <Route index element={<Navigate to="/" replace />} />
    ) : (
      <>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="diet-page" element={<DietPage />} />
        <Route path="settings-page" element={<SettingsPage />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path="workout-page" element={<WorkoutPage/>} /> 
        <Route path='day1' element={<FirstDay />} />
        <Route path='day2' element={<SecondDay />} />
        <Route path='day3' element={<ThirdDay />} />
      </>
    )}
  </Route>
</Routes>
</Suspense>
  );
}

export default App;
