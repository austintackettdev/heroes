import React from "react";
import Loading from "../../images/loading.gif";

const Spinner = () => {
  return (
    <div>
      <img
      src={Loading}
      alt="Loading"
      style={{ maxWidth: "200px", margin: " 2em auto", display: "block" }}
    />
      <h1 className="center">Loading Data</h1>
    
    </div>
  );
};

export default Spinner;
