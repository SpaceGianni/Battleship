import React, { useState, useEffect } from "react";
import './App.css';
import { shootedShips } from "./utils";

function App() {
  // 0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot

  //Posición de los barcos del jugador humano  
  const [jugadas, setJugadas] = useState(
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);

  //Posición de los barcos del computador  
  const [jugadasPC, setJugadasPC] = useState(
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]);
 
  const [turn, setTurn] = useState("human")
  
  const [pcTurn, setPCTurn] = useState(
    setInterval(Math.floor(Math.random() * 100),2000)  
  );
  console.log(pcTurn)

let message = "";
    const [text, setText]= useState("")

  //función del container 1. Human's ship/PC TURN
  const fireTorpedo = (index) => {
    let celdas = [...jugadas]
    for (let i = 0; i < celdas.length; i++) {
      if (celdas[index] === 1) {
        celdas[index] = 2 //shooted
        message="";
        message="Ship shooted. Repeat the turn";

        //console.log("I was shooted")
      }
      else if (celdas[index] === 0) {
        celdas[index] = 3; //missed shot
      }
    }
    setJugadas(celdas);
    setTurn("human");
  }
  //console.log("este es el turno", turn);

  //función container 2. PCcontainter/Human's Turn
  const fireTorpedo2 = (index) => {
    let celdas = [...jugadasPC]
    for (let i = 0; i < celdas.length; i++) {
      if (celdas[index] === 1) {
        celdas[index] = 2 //shoot
        //console.log("I was shooted")
        setText("");
        setText("Well done! You shot a ship!");
      }
      else if (celdas[index] === 0) {
        celdas[index] = 3; //missed shot
        setText(""); 
        setText("You've missed the shot");
      }
    }
    setJugadasPC(celdas);
    setTurn("pc");
    setTimeout(fireTorpedo(pcTurn),3000);
  }

  //Función para conocer el índice de los barcos del container 1
  let indexShips = jugadas.map((item, index) => {
    if (item === 2) return index
  }).filter(element => element !== undefined);
  //console.log("indice de barcos golpeados", indexShips)

  //índices de los barcos container 1
  const ship1 = [0, 1, 2, 3, 4];
  const ship2 = [9, 19, 29, 39];
  const ship3 = [40, 50, 60, 70];
  const ship4 = [53, 54, 55];
  const ship5 = [90, 91, 92, 93];


shootedShips(indexShips)


  //Función para conocer el índice de los barcos del container 1
  let indexShipsPC = jugadasPC.map((item, index) => {
    if (item === 2) return index
  }).filter(element => element !== undefined);
  //console.log("indice de barcos golpeados PC", indexShipsPC)

  //índices de los barcos container 2
  const ship6 = [0, 10, 20, 30];
  const ship7 = [16, 17, 18, 19];
  const ship8 = [24, 34, 44, 54, 64];
  const ship9 = [81, 82, 83, 84];
  const ships10 = [97, 98, 99];

// Función para determinar cuando un barco del usuario "PC" está hundido y cuando ya no tiene barcos disponibles: "GAME OVER"
 const shootedShipsPC = (array)=> {
  let shooted6 = array.includes(0) && array.includes(10) && array.includes(20) && array.includes(30) ? true : false
 if(shooted6 === true){
  message= "";
   message="SHIP 6 SUNK";
 }
 
 let shooted7 = array.includes(16) && array.includes(17) && array.includes(18) && array.includes(19) ? true : false
 if(shooted7 === true){
  message="";
   message="SHIP 7 SUNK";
 }
 
 let shooted8 = array.includes(24) && array.includes(34) && array.includes(44) && array.includes(54) && array.includes(64)? true : false
 if(shooted8===true){
  message="";
   message="SHIP 8 SUNK";
 }
 let shooted9 = array.includes(81) && array.includes(82) && array.includes(83) && array.includes(84) ? true : false
   //console.log("SHOOTED SHIP 4", shooted4) //BARCO 5 HUNDIDO 
   if(shooted9 === true){
    message="";
     message="SHIP 9 SUNK";
   }
 
 let shooted10 = array.includes(97) && array.includes(98) && array.includes(99) ? true : false
   //console.log("SHOOTED SHIP 5", shooted5) //BARCO 5 HUNDIDO 
 if(shooted10 === true){
  message="";
   message = "SHIP 10 SUNK";
 }
 
 if(shooted6 === true && shooted7===true && shooted8 ===true && shooted9 ===true && shooted10 ===true){
  message=""; 
  message ="GAME OVER";

 }  
}
shootedShipsPC(indexShipsPC);



  const reiniciar = (e) => {
    e.preventDefault();
    window.location.reload();
  };



  return (
    <div className="App">
      <h1>Welcome to the battleship game</h1>
      <div className="reset-btn" onClick={(e) => reiniciar(e)}>Reset Game</div>
      {turn ==="pc" ? 
        <div className="container1">
        <h3>It's PC turn</h3>
        <div className="tablero" id="tablero1">
          {jugadas.map((celda, index) => {
            return (
              <div className={
                jugadas[index] === 0 ? "celda" : (jugadas[index] === 3 ? "celda torpedo" : (jugadas[index] === 2 ? "celda shooted" : "celda barco1"))}
                key={index}></div>
            )
          })};
        </div>
        <p>{message}</p>
        <p>{text}</p>
      </div>
      
      
      :
       <div className="container2">
        <h3>It's human turn</h3>
        <div className="tablero" id="tablero2">
          {jugadasPC.map((celda, index) => {
            return (
              <div className={
                jugadasPC[index] === 0 ? "celda" : (jugadasPC[index] === 3 ? "celda torpedo2" : (jugadasPC[index] === 2 ? "celda shooted2" : "celda barco2"))}
                key={index} onClick={() => setTimeout(fireTorpedo2(index),5000)}></div>
            )
          })};
        </div>
        <p>{message}</p>
        <p>{text}</p>
      </div>     
     
      }
    
    </div>
  );
}

export default App;
