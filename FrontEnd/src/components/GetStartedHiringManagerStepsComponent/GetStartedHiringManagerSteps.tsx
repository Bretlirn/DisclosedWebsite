import React from 'react';
import './GetStartedHiringManagerSteps.css';
import fiona from '../../assets/pictures/fiona.jpg';
import { FaPhoneAlt, FaYoutube  } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

const GetStartedHiringManagerSteps = () => {
    return(
        <div className = "get-started-hiring-manager-step-container">
            <div className = "get-started-hiring-manager-right-steps">
                <div className = "get-started-hiring-manager-big-title">
                    Are you the right fit?
                </div>
                <div className = "get-started-hiring-manager-small-title">
                    Fill out the form&nbsp;
                    <a href = "">here</a>.
                </div>
            </div>
            <div className = "get-started-hiring-manager-steps-component">
                <div className = "get-started-hiring-manager-step-items">
                    
                    <div className = 'get-started-hiring-manager-steps-title'>Our Speaker Process</div>
                    <div className = 'get-started-hiring-manager-steps-item'>
                        <FaPhoneAlt className = 'get-started-hiring-manager-steps-image'/>
                        30 min. Briefing Call
                    </div>

                    <div className = 'get-started-hiring-manager-steps-item'>
                        <FaYoutube className = 'get-started-hiring-manager-steps-image' style = {{color: 'red'}} size = '1x'/>
                        1 Hour&nbsp;<a href = "https://www.youtube.com/watch?v=YgRCA-xWSlQ">Live Session </a>
                    </div>

                    <div className = 'get-started-hiring-manager-steps-item'>
                        <IoChatbubblesOutline className = 'get-started-hiring-manager-steps-image' size = '1x'/>
                        1:1 sessions with engaged candidates
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStartedHiringManagerSteps;