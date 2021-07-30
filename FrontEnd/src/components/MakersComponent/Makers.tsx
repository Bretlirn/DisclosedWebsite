import React from "react";
import michelle from "../../assets/pictures/michelle.jpg";
import vinson from "../../assets/pictures/vinson.jpg";
import addison from "../../assets/pictures/addison.jpg";
import fiona from "../../assets/pictures/fiona.jpg";
import './Makers.css'

const Makers = () => {
    const MakerBlock = ({name, description, image}:{
        name:string;
        description:string;
        image:string;
    }) => {
        return(
            <div className = 'container'>
                    <img src = {image} alt = "Not found" className = "image"/>
                    <div className = 'name'>
                        {name}
                    </div>
                    <div className = 'description'>
                        {description}
                    </div>
            </div>
        )
    }

  return (
  <div className = "main-container">   
  <div className = "makerheader">
            <strong>
            <p>Meet the Makers</p>
            </strong>       
          </div>
   <div className = "founder">
       <MakerBlock image = {michelle} name = "Michelle Chen" description = "Founder of Disclosed"/>
   </div>
   <div className = "leads">
       <MakerBlock image = {vinson} name = "Vinson Chen" description = "Technology Systems Lead"/>
       <MakerBlock image = {fiona} name = "Fiona Li" description = "Marketing Lead"/>
       <MakerBlock image = {addison} name = "Addison Chen" description = "Partnership Lead"/>
   </div>
  </div>
  );
  
}

export default Makers;