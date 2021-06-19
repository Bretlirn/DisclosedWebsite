import React from 'react'
import Subscribe from '../components/SubscribeComponent/Subscribe'
import SpeakerPartners from '../components/SpeakerPartnersComponent/SpeakerPartners'
import Email from "../components/EmailComponent/Email";
import UserReview from "../components/WordcloudComponent/UserReview";
function Home(){
    return(
        <div>
            <SpeakerPartners />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Email />
            </div>
            <UserReview />
        </div>
    );
}

export default Home;