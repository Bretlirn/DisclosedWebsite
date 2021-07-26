import React from 'react'
import './Button.css'

const STYLE = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    onClick,
    buttonStyle,
    buttonSizes}:{
        children:string;
        onClick:string;
        buttonStyle:any;
        buttonSizes:any;
    }
) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSizes = SIZES.includes(buttonSizes) ? buttonSizes : SIZES[0]
    return(

        <a className = {`btn ${checkButtonStyle} ${checkButtonSizes}`} style={{width: "150px"}} href = {onClick}>
            {children}
        </a>
    )
}