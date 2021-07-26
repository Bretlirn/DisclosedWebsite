import React from 'react';
import DisplayLogos from '../components/DisplayLogosComponent/DisplayLogos';
import Landing from '../components/LandingComponent/Landing'

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
            <DisplayLogos images = {SpeakerLogos} text= 'Our Speakers are from ...' staticImage={false} backgroundColor='black' numImages={8}/>
            <DisplayLogos images = {PartnerLogos} text= 'Our Partners are ...' staticImage={true}/>
        </div>
        
    );
}

export default Home;