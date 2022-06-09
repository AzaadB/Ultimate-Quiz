import React from "react";
import './Answer.css';

const Answer = (props) => {
    
    let answer = Object.keys(props.answer)
    .map((qAnswer, i) => (
        <li 
        className=
        {//below we are checking if the clicked answer is correct or not//
            props.correctAnswer === qAnswer ?
            'Correct answer' :

            props.clickedAnswer === qAnswer ?
            'Incorrect answer': ''
        }
        
        onClick={() => props.checkAnswer(qAnswer)}
        key={qAnswer}>
            {props.answer[qAnswer]}
        </li>
    ));
    
    
    return (//Below if one answer is clicked then the others disable and it checks if that answer is correct or not//
        <div>
          <ul disabled={props.clickedAnswer ? true: false} className="Answers">
            {answer}
        </ul>
        <div>
        {
            props.correctAnswer ?
            'Correct answer!':
            props.clickedAnswer ?
            'Incorrect answer!': ''
        }
        </div> 
        </div>
        
    );
}
export default Answer;