import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing
    return (
      <div className="border flex flex-col bg-amber-500 rounded-2xl p-4">
        {/* {card header} */}
        <div>
          <h1 className="text-7xl">{name}</h1>
          <h4 className="text-4xl">{price}</h4>
        </div>
        {/* card body */}
        <div className="bg-amber-200 p-4 rounded-2xl mt-10 flex-1">
          <p>{description}</p>
          {/* <p>{features}</p> */}
          {features.map((feature, index) => (
            <PricingFeatures key={index} feature={feature}></PricingFeatures>
          ))}
        </div>
        <button className="btn w-full mt-4">Subscribe</button>
      </div>
    );
};

export default PricingCard;