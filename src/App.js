import React from "react";
import {Route, Routes} from "react-router-dom";
import Immigration from "./routes/Immigration";
import Homepage from "./routes/Homepage";

function App(){
return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/immigration" element={<Immigration/>}/>
      </Routes>
    </>
  );
}

export default App;
