import React from 'react';
import './HomepageActionable.css';
import { AiOutlineYoutube } from "react-icons/ai";
import {  FaYoutube  } from "react-icons/fa";
import youtubeoutline from "../../assets/pictures/youtubeoutline.png";

/*<div style = {{marginTop: '138px'}}>
<a className = 'homepage-actionable-youtube' href = 'https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA"/live'>
<FaYoutube className = 'homepage-actionable-youtube-icon' size = '1x'/>
<div className = 'homepage-actionable-youtube-button'>
    Watch on Youtube
</div>
<img src = {youtubeoutline} className = 'homepage-actionable-youtube-outline' />
</a>
</div>*/

const HomepageActionable = () =>{
    const HomepageActionableBlock = ({title, description, buttonName, buttonURL}:{
        title:string;
        description:string;
        buttonName:string;
        buttonURL:string;
    }) => {
        return(
            <div className = 'hab-container'>
                    <div className = 'homepage-actionable-button-title'>
                        {title}
                    </div>
                    <div className = 'hab-description'>
                        {description}
                    </div>
                    <div>
                        <a className = 'homepage-actionable-button' href = {buttonURL}>{buttonName}</a>
                    </div>
            </div>
        )
    }

    const lrrDesc = "Sign up for your resume reviewed by real hiring managers or join us as we provide feedback for resumes";
    const miDesc = "Sign up for an exclusive mock interview session with hiring managers within tech and healthcare";

    return (
        <div className="homepage-actionable-container">
            <div className = 'homepage-actionable-title'>
                What we offer
            </div>
            <div className = 'homepage-actionable-widgets'>
                <HomepageActionableBlock title = "Live Resume Review" description = {lrrDesc} buttonName= 'sign up' buttonURL='https://www.eventbrite.com/e/live-resume-review-session-with-key-note-speakers-target-companies-tickets-149955967335'/>
                <a className = 'homepage-actionable-youtube-button' href = 'https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA"/live'>
                    Watch on Youtube
                </a>
                <HomepageActionableBlock title = "Mock Interview" description = {miDesc} buttonName= 'sign up' buttonURL='https://www.eventbrite.com/e/live-resume-review-session-with-key-note-speakers-target-companies-tickets-149955967335'/>
            </div>
        </div>
    );
}

export default HomepageActionable