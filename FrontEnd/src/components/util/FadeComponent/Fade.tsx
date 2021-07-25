import React, { useState, useEffect, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';

const Fade = ({data, numImages}:{
    data:Array<string>;
    numImages:number;   
}
) => {

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
                    classNames = 'img'
                    >
                        <img src = {data[(current_image + n) % data.length]} className = "img-logo" alt = "opps"/>
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

    const memoizedValue = useMemo(() => (Array.from(Array(numImages).keys())), [numImages]);
    return(
        <div>
            {memoizedValue.map((index) => cssTransitionFunction(index))}
        </div>

    );
}

export default Fade