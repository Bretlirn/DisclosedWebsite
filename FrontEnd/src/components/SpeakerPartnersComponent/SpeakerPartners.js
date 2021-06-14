import React, { useState, useEffect, useLayoutEffect} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group';
import './SpeakerPartners.css'

function SpeakerPartners (props){
    const [current_image, imageSwitch] = useState(0);
    const [data, setData] = useState(null);
    var updateData = false;
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
      /*
      <img src = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt = "Opps" />
      <img src = {images[(current_image+1) % images.length]} alt = "Opps" />
      */
    useEffect(() => {
        const items = data.map((item, i) => (
            <div key={i} onClick={() => this.handleRemove(i)}>
              {item}
            </div>
    }, [])

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
                <img src = 'https://imgbin.com/png/089ziDLi/glaxosmithkline-pakistan-company-pharmaceutical-industry-aptamer-group-limited-png' className = "img" alt = ""/>
                <img src = {data[(current_image+1) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+2) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+3) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+4) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+5) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+6) % data.length][1]} className = "img" alt = ""/>
                <img src = {data[(current_image+7) % data.length][1]} className = "img" alt = ""/>
            </div>
        </div>
    );
}

export default SpeakerPartners