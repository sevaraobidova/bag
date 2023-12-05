import classes from './ShowcaseImage.module.scss'
import showcase from '../../assets/bg-showcase.png'
function ShowcaseImg() {
    return ( 
        <div className={classes['show-img-box']}>
            <img className={classes['show-img']} src={showcase} alt="girl in showcase" />
        </div>
     );
}

export default ShowcaseImg;