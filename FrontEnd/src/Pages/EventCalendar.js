import React from 'react'
import CalendarComponent from '../components/CalendarComponent/Calendar';
import HighlightVideos from '../components/HighlightVideosCompoent/HighlightVideos';
import Banner from '../components/BannerComponent/Banner';
import calendar from '../assets/pictures/calendar.jpg';
import EventsList from '../components/EventsListComponent/EventsList';

import microsoft from '../assets/logos/SpeakerLogos/microsoft.png';
function EventCalendar(){
    const names = ['Alokik Jain',
                   'Chintan Turakhia',
                   'Rudi Bonaparte',
                   'Vidal Graupera',
                   'Surbhi',
                   'Kent Wills',
                   'Stephanie Lio'
                   ];
    const titles = ["Alokik Jain, Senior Product Manager @ Microsoft",
                    'Chintan Turakhia, Engineering Leadership @ Uber', 
                    'Rudi Bonaparte, Director, Corporate and Business Strategy @ Riot Games',
                    'Vidal Graupera, Engineer @ LinkedIn',
                    'Surbhi, Product Manager @ Google',
                    'Kent Wills, Engineering Leadership @ Yelp',
                    'Stephanie Lio, Senior Product Marketing Manager @ Microsoft'
                ];
    const descriptions = ["Watch Alokik Jain as he gives valuable feedback on resumes.",
                          'Watch Chintan Turakhia as he gives valuable feedback on resumes.',
                          'Watch Rudi Bonaparte as he gives valuable feedback on resumes.',
                          'Watch Vidal Graupera as he gives valuable feedback on resumes.',
                          'Watch Surbhi as he gives valuable feedback on resumes.',
                          'Watch Kent Wills as he gives valuable feedback on resumes.',
                          'Watch Stephanie Lio as he gives valuable feedback on resumes.'
                        ];
    const images = [microsoft,microsoft,microsoft,microsoft];
    const buttonURLs = ["/",'/', '/', '/'];
    const dates = [new Date('August 12, 2021 16:00:00 PDT'), 
                   new Date('August 19, 2021 16:00:00 PDT'), 
                   new Date('August 26, 2021 16:00:00 PDT'), 
                   new Date('September 2, 2021 16:00:00 PDT'),
                   new Date('September 9, 2021 16:00:00 PDT'),
                   new Date('September 23, 2021 16:00:00 PDT'),
                   new Date('September 30, 2021 16:00:00 PDT')
                ];
    return(
        <div>
            <Banner image = {calendar} top = 'Event' bottom = 'Calendar'/>
            <HighlightVideos />
            <EventsList name = {names} titles = {titles} descriptions = {descriptions} times = {dates} images = {images} buttonURLs = {buttonURLs} />
        </div>
    );
}

export default EventCalendar;