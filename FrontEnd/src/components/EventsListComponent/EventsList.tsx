import React from 'react';
import './EventsList.css';

const EventsList = ({names, titles, companies, images, descriptions, buttonURLs, times}:{
    names: Array<string>;
    titles: Array<string>;
    companies: Array<string>;
    images: Array<string>;
    descriptions: Array<string>;
    buttonURLs: Array<string>;
    times: Array<Date>;
}) => {
    const EventsListBoxes = (name: string, title: string, company:string, image: string, description: string, buttonURL: string, time: Date) => {
        const month = ['January', 
                        'Feburary', 
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'];
        const day = ['Sunday', 
                     'Monday', 
                     'Tuesday', 
                     'Wednesday', 
                     'Thursday', 
                     'Friday', 
                     'Saturday'];
                     
        const suffix = ['st', 'nd', 'rd', 'th'];
        const meridiem = ['AM', 'PM']
        if (time.getTime() > Date.now()){
            return(
                <a href = {buttonURL} className = 'el-boxes'>
                    <img className = 'el-box-image' src = {image} />
                    <div className = 'el-box-name'>
                        {name}
                        <div className = 'el-box-title'>{title}<br/>@ {company}</div>
                    </div>
                    <div className = 'el-box-description'>
                        {description}
                    </div>
                    <div className = 'el-box-time'>
                        {day[time.getDay()]},&nbsp;
                        {month[time.getMonth()]}&nbsp;
                        {time.getDate()}{suffix[Math.min(time.getDate()-1, 3)]}
                        <br />
                        {time.getHours() % 12}:
                        {(time.getMinutes()<10?'0':'') + time.getMinutes()}&nbsp;
                        {meridiem[Math.floor(time.getHours() / 12)]}&nbsp;-&nbsp;
                        {(time.getHours() + 1) % 12}:
                        {(time.getMinutes()<10?'0':'') + time.getMinutes()}&nbsp;
                        {meridiem[(Math.floor((time.getHours() + 1) / 12)) % 2]}&nbsp;
                        PST
                    </div>
                    <hr />
                    <div className = 'el-box-button' >RSVP here</div>
                </a>
            );
        }
    }
    console.log(titles);
    return(
        <div className = 'el-container'>
            <div className = 'el-title'>
                Upcoming Events
            </div>
            <div className = 'el-boxes-container'>
                {titles.map((value, index) => EventsListBoxes(names[index], titles[index], companies[index], images[index], descriptions[index], buttonURLs[index], times[index]))}
            </div>
        </div>
    );
}
export default EventsList;
