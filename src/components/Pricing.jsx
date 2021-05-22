import React, { useEffect, useState } from "react";
import PricingBody from "./PricingBody";
import PricingHeader from "./PricingHeader";

const pricings = [
  {
    title: "Basic",
    monthlyPrice: "$19.99",
    annuallyPrice: "$199.99",
    cardCategory: "secondary",
    btnCategory: "primary",
    details: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    btnText: "Learn More",
  },
  {
    title: "Professional",
    monthlyPrice: "$24.99",
    annuallyPrice: "$249.99",
    cardCategory: "primary",
    btnCategory: "secondary",
    details: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    btnText: "Learn More",
  },
  {
    title: "Master",
    monthlyPrice: "$39.99",
    annuallyPrice: "$399.99",
    cardCategory: "secondary",
    btnCategory: "primary",
    details: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    btnText: "Learn More",
  },
];

function Pricing(props) {
  const [isMonthly, setIsMonthly] = useState(true);

  useEffect(() => {
    const eventListener = (e) => {
      if (e.key === "ArrowLeft") return setIsMonthly(false);
      if (e.key === "ArrowRight") return setIsMonthly(true);
    };
    document.addEventListener("keydown", eventListener);

    return () => {
      document.removeEventListener("keydown", eventListener);
    };
  }, []);

  function handleToggle() {
    setIsMonthly(!isMonthly);
  }

  return (
    <div className="pricing">
      <PricingHeader isMonthly={isMonthly} onToggleCycle={handleToggle} />
      <PricingBody isMonthly={isMonthly} pricings={pricings} />
    </div>
  );
}

export default Pricing;
