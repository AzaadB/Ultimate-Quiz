import React from 'react';//Import react module//
import { BrowserRouter, Route } from "react-router-dom";//Importing the BrowserRoter and the Route from the react-router-dom//
import Quiz from './Components/QuizMain';
import Landing from './LandingPage';
import Header from './Header';
import './App.css';
import Help from './Components/question/Help';
import NewGame from './Components/NewGame';

function App() {//Below we are returning a div with a Browser Router that has route paths which will display differnt components at different times//
  return (//Below in the last route path I put quiz and newgame as the component it's to display the newgame button only on the quiz component//
    <div className="App">
      <div>
         <BrowserRouter>
        <div>
        <Header /> 
        <Route exact={true} path = "/" component={Landing} />
        <Route path = "/Quiz" component={Quiz} />
        <Route path = "/Help" component={Help} />
        <Route path = "/Quiz" component={NewGame} />
        </div>
    </BrowserRouter>
    </div>
    </div>

  )
}

export default App;
