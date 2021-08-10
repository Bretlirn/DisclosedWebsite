import React from 'react'
import CalendarComponent from '../components/CalendarComponent/Calendar';
import HighlightVideos from '../components/HighlightVideosCompoent/HighlightVideos';
import Banner from '../components/BannerComponent/Banner';
import calendar from '../assets/pictures/calendar.jpg';
function EventCalendar(){
    return(
        <div>
            <Banner image = {calendar} top = 'Event' bottom = 'Calendar'/>
            <HighlightVideos />
            <CalendarComponent/>
        </div>
    );
}

export default EventCalendar;