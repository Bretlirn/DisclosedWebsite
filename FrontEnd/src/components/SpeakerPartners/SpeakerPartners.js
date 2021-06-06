import React, { Component } from 'react'
import './SpeakerPartners.css'
import ap from './ap.png'
import dn from './dn.png'
import jw from './jw.png'
import md from './md.png'

class SpeakerPartners extends Component{  
    constructor(props) {
        super(props);
        
        
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: []
        };
    }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 2) {
      this.setState({
        currentImage: (this.state.currentImage + 2) % this.state.images.length
      });
    } else {
      this.setState({
        currentImage: (this.state.currentImage + 2) % this.state.images.length
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/SpeakerPartners')
        .then(response => response.json())
        .then(data => {
            for(var i = 0; i < data.length; i++){
                this.setState({images: this.state.images.concat(data[i][1])})
            }
        })

    setInterval(this.switchImage, 2000);
  }
    render(){
        return(   
        <div className="slideshow-container">
            <span>Hello World!</span>
            <span>{this.state.images.length}</span>
            <span>{this.state.images[this.state.currentImage]}</span>
            <span>{this.state.images[(this.state.currentImage+1) % this.state.images.length]}</span>
        </div>
        );
    }
}

export default SpeakerPartners