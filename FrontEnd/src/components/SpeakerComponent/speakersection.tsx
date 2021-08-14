import React from "react";
import './speakersection.css';
import AbhishekSansanwal from '../../assets/pictures/AbhishekSansanwal.png';
import JShelly from '../../assets/pictures/JShelly.jpeg';
import RobertoSacripanti from '../../assets/pictures/RobertoSacripanti.jpeg';

const Speaker = () => {
    const QuotesBlock = ({name, quote, image, imageURL}:{
        name:string;
        quote:string;
        image:string;
        imageURL:string;
    }) => {

        return(
            <div className = 'speaker-section-container'>
                <a href = {imageURL}>
                    <img src = {image} alt = "Not found" className = "speaker-section-image"/>
                </a>
                <div className = 'speaker-section-name'>
                    {name}
                </div>
                <div className = 'speaker-section-quote'>
                    {quote}
                </div>
            </div>
        )
    }

    const jShellyquote = '"No, this doesn'.concat("'t meet the bar.", '"\n\nTonight, my resume was "anonymously" roasted by the amazing Diego Granados.\n\nI',"'m looking forward to revamping my resume and really showcasing my collaborative skills and impact more clearly!");
    const abhishekQuote = 'Companies don'.concat("'t want to see whether or not you have product management skills on the resume (aka~ keywords, keywords, keywords), or the role titles that you have claimed. They want to see what you did in those jobs, what was the impact you created, and what did you achieve.");
    const robertoQuote = 'Since I have been part of the Disclosed community, I was able to connect with other aspiring PMs and learn from their amazing experiences! The various resume review sessions are very helpful and they are making me look at my resume with a more critical eye.';
    
    const robertoURL = 'https://www.linkedin.com/posts/robertosacripanti_pm-diego-granados-youtube-activity-6823685555688239104-3mst'
    const jshellyURL = 'https://www.linkedin.com/feed/update/urn:li:activity:6821609010446303232/?actorCompanyId=76913815'
    const ahbishekURL = 'https://www.linkedin.com/feed/update/urn:li:activity:6821624273375961088/?actorCompanyId=76913815'

    return (
        <div className = "speaker-section-main-container">
            <div className = "speaker-section-row">
                <QuotesBlock image = {AbhishekSansanwal} imageURL = {ahbishekURL} name = "Abhishek Sansanwal" quote = {abhishekQuote}/>
                <QuotesBlock image = {RobertoSacripanti} imageURL = {robertoURL} name = "Roberto Sacripanti" quote = {robertoQuote}/>
                <QuotesBlock image = {JShelly} imageURL = {jshellyURL} name = "J Shelly" quote = {jShellyquote} />
            </div>
        </div>
    );
}
export default Speaker;
