import React, { useState } from "react";

function Toggler({isOn, onToggle}) {  
  function getClasses() {
    let classes = "clickable toggler-container toggler-position--"
    return classes += isOn ? "right" : "left";
  }

  return (
    <div onClick={onToggle} className={getClasses()}>
      <div className="toggler"></div>
    </div>
  );
}

export default Toggler;
