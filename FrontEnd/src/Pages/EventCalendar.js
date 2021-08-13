import React from 'react'
import CalendarComponent from '../components/CalendarComponent/Calendar';
import HighlightVideos from '../components/HighlightVideosCompoent/HighlightVideos';
import Banner from '../components/BannerComponent/Banner';
import calendar from '../assets/pictures/calendar.jpg';
import EventsList from '../components/EventsListComponent/EventsList';

import microsoft from '../assets/logos/SpeakerLogos/microsoft.png';
import coinbase from '../assets/logos/SpeakerLogos/coinbase.png'
import riotgames from '../assets/logos/SpeakerLogos/riotgames.jpg';
import linkedin from '../assets/logos/SpeakerLogos/linkedin.png'
import google from '../assets/logos/SpeakerLogos/google.jpg';
import yelp from '../assets/logos/SpeakerLogos/yelp.png';
import loreal from '../assets/logos/SpeakerLogos/loreal.png'
import tiktok from '../assets/logos/SpeakerLogos/tiktok.png';
import netflix from '../assets/logos/SpeakerLogos/netflix.png';
function EventCalendar(){
    const names = ['Alokik Jain',
                   'Chintan Turakhia',
                   'Rudi Bonaparte',
                   'Vidal Graupera',
                   'Surbhi',
                   'Kent Wills',
                   'Stephanie Lio',
                   'Jeffrey Kuo',
                   'Richard Yang',
                   'Bruce Wang'
                  ];
    const titles = ["Senior Product Manager",
                    'Director of Engineering', 
                    'Director, Corporate and Business Strategy',
                    'Engineering Manager',
                    'Product Manager',
                    'Director of Engineering',
                    'Senior Product Marketing Manager',
                    'Product Manager',
                    'Senior Transportation Manager',
                    'Director of Engineering'
                   ];
    const companies = ['Microsoft',
                       'Coinbase',
                       'Riot Games',
                       'LinkedIn',
                       'Google',
                       'Yelp',
                       'Microsoft',
                       'Tiktok',
                       "L'Oreal",
                       'Netflix'
                    ];
                       
    const descriptions = ["Watch Alokik Jain's live review session.",
                          "Watch Chintan Turakhia's live review session.",
                          "Watch Rudi Bonaparte's live review session.",
                          "Watch Vidal Graupera's live review session.",
                          "Watch Surbhi's live review session.",
                          "Watch Kent Wills's live review session.",
                          "Watch Stephanie Lio's live review session.",
                          "Watch Jeffrey Kuo's live review session.",
                          "Watch Richard Yang's live review session.",
                          "Bruce Wang's live review session."
                         ];
    const images = [microsoft,coinbase,riotgames,linkedin,google,yelp,microsoft,tiktok, loreal, netflix];
    const buttonURLs = ["https://www.linkedin.com/events/6826305109689999360/",
                        'https://www.linkedin.com/events/6826306235109830656/',
                        'https://www.linkedin.com/events/6826307079930744832/', 
                        'https://www.linkedin.com/events/6831663919141052416/',
                        'https://www.linkedin.com/events/6831664921558740992/',
                        'https://www.linkedin.com/events/6831666115710631936/',
                        'https://www.linkedin.com/events/6831667000058683392/',
                        'https://www.linkedin.com/in/jeffrey-kuo-57067820/',
                        'https://www.linkedin.com/in/tzuulin-richard-yang-229b024b/',
                        'https://www.linkedin.com/in/batmany13/'
                       ];
    const dates = [new Date('August 12, 2021 16:00:00 PDT'), 
                   new Date('August 19, 2021 16:00:00 PDT'), 
                   new Date('August 26, 2021 16:00:00 PDT'), 
                   new Date('September 2, 2021 16:00:00 PDT'),
                   new Date('September 9, 2021 16:00:00 PDT'),
                   new Date('September 23, 2021 16:00:00 PDT'),
                   new Date('September 30, 2021 16:00:00 PDT'),
                   new Date('October 7, 2021 16:00:00 PDT'),
                   new Date('September 21, 2021 16:00:00 PDT'),
                   new Date('September 28, 2021 16:00:00 PDT')
                  ];
    return(
        <div>
            <Banner image = {calendar} top = 'Event' bottom = 'Calendar'/>
            <EventsList names = {names} titles = {titles} companies = {companies} descriptions = {descriptions} times = {dates} images = {images} buttonURLs = {buttonURLs} />
            <HighlightVideos />
        </div>
    );
}

export default EventCalendar;