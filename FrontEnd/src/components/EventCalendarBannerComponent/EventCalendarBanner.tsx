import React from 'react';
import './EventCalendarBanner.css';

const EventCalendarBanner = () => {
    return(
        <div className = "calendar-banner-container" style = {{height: '40vh'}}>
            <div className = "calender-banner-background" />
            <div className="animated-title">
                <div className="text-top">
                    <div>
                        <span>Event</span>
                    </div>
                </div>
                <div className="text-bottom">
                    <div>Calendar</div>
                </div>
            </div>
        </div>
    );
};
export default EventCalendarBanner;