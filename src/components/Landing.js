import React from "react";
import "../css/landing.css";


const Landing = ({setChangeView}) => {
    
    return (
        <>
        <div className="start filter"></div>
        <div id="landing">
        <h2>Welcome to the Battleship Game!</h2>
        <div>
            <h4>Instructions</h4>
            <p>You will be competing against the PC. Each one will have five ships of different sizes:<br></br><br></br> 
                <div className="row">
                <div className="text">1 ship of 2 blocks</div> <div className="block"></div><div className="block"></div>
                </div>
                <div className="row">
                <div className="text">3 ships of 4 blocks</div><div className="block"></div><div className="block"></div><div className="block"></div><div className="block"></div> 
                </div>
                <div className="row">
                <div className="text">1 ship of 5 blocks</div> <div className="block"></div><div className="block"></div><div className="block"></div><div className="block"></div><div className="block"></div>
                </div>
                <br></br>
                The first to sink all of the opponent's ships wins the game. You start the game.
            </p>
            <button onClick={()=>setChangeView(true)}>Start the Game!</button>
        </div>
        </div>
       
       </>

    )
}

export default Landing;