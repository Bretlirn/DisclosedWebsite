import React from 'react'
import Subscribe from '../components/SubscribeComponent/Subscribe'
import SpeakerPartners from '../components/SpeakerPartnersComponent/SpeakerPartners'
import Email from "../components/EmailComponent/Email";
function Home(){
    return(
        <div>
            <SpeakerPartners />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Email />
            </div>
        </div>
    );
}

export default Home;