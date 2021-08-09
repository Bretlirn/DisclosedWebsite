import React, { useMemo } from 'react';
import './GetStartedLanding.css';

const GetStartedLanding = ({titles}:{
    titles: Array<string>
}) => {
    const GetStartedLandingBoxes = (title: string) => {
        return(
            <div className = 'get-started-landing-boxes'>{title}</div>
        );
    }

    const numTitlesMemo = useMemo(() => (Array.from(Array(titles.length).keys())), [titles]);
    return(
        <div className = 'get-started-landing-container'>
            <div className = 'get-started-landing-title'>
                Are you ready to...
            </div>
            <div className = 'get-started-landing-boxes-container'>
                {titles.map((index) => GetStartedLandingBoxes(index))}
            </div>
        </div>
    );
}
export default GetStartedLanding;