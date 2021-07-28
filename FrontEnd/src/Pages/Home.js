import React from 'react';
import DisplayLogos from '../components/DisplayLogosComponent/DisplayLogos';
import HomepageActionable from '../components/HomepageActionableComponent/HomepageActionable';
import Landing from '../components/LandingComponent/Landing';
import Speaker from '../components/SpeakerComponent/speakersection';

function Home(){
    //This part required for DisplayLogos
    const arrayColumn = (arr, n) => arr.map((x) => x[n]);
    function importAll(r) {
        return r.keys().map(r);
    }
    const SpeakerLogos = arrayColumn(importAll(require.context('../assets/logos/SpeakerLogos/', false, /\.(png|jpe?g|svg)$/)), 'default');
    const PartnerLogos = arrayColumn(importAll(require.context('../assets/logos/PartnerLogos/', false, /\.(png|jpe?g|svg)$/)), 'default');

    return(
        <div>
            <Landing />
            <DisplayLogos images = {SpeakerLogos} text= 'Our Speakers are from ...' textColor = "black" staticImage={false} backgroundColor='white' numImages={8}/>
            <DisplayLogos images = {PartnerLogos} text= 'Our Partners are ...' textColor="black" staticImage={true} backgroundColor = 'white'/>
            <Speaker/>
            <HomepageActionable />
        </div>
        
    );
}

export default Home;