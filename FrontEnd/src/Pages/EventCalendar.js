import React from 'react'
import CalendarComponent from '../components/CalendarComponent/Calendar';
import HighlightVideos from '../components/HighlightVideosCompoent/HighlightVideos';
import EventCalendarBanner from '../components/EventCalendarBannerComponent/EventCalendarBanner';
function EventCalendar(){
    return(
        <div>
            <EventCalendarBanner image = '../../assets/pictures/calendar.jpg' top = 'Event' bottom = 'Calendar'/>
            <HighlightVideos />
            <CalendarComponent/>
        </div>
    );
}

export default EventCalendar;