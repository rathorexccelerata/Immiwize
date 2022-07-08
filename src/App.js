import React from "react";
import {Route, Routes} from "react-router-dom";
import ImmigrationDetails from "./components/ImmigrationDetails";
import Homepage from "./routes/Homepage";

function App(){
return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/immigration" element={<ImmigrationDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
