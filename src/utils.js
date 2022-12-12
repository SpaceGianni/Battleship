
// Función para determinar cuando un barco del usuario "humano" está hundido y cuando ya no tiene barcos disponibles: "GAME OVER"
 export const shootedShips = (array)=> {
    let shooted1 = array.includes(0) && array.includes(1) && array.includes(2) && array.includes(3) && array.includes(4) ? true : false
   //console.log("SHOOTED SHIP 1", shooted1) //BARCO 1 HUNDIDO 
   if(shooted1 === true){
     console.log("BARCO 1 HUNDIDO")
   }
   
   let shooted2 = array.includes(9) && array.includes(19) && array.includes(29) && array.includes(39) ? true : false
     //console.log("SHOOTED SHIP 2", shooted2) //BARCO 5 HUNDIDO
   if(shooted2 === true){
     console.log("BARCO 2 HUNDIDO")
   }
     
   let shooted3 = array.includes(40) && array.includes(50) && array.includes(60) && array.includes(70) ? true : false
     //console.log("SHOOTED SHIP 3", shooted3) //BARCO 5 HUNDIDO
   if(shooted3===true){
     console.log("BARCO 3 HUNDIDO")
   }
   
   let shooted4 = array.includes(53) && array.includes(54) && array.includes(55) ? true : false
     //console.log("SHOOTED SHIP 4", shooted4) //BARCO 5 HUNDIDO 
     if(shooted4 === true){
       console.log("BARCO 4 HUNDIDO")
     }
   
   let shooted5 = array.includes(93) && array.includes(92) && array.includes(91) && array.includes(90) ? true : false
     //console.log("SHOOTED SHIP 5", shooted5) //BARCO 5 HUNDIDO 
   if(shooted5 === true){
     console.log("BARCO 5 HUNDIDO")
   }
   
   if(shooted1 === true && shooted2===true && shooted3 ===true && shooted4 ===true && shooted5 ===true){
     console.log("GAME OVER")
   }  
 }