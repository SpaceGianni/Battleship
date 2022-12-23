import React from "react";

const PCturn = ({humanShips, text2, ship1Message, ship2Message, ship3Message, ship4Message, ship5Message})=> {
    return(
        <>
        <h3>It's PC's turn</h3>
        <div className="container1">
          <div className="tablero" id="tablero1">
            {humanShips.map((celda, index) => {
              return (
                <div className={
                  humanShips[index] === 0 ? "celda" : (humanShips[index] === 3 ? "celda torpedo close close:after" : (humanShips[index] === 2 ? "celda shooted close close:after" : "celda barco1"))}
                  key={index}></div>
              )
            })};
          </div>
          <div className="panel two">Announcements
            <div className="messShipText">{text2}</div>
            <div className="messShip">{ship1Message}</div>
            <div className="messShip">{ship2Message}</div>
            <div className="messShip">{ship3Message}</div>
            <div className="messShip">{ship4Message}</div>
            <div className="messShip">{ship5Message}</div>
          </div>

        </div>
        </>
    )
}

export default PCturn;