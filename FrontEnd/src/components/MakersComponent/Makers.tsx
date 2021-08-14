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
            <div className = 'makers-container'>
                <img src = {image} alt = "Not found" className = "makers-image"/>
                <div className = 'makers-name'>
                    {name}
                </div>
                <div className = 'makers-description'>
                    {description}
                </div>
            </div>
        )
    }

  return (
    <div className = "makers-main-container">
        <div className = "makers-header">
            <strong>
                <p>Meet the Makers</p>
            </strong>
        </div>
        <div className = "makers-founder">
            <MakerBlock image = {michelle} name = "Michelle Chen" description = "Founder of Disclosed"/>
        </div>
        <div className = "makers-leads">
            <MakerBlock image = {vinson} name = "Vinson Chen" description = "Technology Systems Lead"/>
            <MakerBlock image = {fiona} name = "Fiona Li" description = "Marketing Lead"/>
            <MakerBlock image = {addison} name = "Addison Chen" description = "Partnership Lead"/>
        </div>
    </div>
  );
  
}

export default Makers;