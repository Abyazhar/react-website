import React from 'react';
import '../Button/Button.scss';

const STYLES= ['btn--primary', 'btn--outline','btn--cart', 'btn--buy','FormButton', 'FormGoogle']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile','btn--wide']
const COLOR = ['primary','blue','purple', 'green']

//xporting func button to value we want t0 target!
export const Button =({
    children, 
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
...otherProps}) => { 
        //return avctual value, abv in2 button GUI

        //function == showcase spec style we 
        const checkButtonStyle =STYLES.includes (buttonStyle) ? //value pass ovr func btn = check if btncreated has a btnStyle 
        buttonStyle
         : STYLES[0]; //==1st position in STYLES::if want spec btn-outline jst define down here 
        const checkButtonSize =SIZES.includes (buttonSize) ? //value pass ovr func btn = check if btncreated has a btnStyle 
        buttonSize
         : SIZES[0];
        const checkButtonColor =COLOR.includes (buttonColor) ? //value pass ovr func btn = check if btncreated has a btnStyle 
        buttonColor
         : null; //shouldnt target the color should be null

        return (
            //wtvr wrds~lttrs:: sign up etc we want 2 pass up in2 btn GUI == btncreated
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} {...otherProps} onClick={onClick}
        type ={type}>{children}</button> 
        )
    }

    

