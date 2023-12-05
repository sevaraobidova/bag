import Button from "../Button";
import classes from './Title.module.scss'
function Title(props) {
    return (
        <div className={classes.title}>
            <h3 className={classes.top}>{props.top}</h3>
            <h1 className={classes.main}
                style={{ color: `${props.color}`, fontSize:`${props.fSize}`}}>
                {props.main}
            </h1>
            <p style={{ color1: `${props.color}`}}>
                {props.mini}
            </p>
            <Button width="40%" btnText={props.text} customStyle="orange" />
        </div>
    );
}

export default Title;