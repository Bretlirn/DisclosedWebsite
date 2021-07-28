import React from "react";
import diego from "../../assets/pictures/diego.jpg";
import dominic from "../../assets/pictures/dominic.jpg";
import walt from "../../assets/pictures/walt.jpg";
import './speakersection.css'

const Speaker = () => {
    const QuotesBlock = ({name, title, quote, image}:{
        name:string;
        title:string;
        quote:string;
        image:string;
    }) => {

        return(
            <div className = 'container'>
                    <img src = {image} alt = "Not found" className = "image"/>
                    <div className = 'name'>
                        {name}
                    </div>
                    <div className = 'title'>
                        {title}
                    </div>
                    <div className = 'quote'>
                        {quote}
                    </div>
            </div>
        )
    }

  return (

  <div className = "main-container">   
   <div className = "row">
           <QuotesBlock image = {diego} name = "Diego Granados" title = "Product Manager @ Microsoft" quote = '"I love disclosed"'/>
           <QuotesBlock image = {dominic} name = "Dominic Antonacci" title = "Business Operations Manager @ Amazon" quote = '"Such a great company wow"'/>
           <QuotesBlock image = {walt} name = "Walt Xie" title = "Talent Acquisition @ Facebook" quote = '"Smart discussions"'/>
   </div>
  </div>
  );
  
}
export default Speaker;
