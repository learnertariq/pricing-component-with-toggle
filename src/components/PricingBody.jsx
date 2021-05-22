import React from "react";
import Card from "./common/Card";



function PricingBody({ pricings, isMonthly }) {
  return (
    <div className="pricing-body">
      {pricings.map((p) => (
        <Card
          key={p.title}
          items={p.details}
          title={p.title}
          subtitle={isMonthly ? p.monthlyPrice : p.annuallyPrice}
          cardCategory={p.cardCategory}
          btnCategory={p.btnCategory}
          btnText={p.btnText}
        />
      ))}
    </div>
  );
}

export default PricingBody;
