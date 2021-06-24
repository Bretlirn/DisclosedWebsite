import React from 'react'
import Subscribe from '../components/SubscribeComponent/Subscribe'
import SpeakerPartners from '../components/SpeakerPartnersComponent/SpeakerPartners'
import Email from "../components/EmailComponent/Email";
import WordCloud from "../components/WordcloudComponent/WordCloud";
function Home(){
    return(
        <div>
            <SpeakerPartners />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Email />
            </div>
            <WordCloud />
        </div>
    );
}

export default Home;