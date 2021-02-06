import HeroIcon from '../../assets/hero-icon';
import HeroButton from '../../assets/hero-button';
import {Tween} from 'react-gsap';

import './hero-page.scss';
const HeroPage = () => (
	<div className='hero-page'>
	<Tween from={{opacity:0}} duration={1.5} ease="ease-in">
	    <div className='hero-content'>        
          <div className='content'>
          	<Tween from={{ y: '50px',opacity:0}} stagger={.8} duration={1.5} ease="ease-in">
	            <h1 className='primary-heading'>Building Beautiful Apps For a beautiful Web </h1>
	            <p>Hi, I am Vishal. A Front-end Developer.
	              Go Down to know more about me.</p>
	            <span className='hero-button'><HeroButton /></span>  
            </Tween>        
          </div>
          </div>
        </Tween>
          <span className='hero-icon'><HeroIcon /></span>
      </div>
);
export default HeroPage;