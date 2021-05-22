import React, {useState} from 'react';
import Toggler from './common/Toggler';

function PlanToggler({isOn, onToggle}) {
  return (
    <Toggler isOn={isOn} onToggle={onToggle} />
  );
}

export default PlanToggler;