import  {ReactComponent as Github} from '../../assets/github.svg';
import  {ReactComponent as Linkdin} from '../../assets/linkdin.svg';
import  {ReactComponent as Twitter} from '../../assets/twitter.svg';
import  {ReactComponent as Gmail} from '../../assets/gmail.svg';

import './header.scss';

const Header = () => (
	<div className='header'>
        <div className='navbar'>
          <h3 className='nav-logo'><a href="/">Vishal Singh</a></h3>
          <div className='nav-links'>
              <ul>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
          </div>
        </div>
        <div className='navbar-icons'>
          <ul className='icons-container'>
              <li ><a href="https://github.com/xCvishal" target="_blank" rel="noopener noreferrer"><Github className='social-icon'/></a></li>
              <li >
	              <a href="https://www.linkedin.com/in/vishal-singh-371726151" target="_blank" rel="noopener noreferrer">
					<Linkdin className='social-icon'/>
					</a>
              </li>
              <li ><Twitter className='social-icon'/></li>
              <li ><a href="mailto:vishalsingh2402@gmail.com"><Gmail className='social-icon'/></a></li>
          </ul>
        </div>
      </div>
      );
export default Header;