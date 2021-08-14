/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeImage.css'

const FadeImage = ({data, numImages, imageSize}:{
    data:Array<string>;
    numImages: number;   
    imageSize: string | null;
}
) => {
    //props validation/defaults
    const nImages = (typeof(numImages) == 'number' && numImages > data.length ? data.length : numImages);
    const imgSize = (typeof(imageSize) == 'string' ? imageSize: '125px');

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
                    /*unmountOnExit*/
                    classNames = 'fade-img'
                    >
                        <img src = {data[(current_image + n) % data.length]} className = "fade-img-logo" style = {{width: imgSize, height: imgSize}} alt = "opps"/>
                </CSSTransition> 
            );
        }
    };

    //effects
    useEffect(() => {
        if (data.length !== 0){
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
                imageSwitch((current_image + numImages) % data.length);
            }, 480);
            return () => {
                clearTimeout(imageTimeout);
            };
        }
    }, [intermission, setIntermission]);

    const numImageMemo = useMemo(() => (Array.from(Array(nImages).keys())), [nImages]);
    return(
        <div style = {{display: 'flex', justifyContent: 'space-evenly', alignItems:'center'}}>
            {numImageMemo.map((index) => cssTransitionFunction(index))}
        </div>

    );
}

export default FadeImage