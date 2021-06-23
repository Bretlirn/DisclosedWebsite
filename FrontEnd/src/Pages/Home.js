import React from 'react'
import Subscribe from '../components/SubscribeComponent/Subscribe'
import SpeakerPartners from '../components/SpeakerPartnersComponent/SpeakerPartners'
import WordCloud from "../components/WordcloudComponent/WordCloud";
import ContactUs from './ContactUs'
function Home(){
    return(
        <div>
            <SpeakerPartners />
            <ContactUs />
            <div style = {{display: 'flex', justifyContent: 'center'}}>
                <WordCloud />
            </div>
        </div>
    );
}

export default Home;