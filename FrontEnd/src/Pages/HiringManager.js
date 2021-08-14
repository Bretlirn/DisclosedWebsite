import React from 'react'
import GetStartedHiringManagerSteps from '../components/GetStartedHiringManagerStepsComponent/GetStartedHiringManagerSteps';
import GetStartedLanding from '../components/GetStartedLandingComponent/GetStartedLanding';
function HiringManager(){
    const titleArray = ["Access to exclusive Disclosed speaker events", "Pay your advice forward", "Expand your current network with other senior leaders within tech & healthcare"]
    return(
        <div>
            <GetStartedLanding titles = {titleArray} />
            <GetStartedHiringManagerSteps />
        </div>
    );
}

export default HiringManager;