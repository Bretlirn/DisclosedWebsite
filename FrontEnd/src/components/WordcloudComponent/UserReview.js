import React, {useState, useEffect} from 'react'
import './UserReview.css'
import ReactWordcloud from 'react-wordcloud';

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [30, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function UserReview() {
    const [words, setWords] = useState([])
    const [wordName, setWordName] = useState("")

    const addWord = event => {
        event.preventDefault();

        var newWord = wordName;
        for(var j = 0; j<words.length; j++){
          if(wordName === words[j].text){
            newWord = null;
            break;
          }
          else{
            newWord = wordName;
          }
        }
        var newCount = 1;

        // console.log(words.length);
        for(var i = 0; i<words.length; i++){
          if(wordName === words[i].text){
            newCount = words[i].value ++;
          }
        }

        //combine both loops into one, set the newcount variable globally

        setWords([...words, {
            value: newCount,
            text: newWord
        }]);
        setWordName("");
    }

    useEffect(() => {
        console.log(words)
      }, [words]);

    return (
        <div>
          <br></br>
            <h3 className="header">Enter a word to describe Disclosed:</h3><br/>       
            <label>
              <input className='form-input2' placeholder = "Word" name ="word" type = "text" value = {wordName} onChange = {e => setWordName(e.target.value)}/><br/>
            </label>
            <br></br>
            <button onClick = {addWord} className="form-button2" type="submit" value="Submit">Submit</button>
        <div style = {{ height: 300, width: 300 }}>
        <ReactWordcloud options = {options} words={words} /> 
        </div>
        </div>
    )
}

export default UserReview