/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';

const Fade = ({data, numImages, fontSize, fontFamily, color, bold, italicized}:{
    data:Array<string>;
    numImages:number;
    fontSize:string | null;
    fontFamily:string | null;
    color:string | null;
    bold:boolean | null;
    italicized:boolean | null;
}
) => {
    //props validation/defaults

    const nImages = (typeof(numImages) == 'number' && numImages > data.length ? data.length : numImages);
    const fSize = (typeof(fontSize) == 'string' ? fontSize : '3');
    const fFamily = (typeof(fontFamily) == 'string' ? fontFamily : 'Sans-serif');
    const fColor = (typeof(color) == 'string' ? color : '#000000');
    const isBold = (((typeof(bold) == 'boolean') && (bold === true)) ? 'bold' : 'normal');
    const isItalicized = (((typeof(italicized) == 'boolean') && (italicized === true)) ? 'italic' : 'normal');

    //states
    const [current_image, imageSwitch] = useState(0);
    const [animationState, setAnimationState] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [intermission, setIntermission] = useState(false);


    //functions
    const cssTransitionFunction = (n:number) => {
        if(data.length !== 0){
            return(
                <CSSTransition 
                    in={animationState}
                    timeout={500}
                    unmountOnExit
                    classNames = 'fade-img'
                    >
                        <div style = {{fontFamily:fFamily, fontSize:fSize, color:fColor, fontStyle:isItalicized, fontWeight:isBold}}>{data[(current_image + n) % data.length]}</div>
                </CSSTransition> 
            );
        }
    };

    //effects
    useEffect(() => {
        if (data.length !== 0){
            imageSwitch((current_image + numImages) % data.length);
            setAnimationState(!animationState);
            setFadeOut(!fadeOut);

        }
    }, [fadeIn, setFadeIn]);

    useEffect(() => {
        if (data.length !== 0){
            var imageTimeout =  setTimeout(() => {
                setAnimationState(!animationState);
                setIntermission(!intermission);
            }, 4500);
            return () => {
                clearTimeout(imageTimeout);
            };
        }
    }, [fadeOut, setFadeOut]);

    useEffect(() => {
        if (data.length !== 0){
            var imageTimeout = setTimeout(() => {
                setFadeIn(!fadeIn);
            }, 500);
            return () => {
                clearTimeout(imageTimeout);
            };
        }
    }, [intermission, setIntermission]);

    const numImagesMemo = useMemo(() => (Array.from(Array(nImages).keys())), [nImages]);
    return(
        <div>
            {numImagesMemo.map((index) => cssTransitionFunction(index))}
        </div>

    );
}

export default Fade