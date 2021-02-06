import  {ReactComponent as Github} from '../../assets/github.svg';
import  {ReactComponent as Linkdin} from '../../assets/linkdin.svg';
import  {ReactComponent as Twitter} from '../../assets/twitter.svg';
import  {ReactComponent as Gmail} from '../../assets/gmail.svg';

import ResumePdf from '../../resume/resume.pdf';
import './footer.scss';

const Footer = () => (
	<div className='footer' id='contact'>
        <div className='contact'>
          <h3 className='title2'>Contact</h3>
          <ul className='icons-container'>
            <li ><Github className='social-icon'/></li>
            <li ><Linkdin className='social-icon'/></li>
            <li ><Twitter className='social-icon'/></li>
            <li ><Gmail className='social-icon'/></li>
          </ul>
        </div>
        <div className='details'>
          <h3 className='title2'><a href={ResumePdf} className='link' target='_blank' rel="noopener noreferrer">MyResume</a></h3>
          <h5 className='title2'>&#169;2021 Vishalsingh</h5>
        </div>
      </div>
	);
export default Footer;