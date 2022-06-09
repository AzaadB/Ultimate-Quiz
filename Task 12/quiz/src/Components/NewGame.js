import React,{Component} from "react";


export default class NewGame extends Component {//Creating a NewGame conponent//
    constructor(props) {
    super(props);

    this.newGame=this.newGame.bind(this)
}


newGame(){//This functinon is activated when the NewGame button is clicked//
 window.location.reload();
}

render() {
    return(
    
    <button className="NewGame" onClick={this.newGame}>NewGame</button>

)
}

}
