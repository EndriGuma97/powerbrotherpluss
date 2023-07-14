import { useEffect, useState, useRef } from "react";
import '../../routes/workout-page/workout-page.styles.scss';

const WorkoutDayCard = ({dataImage, header, content}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cardDimensions, setCardDimensions] = useState({width: 0, height: 0});
  const cardRef = useRef();

useEffect(() => {
    setCardDimensions({
      width: cardRef.current.offsetWidth,
      height: cardRef.current.offsetHeight
    });
  }, []);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - cardRef.current.offsetLeft - cardDimensions.width / 2);
    setMouseY(e.pageY - cardRef.current.offsetTop - cardDimensions.height / 2);
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  }

  const cardStyle = {
    transform: `rotateY(${mouseX / cardDimensions.width * 30}deg) rotateX(${mouseY / cardDimensions.height * -30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mouseX / cardDimensions.width * -40}px) translateY(${mouseY / cardDimensions.height * -40}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`
  };

  return (
    <div className="card-wrap" 
      onMouseMove={handleMouseMove} 
      onMouseEnter={() => clearTimeout(handleMouseLeave)} 
      onMouseLeave={handleMouseLeave} 
      ref={cardRef}>
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{...cardBgTransform, ...cardBgImage}}></div>
        <div className="card-info">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkoutDayCard;