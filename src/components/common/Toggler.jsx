import React from "react";

function Toggler({ isOn, onToggle, toolTipText }) {
  function getClasses() {
    let classes = "clickable toggler-container toggler-position--";
    return (classes += isOn ? "right" : "left");
  }

  return (
    <div onClick={onToggle} className={getClasses()}>
      <div className="tool-tip">click or press left and right arrow</div>
      <div className="toggler"></div>
    </div>
  );
}

export default Toggler;
