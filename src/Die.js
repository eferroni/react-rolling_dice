import React from 'react';
import './Die.css'

class Die extends React.Component{
  render(){
    return(
      <div className="Die">
        <i className={this.props.number}></i>
      </div>
    )
  }
}

export default Die;
