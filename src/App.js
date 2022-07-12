import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Immigration from "./routes/Immigration";
import Homepage from "./routes/Homepage";
import InstitutionServices from "./routes/InstitutionServices";
import ConciergeServices from "./routes/ConciergeServices";
import ScrollToTop from "./routes/ScrollToTop";
import MarketPlace from "./routes/MarketPlace";
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
      <ScrollToTop />
      <Scroll showBelow={250} />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/institutionservices" element={<InstitutionServices />} />
        <Route path="/conciergeservices" element={<ConciergeServices />} />
        <Route path="/marketplace" element={<MarketPlace />} />
      </Routes>
    </>
  );
}

export default App;
