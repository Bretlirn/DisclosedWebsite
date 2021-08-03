import React from 'react'
import piChart from  "../../assets/pictures/piChart.png";
import './AboutUsLanding.css'

const AboutUsLanding = () =>{
    const BubbleComponent = ({text, textSize, textFamily, size, backgroundColor, textColor, bold}:{
        text:string;
        textSize?:string | null;
        textFamily?: string | null;
        size?:string | null;
        backgroundColor?:string | null;
        textColor?:string | null;
        bold?: boolean | null;
    }) => {
    const tSize = (typeof(textSize) == 'string' ? textSize : '12px');
    const tFamily = (typeof(textFamily) == 'string' ? textFamily : 'sans-serif');
    const itemSize = (typeof(size) == 'string' ? size : '50px');
    const bgColor = (typeof(backgroundColor) == 'string' ? backgroundColor : '#ffffff');
    const tColor = (typeof(textColor) == 'string' ? textColor : '#000000');
    const isBold = (typeof(bold) == 'boolean' && bold === true ? 'bold' : 'normal');
        return(
            <div className = "bubble-component-bubble" style = {{ width: itemSize, height: itemSize, backgroundColor:bgColor}}>
                <div style = {{fontFamily:tFamily, fontSize:tSize,  color:tColor, fontWeight:isBold}}>
                    {text}
                </div>
            </div>
        );
    }

    return(
        <div className = "about-us-landing-component">
            <div className = "about-us-title">
                We're here to...
            </div>

            <div className = "about-us-flexbox">
                <div className = "about-us-bubble-flexbox-col">
                    <div className = "about-us-bubble-flexbox-row">
                        <div className = "about-us-bubble">
                            <BubbleComponent text="Scale Mentorship" size="150px" backgroundColor="#c4c4c4" textColor="#000000" textSize = "18px" textFamily = "Alice" bold = {true}/>
                        </div>
                        <div className = "about-us-bubble">
                            <BubbleComponent text="Provide Tangible Feedback" size="150px" backgroundColor="#c4c4c4" textColor="#000000" textSize = "18px" textFamily = "Alice" bold = {true}/>
                        </div>
                    </div>
                    <div className = "about-us-bubble-flexbox-row-2">
                        <div className = "about-us-bubble">
                            <BubbleComponent text="Ignite Conversation" size="150px" backgroundColor="#c4c4c4" textColor="#000000" textSize = "18px" textFamily = "Alice" bold = {true}/>
                        </div>
                        <div className = "about-us-bubble">
                            <BubbleComponent text="Disrupt Hiring Process" size="150px" backgroundColor="#c4c4c4" textColor="#000000" textSize = "18px" textFamily = "Alice" bold = {true}/>
                        </div>
                    </div>
                </div>
                <div className = "about-us-pi-chart">
                    <img src = {piChart} alt = "not found" width = "350px" height = "350px"/>
                </div>
            </div>
            <div className = "about-us-landing-bottom-banner">
                Within tech and healthcare
            </div>
        </div>
    );
}

export default AboutUsLanding