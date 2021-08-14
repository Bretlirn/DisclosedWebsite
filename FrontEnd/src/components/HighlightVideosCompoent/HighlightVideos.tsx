import React from 'react';
import './HighlightVideos.css'
const HighlightVideos = () =>{
    return(
        <div className = "highlight-videos-component">
            <div className = "highlight-videos-title">
                Highlight Videos
            </div>
            <div className = "highlight-videos-flexbox">
                <div className = "highlight-videos-flexbox-left">
                    <div className = "highlight-video-left">
                        <iframe width="385" height="218" src="https://www.youtube.com/embed/W_pCd9Bpl-I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen = {true}/>         
                        <div className = "highlight-video-text-left">
                            STAND OUT to a Genentech Recruiter
                        </div>
                    </div>                    
                    <div className = "highlight-video-left">
                        <iframe width="385" height="218" src="https://www.youtube.com/embed/YgRCA-xWSlQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen = {true}/>                 
                        <div className = "highlight-video-text-left">
                            Jordan Worley, Business Program Manager @ Microsoft
                        </div>
                    </div>
                </div>

                <div className = "highlight-videos-flexbox-right">
                    <div className = "highlight-video-right">
                        <div className = "highlight-video-text-right">
                            James Helms, VP of Design and Product @ Intuit
                        </div>
                        <iframe width="385" height="218" src="https://www.youtube.com/embed/ujuEgpR5nus" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen = {true}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HighlightVideos;