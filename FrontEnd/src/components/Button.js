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
    type,
    onClick,
    buttonStyle,
    buttonSizes
}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSizes = SIZES.includes(buttonSizes) ? buttonSizes : SIZES[0]
    return(
        <button className = {`btn ${checkButtonStyle} ${checkButtonSizes}`} onClick = {onClick}>
            {children}
        </button>
    )
}