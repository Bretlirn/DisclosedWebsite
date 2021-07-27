import React, { useState } from 'react'
import { Button } from '../util/ButtonComponent/Button';
import './HomepageActionable.css'
const HomepageActionable = () =>{
    const HomepageActionableBlock = ({title, description, buttonName, buttonURL}:{
        title:string;
        description:string;
        buttonName:string;
        buttonURL:string;
    }) => {
        return(
            <div className = 'hab-container'>
                    <div className = 'homepage-actionable-title'>
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

    return (
        <div className="homepage-actionable-container">
            <div className = 'homepage-actionable-title'>
                What we do
            </div>
            <div className = 'homepage-actionable-widgets'>
                <HomepageActionableBlock title = "Live Resume Review" description = "<TODO>" buttonName= 'sign up' buttonURL='https://www.eventbrite.com/e/live-resume-review-session-with-key-note-speakers-target-companies-tickets-149955967335'/>
                <div style = {{paddingLeft:'5%' , paddingRight: '5%'}}>
                    <a className = 'homepage-actionable-button' href = 'https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA"/live'>Watch on Youtube</a>
                </div>
                <HomepageActionableBlock title = "Mock Interview" description = "<TODO>" buttonName= 'sign up' buttonURL='https://www.eventbrite.com/e/live-resume-review-session-with-key-note-speakers-target-companies-tickets-149955967335'/>
            </div>
        </div>
    );
}

export default HomepageActionable