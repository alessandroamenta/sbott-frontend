import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const GeneralPage: React.FC = () => {
  const navigate = useNavigate();
  const onClickHandle = () => {
    navigate("/dashboard/general");
  };
  return (
    <div className="flex flex-1 justify-center items-start px-4 sm:items-center sm:px-0">
      <div className="flex flex-col gap-8 max-w-[564px]">
        <div className="border-none bg-primary rounded-xl p-4 ai-assistant sm:py-9 sm:px-7">
          <p className=" text-cadet-gray text-base m-0 sm:text-lg">
            Your AI assistant is almost ready. Right now, it has the same
            capabilities of ChatGPT. Following the steps below will let you
            unlock its full capabilities.
          </p>
        </div>
        <div className="bg-primary border-none rounded-xl p-4 pb-5 ai-assistant sm:pt-9 sm:px-9">
          <h3 className="text-white text-xl text-center capitalize mb-6 sm:text-2xl sm:mb-12">
            3 steps to build your AI
            <span className="text-light-orange"> Assistant</span>
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 sm:gap-5">
              <h3 className="text-white text-xl font-bold flex gap-px m-0 step-number sm:text-2xl">
                <span>0</span>1
              </h3>
              <div className="bg-light-white border-pale-copper text-white text-sm w-full rounded-md border p-3 sm:leading-normal sm:text-base sm:px-5 sm:py-4">
                Go to Knowledge Base
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <h3 className="text-white text-xl font-bold flex gap-px step-number m-0 sm:text-2xl">
                <span>0</span>2
              </h3>
              <div className="bg-light-white border-pale-copper text-white text-sm w-full rounded-md border p-3 sm:leading-normal sm:text-base sm:py-4 sm:px-5  ">
                Find documents worth training the bot with
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <h3 className="text-white font-bold flex text-xl gap-px m-0 step-number sm:text-2xl">
                <span>0</span> 3
              </h3>
              <div className="bg-light-white border-pale-copper text-white text-sm w-full rounded-md border p-3 sm:leading-normal sm:text-base sm:py-4 sm:px-5">
                Upload documents and save
              </div>
            </div>
          </div>
          <div className="max-w-[400px] pt-7 m-auto">
            <Button
              onClick={onClickHandle}
              htmlType="submit"
              className="bg-dark-orange text-white text-base font-bold rounded-2xl w-full h-full leading-none pt-4 pb-4 sm:pb-5"
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
