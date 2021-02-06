import {Tween} from 'react-gsap';

import './project.scss';

const Projects = () => (
	<div className='projects' id='projects'>
	<Tween from={{ y: '20px',opacity:0}} duration={1.5} stagger={.2} ease="ease-in">
        <h3 className='title'>PROJECTS</h3>
        <div className='projects-container'>
          <div className='project'>
            <p className='project-name'>Face Recognition app</p>
            <p className='small-title'>TechStack</p>
            <p className='project-details'>React, Redux, Heroku, Express, Postgres, context API.</p>
          </div>
          <div className='project'>
            <p className='project-name'>Cloth Shopping App</p>
            <p className='small-title'>TechStack</p>
            <p className='project-details'>React, Firebase login, Redux.</p>
          </div>
          <div className='project'>
            <p className='project-name'>Robofriends App (SearchApp)</p>
            <p className='small-title'>TechStack</p>
            <p className='project-details'>React, Rest API</p>
          </div>
        </div>
        </Tween>
      </div>
      );
export default Projects;