import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../css/loader.css"
import { Circles, ThreeDots,Rings,TailSpin,BallTriangle} from "react-loader-spinner";
function Loader() {
  return (
    
      <div className="loader">
        <BallTriangle height="100" width="100" color="red" ariaLabel="Loading" />
      </div>
    
  );
}

export default Loader;
