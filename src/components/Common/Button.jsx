import React from 'react';
import classes from './Button.module.scss';
import '../../App.css'



// USAGE EXAMPLES TO USE INSIDE OF YOUR PAGE OR COMPONENT

// USAGE EXAMPLE1: <Button btnText='whatever text' customStyle='transparent'/>
// USAGE EXAMPLE2: <Button btnText='whatever text' customStyle='orange'/>

export default function Button({ customStyle, btnText }) {
    const styleTypes = {
        transparent: {
            color: 'rgba(245, 155, 0, 1)',
            border: '1px solid rgba(245, 155, 0, 0.2)',
            boxShadow: '0px 4px 22px 0px rgba(0, 0, 0, 0.12)',
        },
        orange: {
            backgroundColor: 'rgba(245, 155, 0, 1)',
            color: 'white',
        }
    };

    const buttonStyle = styleTypes[customStyle]; 
    return (
        <div>
            <button className={`${classes.btn} `} style={buttonStyle}>{btnText}</button>
        </div>
    );
}
