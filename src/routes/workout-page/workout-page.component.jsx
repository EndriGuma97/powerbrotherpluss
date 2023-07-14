import { Link } from 'react-router-dom';
import './workout-page.styles.scss';
import WorkoutDayCard from '../../components/WorkoutDaysCard/workoutDaysCard.component';

const WorkoutPage = () => {
    return (
      <div>
        <div class="designwrap">
    <h1 class="design">WORKOUTS PAGE</h1>
    
  </div>  
  <div className='disclaimer-workout'>Select one push day, one pull day, and one legs day each week. This approach ensures comprehensive muscle training and promotes overall fitness.</div>
      <div className='body-test'>
      <div className="container">
        <Link to="/day1">
        <WorkoutDayCard dataImage="https://images.unsplash.com/photo-1566351573868-0b6458790cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          header="Push Day"
          content="Chest/Delts/Triceps" /></Link>
          <Link to="/day2">
        <WorkoutDayCard dataImage="https://images.unsplash.com/photo-1583454155184-870a1f63aebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          header="Pull Day" 
          content="Back/Biceps/Rear Delts" /></Link>
       <Link to="/day3"> <WorkoutDayCard dataImage="https://images.unsplash.com/photo-1623946724822-ba48a838f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          header="Legs & Abs Day" 
          content="Legs/Abs" /> </Link>
      </div></div></div>
    )
}

export default WorkoutPage;