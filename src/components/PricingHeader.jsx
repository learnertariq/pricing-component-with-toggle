import React from "react";
import PlanToggler from "./PlanToggler";

function PricingHeader({ isMonthly, onToggleCycle }) {
  return (
    <div className="pricing-header">
      <h1 className="pricing-heading">Our Pricing</h1>
      <div className="pricing-toggler-group">
        <span className="toggler-cycle">Annually</span>
        <PlanToggler isOn={isMonthly} onToggle={onToggleCycle} />
        <span className="toggler-cycle">Monthly</span>
      </div>
    </div>
  );
}

export default PricingHeader;
