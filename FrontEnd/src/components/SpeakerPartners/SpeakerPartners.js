import React, { useState, useEffect, useLayoutEffect} from 'react'
import './SpeakerPartners.css'
import ap from './ap.png'
import dn from './dn.png'
import jw from './jw.png'
import md from './md.png'

function SpeakerPartners (props){
    console.log("Hello Wrold!");
    const [current_image, imageSwitch] = useState(0);
    const [data, setData] = useState(null);
    var updateData;
    useEffect(() => {
        fetch('http://localhost:5000/api/SpeakerPartners', {method: 'GET'})
            .then(response => {
                if (response.ok){
                    return response.json();
                }
                throw response;
            })
            .then (data => {
                console.log("Looking at data", data);
                setData(data);
            })
            .catch(error => {
                console.log("Need to look at this", error);
            })
    }, [updateData]);
    updateData = false;
    var images = [ap,dn,jw];
 
    useEffect(() => {
        const timer = setInterval(() => {
            imageSwitch((current_image + 2) % images.length)
        }, 2000);
                   // clearing interval
        return () => clearInterval(timer);
      });
      /*
      <img src = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt = "Opps" />
      <img src = {images[(current_image+1) % images.length]} alt = "Opps" />
      */
    if(!data){
        updateData = true;
        return(
            <div className="slideshow-container">
                <span> --- Loading ---</span>
            </div>
        );
    }
    return(   
        <div className="slideshow-container">
            <span>{data.length}</span>
            <img src = {data[(current_image) % data.length][1]} alt = "Opps" width = "250" height = "250"/>
            <img src = {data[(current_image+1) % data.length][1]} alt = "Opps" width = "250" height = "250"/>
        </div>
    );
}

export default SpeakerPartners