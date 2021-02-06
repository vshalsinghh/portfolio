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
            <p className='project-details'>React, Redux, Heroku, det, flo, fkgo</p>
          </div>
          <div className='project'>
            <p className='project-name'>Face Recognition app</p>
            <p className='small-title'>TechStack</p>
            <p className='project-details'>React, Redux, Heroku</p>
          </div>
          <div className='project'>
            <p className='project-name'>Face Recognition app</p>
            <p className='small-title'>TechStack</p>
            <p className='project-details'>React, Redux, Heroku</p>
          </div>
          <div className='project'>
            <p className='project-name'>Face Recognition app</p>
            <p className='small-title'>TechStack</p>
            <p className='project-details'>React, Redux, Heroku</p>
          </div>
        </div>
        </Tween>
      </div>
      );
export default Projects;