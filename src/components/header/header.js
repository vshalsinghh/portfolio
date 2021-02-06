import  {ReactComponent as Github} from '../../assets/github.svg';
import  {ReactComponent as Linkdin} from '../../assets/linkdin.svg';
import  {ReactComponent as Twitter} from '../../assets/twitter.svg';
import  {ReactComponent as Gmail} from '../../assets/gmail.svg';

import './header.scss';

const Header = () => (
	<div className='header'>
        <div className='navbar'>
          <h3 className='nav-logo'>Vishal Singh</h3>
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
              <li ><Github className='social-icon'/></li>
              <li ><Linkdin className='social-icon'/></li>
              <li ><Twitter className='social-icon'/></li>
              <li ><Gmail className='social-icon'/></li>
          </ul>
        </div>
      </div>
      );
export default Header;