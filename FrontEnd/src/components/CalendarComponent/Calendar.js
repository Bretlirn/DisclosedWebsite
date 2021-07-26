import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "ENTER KEY HERE.";
let calendars = [
  {calendarId: "devamchokshi23@gmail.com", color: "#B241D1"}, //add a color field to specify the color of a calendar
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
  },
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
}

let showFooter = true;


function CalendarComponent() {
    return (
        <div className="CalendarComponent">
      <body>
        <div
          style={{
            width: "90%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "1200px"
          }}
        >
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} showFooter={showFooter} />
        </div>
      </body>
    </div>
      )
}

export default CalendarComponent