import React from 'react'
import "./index.css"

const Player = (props) => {
    let {whichPlayer,winner} = props;
    console.log(winner);
    return (
        <div className='palyer-container'>
          <h2>Player {whichPlayer}</h2>
          <h3>Winner is :{winner}</h3>
        </div>
      )
}

export default Player