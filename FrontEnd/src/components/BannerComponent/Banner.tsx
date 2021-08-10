import React from 'react';
import './Banner.css';


const Banner = ({image, top, bottom}:{
        image: string;
        top: string;
        bottom: string;
    }) => {
    return(
        <div className = "calendar-banner-container" style = {{height: '40vh'}}>
            <div className = "calender-banner-background" style = {{backgroundImage: `url(${image})`}}/>
            <div className="animated-title">
                <div className="text-top">
                    <div>
                        <span>{top}</span>
                    </div>
                </div>
                <div className="text-bottom">
                    <div>{bottom}</div>
                </div>
            </div>
        </div>
    );
};
export default Banner;