import React from 'react';
import DisplayLogos from '../components/DisplayLogosComponent/DisplayLogos';
import WordCloud from "../components/WordcloudComponent/WordCloud";
import ContactUs from '../components/ContactUsComponent/ContactUs'
import SocialsFooter from '../components/SocialsComponent/Socials';
import CalendarComponent  from '../components/CalendarComponent/Calendar';
function Home(){
    //This part required for DisplayLogos
    const arrayColumn = (arr, n) => arr.map((x) => x[n]);
    function importAll(r) {
        return r.keys().map(r);
    }
    const SpeakerLogos = arrayColumn(importAll(require.context('./SpeakerLogos/', false, /\.(png|jpe?g|svg)$/)), 'default');
    const PartnerLogos = arrayColumn(importAll(require.context('./PartnerLogos/', false, /\.(png|jpe?g|svg)$/)), 'default');

    return(
        <div>
            <DisplayLogos images = {SpeakerLogos} text= 'Our Speakers are from ...' staticImage={false} backgroundColor='black'/>
            <DisplayLogos images = {PartnerLogos} text= 'Our Partners are ...' staticImage={true}/>
        </div>
    );
}

export default Home;