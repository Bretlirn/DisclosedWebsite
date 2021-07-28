import React from "react";
import diego from "../../assets/pictures/diego.jpg";
import dominic from "../../assets/pictures/dominic.jpg";
import walt from "../../assets/pictures/walt.jpg";
import './speakersection.css'

const Speaker = () => {
    const QuotesBlock = ({name, title, quote}:{
        name:string;
        title:string;
        quote:string;
    }) => {
        return(
            <div className = 'container'>
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
       <div>
           <img className = "image" src = {diego} alt = "diego"/>
           <QuotesBlock name = "Diego Granados" title = "Product Manager @ Microsoft" quote = '"I love disclosed"'/>
       </div>
       <div>
           <img className = "image" src = {dominic} alt = "dominic"/>
           <QuotesBlock name = "Dominic Antonacci" title = "Business Operations Manager @ Amazon" quote = '"Such a great company wow"'/>
       </div>
       <div>
           <img className = "image" src = {walt} alt = "walt"/>
           <QuotesBlock name = "Walt Xie" title = "Talent Acquisition @ Facebook" quote = '"Smart discussions"'/>
       </div>
   </div>
   </div>
  );
}
export default Speaker;
