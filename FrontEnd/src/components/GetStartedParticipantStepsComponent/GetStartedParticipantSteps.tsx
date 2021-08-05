import React from 'react';
import { string } from 'yargs';
import './GetStartedParticipantSteps.css';
import eventbrite from '../../assets/logos/eventbrite.png';
import fiona from '../../assets/pictures/fiona.jpg';
import { IoChatbubblesOutline } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";
const GetStartedParticipantSteps = () => {
    const GetStartedParticipantStepsItem = ({buttonName, buttonURL, title, image, imageWidth, imageHeight}:{
        buttonName: string;
        buttonURL: string;
        title: string;
        image?: string | null;
        imageWidth?: string;
        imageHeight?: string;
    }) => {
        const picture = (typeof(image) == 'string' ? image: 'none');
        const width = (typeof(imageWidth) == 'string') ? imageWidth : '50px';
        const height = (typeof(imageHeight) == 'string') ? imageHeight : '50px';

        if (picture === 'none'){
            return(
                <div className = 'get-started-participant-steps-item'>
                    <a className = 'get-started-participant-steps-button' href = {buttonURL}>{buttonName}</a>
                    {title}
                </div>
            );
        }
        return(
            <div className = 'get-started-participant-steps-item'>
                <a className = 'get-started-participant-steps-button' href = {buttonURL}>{buttonName}</a>
                {title}
                <img className = 'get-started-participant-steps-image' src = {picture} alt = "Not found" width={width} height={height} />
            </div>
        );
    }
    return(
        <div className = "get-started-participant-step-container">
            <div style = {{height:'75px', width:'100%'}} />
            <div className = 'get-started-participant-steps-item'>
                <a className = 'get-started-participant-steps-button' href = 'https://www.eventbrite.com/e/live-resume-review-session-with-key-note-speakers-target-companies-tickets-149955967335'>Step 1</a>
                Sign Up @
                <img className = 'get-started-participant-steps-image' src = {eventbrite} alt = "Not found" height= '36px' width='194px' />
            </div>
            <div className = 'get-started-participant-steps-item'>
                <a className = 'get-started-participant-steps-button' href = 'https://www.linkedin.com/company/disclosed-edu/'>Step 2</a>
                Chat with us!
                <IoChatbubblesOutline className = 'get-started-participant-steps-icons'/>
            </div>
            <div className = 'get-started-participant-steps-item'>
                <a className = 'get-started-participant-steps-button' href = 'mailto:disclosed.advice@gmail.com'>Step 3</a>
                Submit your Resume*
                <AiFillMail className = 'get-started-participant-steps-icons'/>
            </div>
            <div className = 'get-started-participant-steps-item'>
                <a className = 'get-started-participant-steps-button' href = 'mailto:disclosed.advice@gmail.com'>Step 4</a>
                Attend our Events
                <a className = 'get-started-participant-ec-button' href = '/eventcalendar'>Event Calenar</a>
            </div>
            <div className = 'get-started-participant-steps-disclaimer'>*Tickets must be reserved before a resume is submitted.</div>
            <div style = {{height:'75px', width:'100%'}} />
        </div>
    );

}

export default GetStartedParticipantSteps;