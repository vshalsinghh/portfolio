import  {ReactComponent as Laptop} from '../../assets/laptop.svg';
import  {ReactComponent as Html} from '../../assets/html.svg';
import  {ReactComponent as Css} from '../../assets/css.svg';
import  {ReactComponent as Js} from '../../assets/js.svg';
import  {ReactComponent as React} from '../../assets/react.svg';
import {Tween} from 'react-gsap';

import './skills.scss';

const Skills = () => (
	<div className='skills' id='skills'>
	<Tween from={{ y: '20px',opacity:0}} duration={1.5} stagger={.2} ease="ease-in">
        <h3 className='title'>SKILLS</h3>
        <div className='skills-container'>
          <ul>
            <li>
              <Html className='skill-logo'/>
              <p className='skill-name'>HTML</p> 
            </li>
            <li>
              <Css className='skill-logo'/>
              <p className='skill-name'>CSS</p> 
            </li>
            <li>
              <Js className='skill-logo'/>
              <p className='skill-name'>JS</p> 
            </li>
            <li>
              <React className='skill-logo'/>
              <p className='skill-name'>REACT</p> 
            </li>
          </ul>
        </div>
        <Laptop className='laptop-logo'/>
        </Tween>
      </div>
      );
export default Skills;