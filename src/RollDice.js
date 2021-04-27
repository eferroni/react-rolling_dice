import React from 'react';
import './RollDice.css'
import Die from './Die';

class RollDice extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      diceOne:'fas fa-dice-one',
      diceTwo:'fas fa-dice-one',
      rolling:false
    };
    this.Roll = this.Roll.bind(this);
  }

  Roll(e){
    const dieClass = [
      'fas fa-dice-zero',
      'fas fa-dice-one',
      'fas fa-dice-two',
      'fas fa-dice-three',
      'fas fa-dice-four',
      'fas fa-dice-five',
      'fas fa-dice-six',
    ];
    let random1 = Math.floor(Math.random() * 6) + 1
    let random2 = Math.floor(Math.random() * 6) + 1

    this.setState({rolling:true})
    var element = document.getElementById("dice");
    element.classList.add("diceAnimation");

    setTimeout(() => {
        this.setState({diceOne:dieClass[random1],diceTwo:dieClass[random2]})

        setTimeout(() => {
            random1 = Math.floor(Math.random() * 6) + 1
            random2 = Math.floor(Math.random() * 6) + 1
            this.setState({diceOne:dieClass[random1],diceTwo:dieClass[random2]})

            setTimeout(() => {
                element.classList.remove("diceAnimation");
                random1 = Math.floor(Math.random() * 6) + 1
                random2 = Math.floor(Math.random() * 6) + 1
                this.setState({diceOne:dieClass[random1],diceTwo:dieClass[random2],rolling:false})
              },
              500
            );
          },
          500
        );
      },
      500
    );
  }

  render(){
    let text;
    text = 'Roll Dice!'
    return(
      <div className="RollDice">
        <div id="dice" className="RollDice">
          <div className="RollDice-dice">
            <Die number={this.state.diceOne}/>
          </div>
          <div className="RollDice-dice">
            <Die number={this.state.diceTwo}/>
          </div>
        </div>

        <div className="RollDice-button">
          <button disabled={this.state.rolling} className={this.state.rolling ? 'btn-disable' : 'btn-enable'} onClick={this.Roll}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
        </div>
      </div>
    )
  }
}

export default RollDice;
