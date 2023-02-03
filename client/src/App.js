
import './App.css';
import Board from './components/board';
import Header from './components/header';
import Player from './components/player';
import { useState } from 'react';

function App() {
//change state every 3 sec changing winner everytime
  let [winner,setWinner]=useState("x");
console.log(winner);
setTimeout(()=>{
  if(winner==="x"){
    setWinner("o");
  }else{
    setWinner("x");
  }
 /*  let string = "chase";
  if(string === "chase"){
    setWinner("x")
  }else{
    setWinner("o")
  }
  setWinner("o") */
},3000 );

  return (
    <div className="App">
      <Header/>;
      <Player whichPlayer='x' winner={winner} propone={true} proptwo="Helloworld" popthree={77}/>
      <Player whichPlayer='o' winner={winner}/>
      <Board />
    </div>
  );
}

export default App;
