import React from 'react';
import Makers from '../components/MakersComponent/Makers';
import AboutUsLanding from '../components/AboutUsComponent/AboutUsLanding';
import Banner from '../components/BannerComponent/Banner';
import aboutusbanner from '../assets/pictures/aboutusbanner.jpg'

function AboutUs(){
    return(
        <div>
            <Banner image = {aboutusbanner} top = 'About' bottom = 'Us' />
            <AboutUsLanding />
            <Makers />
        </div>
    );
}

export default AboutUs;