import React from "react";
import './estilos.css'

const Spinner = () => (
  <div className="center m-top">
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>  
  </div>
);

export default Spinner;