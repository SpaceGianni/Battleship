import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  // 0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot

const [jugadas, setJugadas] =useState(
 new Array(100).fill(0)
);

useEffect(()=>{
  barcos()
},[jugadas]);

useEffect(()=>{
 console.log("rendering after the first render")
}, [jugadas]);


//Función que llamada al momento de cargar la página
const barcos = ()=> {
 let celdas = [...jugadas];
 celdas[1] =1;
 celdas[2] =1;
 celdas[3] =1;
 celdas[4] =1;
 celdas[9] =1;
 celdas[19] =1;
 celdas[29] =1;
 celdas[39] =1;
 celdas[98] =1;
 celdas[97] =1;
 celdas[96] =1;
 celdas[95] =1;
 celdas[51] =1;
 celdas[61] =1;
 celdas[41] =1;
 celdas[31] =1;
 setJugadas(celdas);
} 

const fireTorpedo= (index)=> {
  let celdas = [...jugadas]
  for(let i = 0 ; i < celdas.length; i++){
    if(celdas[index]===1){
      celdas[index]=2 //shoot
      console.log("I was shooted")
    }
    else if(celdas[index]===0){
      celdas[index]=3; //missed shot
    }
  }
  setJugadas(celdas);
}



  return (
    <div className="App">
      <h1>Welcome to the battleship game</h1>
      <div className="tablero" id="tablero1">
        {jugadas.map((celda,index) => {
          return (
          <div className={jugadas[index]===0 ? "celda" : "celda barco1"} key={index} onClick={()=> fireTorpedo(index)}>{celda}</div>  
          )
        }) };
        <div type="button" className="fire">Fire torpedo</div>
        
     
      </div>
    </div>
  );
}

export default App;
