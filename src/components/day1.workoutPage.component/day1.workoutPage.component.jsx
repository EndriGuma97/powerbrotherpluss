import './day1.workoutPage.styles.scss';
const FirstDay = () => {
    return (
        <div className='pushDay-comp'><div class="designwrapd1">
        <h1 class="designd1">PUSH DAY</h1>
      </div>  
        <div className="disclaimer">Start your push day workout with a warm-up, including light cardio and dynamic stretches. Focus on compound exercises like bench press, overhead press, and push-ups to target multiple muscle groups. Pay attention to form and technique, progressively increase the weight or reps, and allow adequate rest between sets. After the workout, cool down with static stretches, stay hydrated, and ensure proper nutrition for muscle growth and recovery.</div>
        <div className='pushDay'>
            
      <div className="workout-card">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            loading='lazy'
            srcdoc="<style>
            * {
            padding: 0;
            margin: 0;
            overflow: hidden;
            }
            
            body, html {
              height: 100%;
            }
            
            img, svg {
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
            }
            
            svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
              transition: all 250ms ease-in-out;
            }
            
            body:hover svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
              transform: scale(1.2);
            }
          </style>
          <a href='https://www.youtube.com/embed/XIHO5t_VBPQ'>
            <img src='https://img.youtube.com/vi/XIHO5t_VBPQ/hqdefault.jpg' alt='Push Ups'>
            <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
          </a>
          "
            src="https://www.youtube.com/embed/XIHO5t_VBPQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="exercise-info">
          <div className="exercise-name">Exercise 1: Push ups</div>
          <div className="exercise-sets">4 sets of 12 reps</div>
        </div>
      </div>
      <div className="workout-card">
        <div className="video-container">
        <iframe width="560" height="315"
        loading='lazy'
        srcdoc="<style>
        * {
        padding: 0;
        margin: 0;
        overflow: hidden;
        }
        
        body, html {
          height: 100%;
        }
        
        img, svg {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        
        svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
          transition: all 250ms ease-in-out;
        }
        
        body:hover svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
          transform: scale(1.2);
        }
      </style>
      <a href='https://www.youtube.com/embed/8bfJ3sfUTos'>
        <img src='https://img.youtube.com/vi/8bfJ3sfUTos/hqdefault.jpg' alt='Incline Dumbell Press'>
        <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
      </a>
      "
        
        src="https://www.youtube.com/embed/8bfJ3sfUTos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="exercise-info">
          <div className="exercise-name">Exercise 2: Incline Dumbell Press</div>
          <div className="exercise-sets">3 sets of 10 reps</div>
        </div>
      </div>
      <div className="workout-card">
        <div className="video-container">
        <iframe width="560" height="315" 
        loading='lazy'
        srcdoc="<style>
        * {
        padding: 0;
        margin: 0;
        overflow: hidden;
        }
        
        body, html {
          height: 100%;
        }
        
        img, svg {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        
        svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
          transition: all 250ms ease-in-out;
        }
        
        body:hover svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
          transform: scale(1.2);
        }
      </style>
      <a href='https://www.youtube.com/embed/QwuUZ5wgQOk'>
        <img src='https://img.youtube.com/vi/QwuUZ5wgQOk/hqdefault.jpg' alt='Dumbell Flyes'>
        <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
      </a>
      "
        src="https://www.youtube.com/embed/QwuUZ5wgQOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="exercise-info">
          <div className="exercise-name">Exercise 3: Dumbell Flyes</div>
          <div className="exercise-sets">3 sets of 10 reps</div>
        </div>
      </div>
      <div className="workout-card">
        <div className="video-container">
        <iframe width="560" height="315" 
        loading='lazy'
        srcdoc="<style>
        * {
        padding: 0;
        margin: 0;
        overflow: hidden;
        }
        
        body, html {
          height: 100%;
        }
        
        img, svg {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        
        svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
          transition: all 250ms ease-in-out;
        }
        
        body:hover svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
          transform: scale(1.2);
        }
      </style>
      <a href='https://www.youtube.com/embed/0JfYxMRsUCQ'>
        <img src='https://img.youtube.com/vi/0JfYxMRsUCQ/hqdefault.jpg' alt='Push Ups'>
        <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
      </a>
      "
        src="https://www.youtube.com/embed/0JfYxMRsUCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="exercise-info">
          <div className="exercise-name">Exercise 4: Dumbell Shoulder Press </div>
          <div className="exercise-sets">3 sets of 8 reps</div>
        </div>
      </div>
      <div className="workout-card">
        <div className="video-container">
        <iframe width="560" height="315" 
        loading='lazy'
        srcdoc="<style>
        * {
        padding: 0;
        margin: 0;
        overflow: hidden;
        }
        
        body, html {
          height: 100%;
        }
        
        img, svg {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        
        svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
          transition: all 250ms ease-in-out;
        }
        
        body:hover svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
          transform: scale(1.2);
        }
      </style>
      <a href='hhttps://www.youtube.com/embed/E3abEP8SIh0'>
        <img src='https://img.youtube.com/vi/E3abEP8SIh0/hqdefault.jpg' alt='Side Lateral Raise'>
        <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
      </a>
      "
        src="https://www.youtube.com/embed/E3abEP8SIh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="exercise-info">
          <div className="exercise-name">Exercise 5: Side Lateral Raise </div>
          <div className="exercise-sets">3 sets of 8 reps</div>
        </div>
      </div>
      <div className="workout-card">
        <div className="video-container">
        <iframe width="560" height="315" 
        loading='lazy'
        
        srcdoc="<style>
        * {
        padding: 0;
        margin: 0;
        overflow: hidden;
        }
        
        body, html {
          height: 100%;
        }
        
        img, svg {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        
        svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
          transition: all 250ms ease-in-out;
        }
        
        body:hover svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
          transform: scale(1.2);
        }
      </style>
      <a href='https://www.youtube.com/embed/ypJA34CWr78'>
        <img src='https://img.youtube.com/vi/ypJA34CWr78/hqdefault.jpg' alt='Push Ups'>
        <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
      </a>
      "
        src="https://www.youtube.com/embed/ypJA34CWr78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="exercise-info">
          <div className="exercise-name">Exercise 6: Triceps Dumbbell Kickback </div>
          <div className="exercise-sets">5 sets of 10 reps</div>
        </div>
      </div>
      </div>
      </div>
    );
  };
  

  export default FirstDay;