import React from 'react'
import Subscribe from '../components/SubscribeComponent/Subscribe'
import SpeakerPartners from '../components/SpeakerPartnersComponent/SpeakerPartners'
import Email from "../components/EmailComponent/Email";
import LinkedInLogo from '../Pictures/LinkedInLogo.png';
import YouTubeLogo from '../Pictures/YouTubeLogo.png';
import ContactUs from './ContactUs';
function Home(){
    return(
        <div>
            <SpeakerPartners />
            <ContactUs />
        </div>
    );
}

export default Home;