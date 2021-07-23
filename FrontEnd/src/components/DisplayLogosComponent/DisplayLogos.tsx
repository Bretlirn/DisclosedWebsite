/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DisplayLogos.css';

const DisplayLogos = ({
    images, text, staticImage, backgroundColor}:{
        images:Array<string>;
        text:string;
        staticImage:boolean;
        backgroundColor:string;
    }) => {
    const staticImg = (typeof(staticImage) == 'boolean' ? staticImage : false);
    const bgColor = (typeof(backgroundColor) == 'string' ? backgroundColor: "#888888");
    //states
    const [current_image, imageSwitch] = useState(0);
    const [data, setData] = useState(['']);
    const [animationState, setAnimationState] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [intermission, setIntermission] = useState(false);
    //functions
    const arrayColumn = (arr:any, n:any) => arr.map((x:any) => x[n]);
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
    const dynamicImageFunction = () => {
        return(
            <div>
                {cssTransitionFunction(0)}
                {cssTransitionFunction(1)}
                {cssTransitionFunction(2)}
                {cssTransitionFunction(3)}
                {cssTransitionFunction(4)}
                {cssTransitionFunction(5)}
                {cssTransitionFunction(6)}
                {cssTransitionFunction(7)}
            </div>
        )
    }
    //variables
    var updateData = false;

    //effects
    useEffect(() => {
        async function fetchingAPI(){
            const resp = await fetch('http://localhost:5000/api/SpeakerPartners', {method: 'GET'});
            if (resp.ok){
                const respData = await resp.json();
                const item = arrayColumn(respData,1);
                setData(item);
                console.log(item);
                setFadeIn(true);
            }
            else{
                console.log("Something went wrong in fetching");
            }
        }
        //fetchingAPI();
        setData(images);
        setFadeIn(true);

    }, [updateData]);

    useEffect(() => {
        if (data.length !== 0){
            imageSwitch((current_image + 8) % data.length);
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

    //rendering
    if (data.length === 0){
        updateData = !updateData;
        return(
            <div className = "speaker-container" style= {{background: bgColor}}>
                <h1 className = "speaker-header"><strong>{text}</strong></h1>
            </div>
        );
    }

    return(   
        <div className = "speaker-container" style= {{background: bgColor}}>
            <h1 className = "speaker-header"><strong>{text}</strong></h1>
            <div className="slideshow-container">
                {staticImg ? 
                    images.map((item, index) => {
                        return(
                            <li key = {index} style = {{listStyle:'none'}}>
                                <img src = {item} className = "img-logo" alt = "opps"/>
                            </li>
                        )
                    })
                    :
                    dynamicImageFunction()
                }

            </div>
        </div>
    );
}
export default DisplayLogos
