/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Fade from '../util/FadeComponent/Fade';
import './DisplayLogos.css';



const DisplayLogos = ({images, text, staticImage, backgroundColor, numImages}:{
        images:Array<string>;
        text:string;
        staticImage:boolean;
        backgroundColor:string;
        numImages: number;
    }) => {
    const nImages = (typeof(numImages) == 'number' ? numImages : 1);
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

    }, [updateData]);
    //rendering
    if (data.length === 0){
        updateData = !updateData;
        return(
            <div className = "speaker-container" style= {{background: bgColor}}>
                <h1 className = "speaker-header"><strong>{text}</strong></h1>
            </div>
        );
    }
    console.log(images);
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
                    <Fade data={images} numImages={nImages}/>
                }

            </div>
        </div>
    );
}
export default DisplayLogos
