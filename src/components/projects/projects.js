import {Reveal,Tween} from 'react-gsap';

import './project.scss';

const Projects = () => {
	
	const openLink= (address) => {
		window.open(address); 
	}
	return(
	<div className='projects' id='projects'>
		<Reveal repeat >
	        <Tween from={{ y: '20px',opacity:0}} duration={1.5} stagger={.2} ease="ease-in">
        		<h3 className='title'>PROJECTS</h3>
        	</Tween>
	    </Reveal>

        <div className='projects-container'>
	        <Reveal repeat >
	        	<Tween from={{opacity:0}} duration={1.5} stagger={.2} ease="ease-in">
		          <div className='project proj1'  onClick={() => openLink('https://afaceapp.herokuapp.com')}>
		            <p className='project-name'>Face Recognition app</p>
		            <p className='small-title'>TechStack</p>
		            <p className='project-details'>React, Redux, Heroku, Express, Postgres, context API.</p>
		          </div>
	          	</Tween>
	        </Reveal>

	         <Reveal repeat >
	        	<Tween from={{opacity:0}} duration={1.5} stagger={.2} ease="ease-in">
		          <div className='project proj2' onClick={() => openLink('https://github.com/xCvishal/cloth-shoper')}>
		            <p className='project-name'>Cloth Shopping App</p>
		            <p className='small-title'>TechStack</p>
		            <p className='project-details'>React, Firebase login, Redux.</p>
		          </div>
		        </Tween>
	        </Reveal>

	        <Reveal repeat >
	        	<Tween from={{opacity:0}} duration={1.5} stagger={.2} ease="ease-in">
			          <div className='project proj3' onClick={() => openLink('https://xcvishal.github.io/robofriends/')}>
			            <p className='project-name'>Robofriends App (SearchApp)</p>
			            <p className='small-title'>TechStack</p>
			            <p className='project-details'>React, Rest API</p>
			          </div>
	        	</Tween>
	        </Reveal>
        </div>
      </div>
      )};
export default Projects;