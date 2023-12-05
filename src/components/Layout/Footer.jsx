import Button from "../Common/Button"
import classes from './Footer.module.scss';
import logo from '../../assets/logo.png'
function Footer() {
    return ( 
        <div className={classes.footer}>
            <div className={classes['footer-inside']}>
                <div className={classes['footer-col']}>
                    <a href="/"><img src={logo} alt="logo" /></a>
                    <p >Lorem ipsum dolor sit amet consectetur adipiscing
                        sed do eiusmod.</p>
                </div >
                <div className={classes['footer-col']}>
                    <h3 className={classes.heading}>special catagories</h3>
                    <ul className={classes['footer-list']}>
                        <li><a href="#">water resistant</a></li>
                        <li><a href="#">charging system</a></li>
                        <li><a href="#">artificial leather</a></li>

                    </ul>
                </div>
                <div className={classes['footer-col']}>
                    <h3 className={classes.heading}>contact us</h3>
                    <ul className={classes['footer-list']}>
                        <li><a href="tel:(808)555-0111">(808) 555-0111</a></li>
                        <li><a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a></li>
                        <li><a href="#">http://www.codehow.com</a></li>
                    </ul>
                </div>
                <div className={classes['footer-col']}>
                    <h3 className={classes.heading}>News Letter</h3>
                    <input id="input" className='input' type="email" placeholder='enter your email' />
                    <div ><Button btnText='Subscribe' customStyle="orange" /></div>
                </div>
            </div>
       </div>
     );
}

export default Footer;