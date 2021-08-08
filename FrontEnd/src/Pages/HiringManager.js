import React from 'react'
import GetStartedHiringManagerLanding from '../components/GetStartedHiringManagerLandingComponent/GetStartedHiringManagerLanding';
import GetStartedHiringManagerSteps from '../components/GetStartedHiringManagerStepsComponent/GetStartedHiringManagerSteps';
//import No2 from '../components/No2/No2';
function HiringManager(){
    return(
        <div>
            <GetStartedHiringManagerLanding />
            <GetStartedHiringManagerSteps />
        </div>
    );
}

export default HiringManager;