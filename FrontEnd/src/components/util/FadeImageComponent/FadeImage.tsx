/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeImage.css'

const FadeImage = ({data, numImages}:{
    data:Array<string>;
    numImages:number;   
}
) => {
    //props validation/defaults
    const nImages = (typeof(numImages) == 'number' && numImages > data.length ? data.length : numImages);

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
                        <img src = {data[(current_image + n) % data.length]} className = "fade-img-logo" alt = "opps"/>
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

    const numImageMemo = useMemo(() => (Array.from(Array(nImages).keys())), [nImages]);
    return(
        <div>
            {numImageMemo.map((index) => cssTransitionFunction(index))}
        </div>

    );
}

export default FadeImage