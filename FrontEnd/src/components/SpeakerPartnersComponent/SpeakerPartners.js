import React, { useState, useEffect, useRef} from 'react';
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

      /*
      <img src = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt = "Opps" />
      <img src = {images[(current_image+1) % images.length]} alt = "Opps" />
      */


    

    //return
    /*
                <img src = 'https://imgbin.com/png/089ziDLi/glaxosmithkline-pakistan-company-pharmaceutical-industry-aptamer-group-limited-png' className = "img" alt = ""/>
                <img src = {data[(current_image+1) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+2) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+3) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+4) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+5) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+6) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+7) % data.length][1]} className = "img" alt = ""/>
    */

    /* 
        
                <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {data}
                </ReactCSSTransitionGroup> 
    */
    
    
    /*const imageAnimation = (n) => {
        console.log(current_image);
        imageSwitch((current_image + n) % data.length);
        console.log(current_image);
        console.log("Before Beggining:", animationState);
        setAnimationState(!animationState);
        console.log("After Beggining:", animationState);
        setTimeout(() => {
            console.log("Before End:", animationState);
            setAnimationState(!animationState);
            console.log("After End:", animationState);
        }, 4000);
    };
    


    useEffect(() => {
        if (data != null){
            const imageTimer = setInterval(() => {
                imageAnimation(8);
            }, 5000);
            return () => {
                clearInterval(imageTimer);
            };
        }
        // clearing interval
    });*/

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
                <CSSTransition 
                in={animationState}
                timeout={500}
                unmountOnExit
                classNames = 'img'
                >
                    <img src = {data[(current_image) % data.length]} className = "img-logo" alt = "opps"/>
                </CSSTransition> 
                
                <CSSTransition 
                in={animationState}
                timeout={500}
                unmountOnExit
                classNames = 'img'
                >
                    <img src = {data[(current_image+1) % data.length]} className = "img-logo" alt = "opps"/>
                </CSSTransition> 
                
                <CSSTransition 
                in={animationState}
                timeout={500}
                unmountOnExit
                classNames = 'img'
                >
                    <img src = {data[(current_image+2) % data.length]} className = "img-logo" alt = "opps"/>
                </CSSTransition> 
                

            </div>
        </div>
    );
}

export default SpeakerPartners