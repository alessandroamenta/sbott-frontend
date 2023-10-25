import React from "react";
import { Button } from "antd";
import { ReactComponent as StripeIcon } from "../../../assets/images/stripeIcon.svg";

function Subscription() {
  return (
    <div className="bg-primary flex flex-col rounded-xl mx-4 sm:mt-3 md:mx-6 xl:mt-5 xl:ml-8 xl:mr-10">
      <div className="bg-secondary rounded-t-xl py-2 px-5">
        <span className="text-lg text-white font-bold leading-8">
          Subscribe
        </span>
      </div>
      <div className="pt-4 pb-4 px-4 lg:pb-[53px] sm:pt-10">
        <div className="max-w-2xl m-auto">
          <h6 className="text-steel-blue text-base font-medium mb-[13px] sm:leading-8 sm:text-lg">
            Your Sbott subscription starts with a
          </h6>
          <h3 className="border-b border-b-charcoal text-blue text-2xl font-bold leading-normal pb-3 mb-[17px] sm:pb-7 sm:leading-8 sm:text-[32px]">
            7-day free trial ,then
            <span className="text-light-purple"> $99 / month</span>
          </h3>
          <ul className="text-base font-medium mb-5 ml-5 leading-8 list-disc sm:text-lg sm:mb-11">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <div>
            <Button
              className="bg-light-purple text-sm flex items-center justify-center gap-2 font-bold rounded-lg border-none 
             h-auto w-full leading-8 py-[5px] hover:text-white"
            >
              Start a Trial <StripeIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
