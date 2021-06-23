import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SpeakerPartners.css';

function SpeakerPartners (props){
    //states
    const [current_image, imageSwitch] = useState(0);
    const [data, setData] = useState(null);
    const [animationState, setAnimationState] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [intermission, setIntermission] = useState(false);
    //functions
    const arrayColumn = (arr, n) => arr.map(x => x[n]);
    const cssTransitionFunction = (n) => {
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
    };
    //variables
    var updateData = false;

    //effects
    useEffect(() => {
        fetch('http://localhost:5000/api/SpeakerPartners', {method: 'GET'})
            .then(response => {
                if (response.ok){
                    return response.json();
                }
                throw response;
            })
            .then (data => {
                var item = arrayColumn(data,1);
                setData(item);
                setFadeIn(true);
            })
            .catch(error => {
                console.log("Need to look at this", error);
            })
    }, [updateData]);

    useEffect(() => {
        console.log("in fade In effect");
        if (data != null){
            imageSwitch((current_image + 8) % data.length);
            setAnimationState(!animationState);
            setFadeOut(!fadeOut);
            console.log("Current image: ", current_image);
            console.log("Animation State: ", animationState);
            console.log("Fade Out: ", fadeOut);

        }
    }, [fadeIn, setFadeIn]);

    useEffect(() => {
        console.log("in fade Out effect");
        console.log("Current image: ", current_image);
        console.log("Animation State: ", animationState);
        console.log("Fade Out: ", fadeOut);
        if (data != null){
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
        if (data != null){
            var imageTimeout = setTimeout(() => {
                setFadeIn(!fadeIn);
            }, 500);
            return () => {
                clearTimeout(imageTimeout);
            };
        }
    }, [intermission, setIntermission]);

    //rendering
    if(!data){
        updateData = true;
        return(
            <div className = "speaker-container">
                <h1 className = "speaker-header"><strong>Our Speakers are from ... </strong></h1>
            </div>
        );
    }    
    return(   
        <div className = "speaker-container">
            <h1 className = "speaker-header"><strong>Our Speakers are from ... </strong></h1>
            <div className="slideshow-container">
                {cssTransitionFunction(0)}
                {cssTransitionFunction(1)}
                {cssTransitionFunction(2)}
                {cssTransitionFunction(3)}
                {cssTransitionFunction(4)}
                {cssTransitionFunction(5)}
                {cssTransitionFunction(6)}
                {cssTransitionFunction(7)}
                

            </div>
        </div>
    );
}

export default SpeakerPartners