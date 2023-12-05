import classes from './Showcase.module.scss';
import ShowcaseImage from './ShowcaseImage';
import Title from '../Common/Title/Title';
function Showcase() {

    return (
        <div className={classes.showcase} >
            <div className={classes['show-wrap']}>
                <div className={classes.title}>  <Title top='Look Stylish Be Stylish.' main='Look Stylish Be Stylish' mini="Before starting this business you should have ideas about the market and products to Compete with the Existing Businesses." text="Join Now" /></div>
                
                <ShowcaseImage />
            </div>
        </div>
    );
}

export default Showcase;