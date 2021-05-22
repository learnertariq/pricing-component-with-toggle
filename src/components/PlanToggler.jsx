import React from 'react';
import Toggler from './common/Toggler';

function PlanToggler({isOn, onToggle}) {
  return (
    <Toggler isOn={isOn} onToggle={onToggle} toolTipText='click or press left and right arrow' />
  );
}

export default PlanToggler;