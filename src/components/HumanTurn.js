import React from "react";

const HumanTurn = ({jugadasPC,fireTorpedo2,text,ship6Message, ship7Message, ship8Message, ship9Message, ship10Message}) => {
    return(
        <>
        <h3>It's Human's turn</h3>
            <div className="container2">
              <div className="tablero" id="tablero2">
                {jugadasPC.map((celda, index) => {
                  return (
                    <div className={
                      jugadasPC[index] === 0 ? "celda" : (jugadasPC[index] === 3 ? "celda torpedo2 close close:after" : (jugadasPC[index] === 2 ? "celda shooted2 close close:after" : "celda barco2"))}
                      key={index} onClick={() => fireTorpedo2(index)}></div>
                  )
                })};
              </div>
              <div className="panel one">Announcements
                <div className="messShipText">{text}</div>
                <div className="messShip">{ship6Message}</div>
                <div className="messShip">{ship7Message}</div>
                <div className="messShip">{ship8Message}</div>
                <div className="messShip">{ship9Message}</div>
                <div className="messShip">{ship10Message}</div>
              </div>
            </div>
        </>

    )
}

export default HumanTurn;