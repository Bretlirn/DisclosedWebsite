import './Landing.css';
import FadeText from '../util/FadeTextComponent/FadeText';
const Landing = () => {
    const FadeTexts = ['landing an interview.', 'finding a job.', 'getting hired.'];
    return(
        <div className = 'landing-component' >
            <div style = {{opacity: 0, flexGrow: 10}}>
                .
            </div>
            <div className = 'landing-text-container'>
                <div className = 'landing-text'>
                    We're this close to 
                </div>
                <FadeText data={FadeTexts} numImages={1} fontSize='46px' fontFamily='sans-serif' color="#ffffff" bold={true} italicized={false}/>
            </div>
        </div>
    );
}

export default Landing