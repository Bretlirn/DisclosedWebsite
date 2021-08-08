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
                        <div className = "highlight-video-picture">
                            <iframe width="420" height="237" src="https://www.youtube.com/embed/uiZk61W36oo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>                        
                        <div className = "highlight-video-text-left">
                            Person's Name 1
                        </div>
                    </div>                    
                    <div className = "highlight-video-left">
                        <div className = "highlight-video-picture">
                        <iframe width="420" height="237" src="https://www.youtube.com/embed/uiZk61W36oo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>                        
                        <div className = "highlight-video-text-left">
                            Person's Name 2
                        </div>
                    </div>
                </div>

                <div className = "highlight-videos-flexbox-right">
                    <div className = "highlight-video-right">
                        <div className = "highlight-video-text-right">
                            Person's Name 3
                        </div>
                        <div className = "highlight-video-picture">
                            <iframe width="420" height="237" src="https://www.youtube.com/embed/uiZk61W36oo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HighlightVideos;