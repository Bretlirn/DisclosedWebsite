import React from 'react'
import './GetStartedLanding.css'
const GetStartedLanding = () =>{
    return(
        <div className = "get-started-landing-component">
            <div style= {{height:'100px'}} />
            <a className = "get-started-landing-button" href = "/participant">I'm a <strong>Job Seeker</strong></a>
            <div style= {{height:'100px'}} />
            <a className = "get-started-landing-button" href = '/hiringmanager'>I'm a <strong>Hiring Manager</strong></a>
            <div style= {{height:'100px'}} />
        </div>
    );

}

export default GetStartedLanding;