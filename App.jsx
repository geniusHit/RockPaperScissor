import React, {useState, useRef} from "react"
import './App.css'

const App=()=>{
  const [userSelection, setUserSelection]=useState("")
  const hands=[<i class='fa-solid fa-hand-back-fist'></i>, <i class='fa-solid fa-hand'></i>, <i class='fa-solid fa-hand-scissors'></i>]
  const [randomIndex, setRandomIndex]=useState()
  const [winner, setWinner]=useState("")

  return (
    <>
      {
        userSelection===""?
        <div id="main">
          <div id="box">
            <i class="fa-solid fa-hand-back-fist" onClick={()=>{
              setUserSelection(0);
              let i=Math.round(Math.random()*2)
              setRandomIndex(i)
              if(i==0)
                setWinner("Draw");
              else if(i==1)
                setWinner("You Lose!");
              else if(i==2)
                setWinner("You Win!");
              }}></i>
            <i class="fa-solid fa-hand" onClick={()=>{
              setUserSelection(1);
              let i=Math.round(Math.random()*2)
              setRandomIndex(i)
              if(i==0)
                setWinner("You Win");
              else if(i==1)
                setWinner("Draw!");
              else if(i==2)
                setWinner("You Lose!");
              }}></i>
            <i class="fa-solid fa-hand-scissors" onClick={()=>{
              setUserSelection(2);
              let i=Math.round(Math.random()*2)
              setRandomIndex(i)
              if(i==0)
                setWinner("You Lose!");
              else if(i==1)
                setWinner("You Win!");
              else if(i==2)
                setWinner("Draw!");
              }}></i>
          </div>
        </div>:
      
        <div id="main">
          <p>{winner}</p>

          <div id="box">
            {hands[userSelection]}
            {hands[randomIndex]}
          </div><br></br>

          <button onClick={()=>{
            setUserSelection("")
          }}>Restart</button>
        </div>
      }
      
    </>
  )
}

export default App