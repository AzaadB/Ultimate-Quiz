import React, { Component } from "react";//Import react and a component from the module//
import Question from "./question/Question";
import Answer from "./answer/Answer";
import './QuizMain.css';

export default class Quiz extends Component {//Using class based components//

    constructor(props) {
        super(props);

        this.state = {

            questions: {//This object is storing all of our questions//
                1: "Back In Black, Paradise City, T.N.T are songs by which famous band?",
                2: "What genre do BTS fall under?",
                3: "What's the biggest animal in the world?",
                4: "How many bones does a shark have?",
                5: "What is the most common colour of toilet paper in France?",
                6: "What is banned in public places in Florida after 6 pm on a Thursday?",
                7: "Who is the best goalkeeper of all time ?",
                8: "Who is the best midfielder of all time",
                9: "Which Portuguese team did Ronaldo play for before signing for Manchester United?",
                10: "What player scored a hat-trick in 23 minutes coming on as a sub for his debut for Dortmand to win the game versus FC Augsburg?"

            },
            answers: {
                1: {
                    1: "AC/DC",
                    2: "Queen",
                    3: "The Beatles"
                },
                2: {
                    1: "K-pop",
                    2: "Pop",
                    3: "Rock"
                },
                3: {
                    1: "Shark",
                    2: "Whale",
                    3: "Fish"
                },
                4: {
                    1: "2",
                    2: "0",
                    3: "4"
                },
                5: {
                    1: "White",
                    2: "Green",
                    3: "Pink"
                },
                6: {
                    1: "Crying",
                    2: "Screaming",
                    3: "Farting"
                },
                7: {
                    1: "Peter Schmeichel",
                    2: "Lev Yashin",
                    3: "Gianluigi Buffon"
                },
                8: {
                    1: "Xavi",
                    2: "Lothar Matthaus",
                    3: "Andres Iniesta",
                },
                9: {
                    1: "SL Benfica",
                    2: "Porto",
                    3: "Sporting CP"
                },
                10: {
                    1: "Erling Haaland",
                    2: "Jadon Sancho",
                    3: "Marco Reus"
                },

            },
            correctAnswers: {//This object stores the actual correct answers to all of the questions
                1: "1",
                2: "1",
                3: "2",
                4: "2",
                5: "3",
                6: "3",
                7: "3",
                8: "3",
                9: "3",
                10: "1"
            },
            correctAnswer: 0,//keeps track of amount of answers are correct
            clickedAnswer: 0,//keeps track of amount of answers clicked//
            step: 1,
            score: 0//Tallys the score out of 10//
        };
    }

    checkAnswer = answer => {//creating a checkAnswer function//
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({//Updating the state//
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            })
        }
    }

    nextStep = step => {//The next step function is if the button is clicked the next question will load//
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }

    playAgain() {//This functinon is activated when the playAgain button is clicked//
        window.location.reload();
    }

    render() {
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;//let with jsx was used to avoid typing in this.state every time in the random function//

        return (
            <div className="Content">

                {step <= Object.keys(questions).length ?
                    (<>
                        <Question
                            question={questions[step]}//Step is used to load one question when the game loads at a time//
                        />

                        <Answer
                            answer={answers[step]}//Step is used to highlight one answer once an option has been clicked at a time//
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />

                        <button
                            className="NextStep"//rendering a pop up next button so once an answer is clicked the button will appear//
                            disabled={
                                clickedAnswer && Object.keys(questions).length >= step
                                    ? false : true
                            }
                            onClick={() => this.nextStep(step)}
                        >
                            Next
                        </button>
                    </>) : (//Below the score is being generated and using a ternery operator to trigger the word win when the score is higher than 4 and lose when the score is 4 or lower// 
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            {score > 4 ? (<p>Congrats You Won!</p>) : (<p>Unlucky You lose</p>)}
                            <p>You scored: {score} of {Object.keys(questions).length}</p>
                            <p>Thanks for playing!</p>
                            <button className="playAgain" onClick={this.playAgain}>
                                PlayAgain
                            </button>

                        </div>
                    )
                }

            </div>
        );
    }
}