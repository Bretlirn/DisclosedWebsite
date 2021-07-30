import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import './Calendar.css'
import { auto } from "@popperjs/core";

const API_KEY = "ENTER KEY HERE.";
let calendars = [
  {calendarId: "devamchokshi23@gmail.com", color: "#B241D1"}, 
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
  },
  today: css`
    color: red;
    border: 1px solid red;
  `
}

let showFooter = false;


function CalendarComponent() {
    return (
        <div className="CalendarComponent">
      <body>
        <div
          style={{
            height: "50%",
            width: "50%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: auto,
            maxWidth: "1000px"
          }}
        >
          <div className = "calendarheader">
            <strong>
            <p>Sign Up for Our Events</p>
            </strong>       
          </div>
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} showFooter={showFooter} />
          <p style = {{fontFamily: 'Alice', paddingTop: 10}}>All times shown in PST</p>
        </div>
      </body>
    </div>
      )
}

export default CalendarComponent