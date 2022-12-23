import React, {useState} from "react";
import Landing from "./components/Landing";
import Game from "../src/components/Game.js";


function App() {

  const [changeView, setChangeView] = useState(false);
  console.log(changeView)
    return (
      <>
      {changeView ? 
      <>
      <Game/>
      </>
      :
      <>
      <Landing setChangeView={setChangeView}/>
      </>
    }
    
    
    </>
    )
  }

  export default App;
