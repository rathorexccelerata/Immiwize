import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Immigration from "./routes/Immigration";
import Homepage from "./routes/Homepage";
import Loader from "./components/Loader";
import FooterDetails from "./components/FooterDetails";
import InstitutionServices from "./routes/InstitutionServices";
import { Router } from "routes";
import Scroll from './components/Scroll';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })


  return (
    <>
      {/* {
        isLoading == true ?
          <Loader /> :
          <>

            <Homepage /> */}
              <Scroll showBelow={250}/>
            <Routes>
                
              <Route path="/" element={<Homepage />} />
              <Route path="/immigration" element={<Immigration />} />
              <Route path="/institutionservices" element={<InstitutionServices />} />
            </Routes>
          {/* </>
      } */}

    </>
  );
}

export default App;
