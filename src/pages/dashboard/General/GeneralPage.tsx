import React from "react";
import { Row, Col, Select } from "antd";

const GeneralPage: React.FC = () => {
  const handleChange = (value: string) => {};
  const StepsIteam = [
    { number: "1", message: "Go to Knowledge Base" },
    { number: "2", message: "Find documents worth training the bot with" },
    { number: "3", message: "Upload documents and save" },
    { number: "4", message: "Test your bot and get started" },
  ];

  return (
    <div className="flex flex-col gap-6 pt-11 px-4 sm:pl-8 sm:pr-10 sm:gap-14 ai-assistant">
      <div className="bg-primary rounded-xl">
        <span
          className="bg-secondary text-white text-base font-bold rounded-t-xl block pt-2 pb-2 pl-5 pr-7 sm:leading-8 
          sm:text-lg"
        >
          3 Steps to Build your AI Assistant
        </span>
        <div className="p-4 sm:py-10 sm:px-6">
          <p className="text-cadet-gray text-base sm:text-lg sm:mb-8">
            Your AI assistant is almost ready. Right now, it has the same
            capabilities of ChatGPT. Following the steps below will let you
            unlock its full capabilities.
          </p>
          <div className="grid gap-y-5 gap-x-10 px-6 xl:grid-cols-2">
            {StepsIteam.map((item) => (
              <div className="flex items-center gap-3 steps-main sm:gap-5">
                <h3 className="text-white font-bold flex text-xl gap-px m-0 step-number sm:text-2xl">
                  <span>0</span>
                  {item.number}
                </h3>
                <div
                  className="bg-light-white border border-pale-copper text-white text-base leading-normal rounded-md w-full 
                p-3 sm:py-4 sm:px-5"
                >
                  {item.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-primary border-none rounded-xl">
        <div className="bg-secondary flex justify-between items-center rounded-t-xl py-2 px-5">
          <span className="text-white text-lg font-bold leading-8">
            Analytics
          </span>
          <Select
            className="bg-primary text-white border-none w-auto rounded-md day-select"
            defaultValue="Last 30 days"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              {
                value: "30day",
                label: "Last 30 Day",
              },
              {
                value: "10day",
                label: "Last 10 Day",
              },
            ]}
          />
        </div>
        <div className="p-4 sm:pt-7 sm:pb-5 sm:pl-7 sm:pr-5">
          <Row className="gap-4 md:gap-0">
            <Col xs={24} md={12}>
              <div className="border-b-charcoal border-b border-r-charcoal pt-3 pb-4 px-3 sm:pb-7 sm:border-r">
                <span className="text-steel-blue text-lg leading-8">
                  Total messages sent
                </span>
                <p className="text-white text-3xl font-medium pt-3 m-0 sm:pt-6  sm:text-4xl sm:leading-8">
                  69
                </p>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="border-b border-b-charcoal border-r border-r-transparent pt-3 px-3 pb-4 sm:pb-7">
                <span className="text-steel-blue text-lg leading-8">
                  AI messages sent
                </span>
                <p className="text-white text-3xl font-medium pt-3 m-0 sm:text-4xl sm:pt-6 sm:leading-8">
                  69
                </p>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="border-b border-b-charcoal sm:border-b-transparent  border-r-charcoal pt-3 pb-4 px-3 sm:pb-6 sm:border-r">
                <span className="text-steel-blue text-lg leading-8">
                  AI messages as % of total
                </span>
                <p className="text-white text-3xl font-medium m-0 sm:text-4xl sm:leading-8 pt-3 sm:pt-6">
                  69
                </p>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="border-b border-b-charcoal  border-r border-r-transparent pt-3 pb-4 px-3 sm:pb-6 sm:border-b-transparent">
                <span className="text-steel-blue text-lg leading-8">
                  Conversations
                </span>
                <p className="text-white text-3xl font-medium m-0 pt-3 sm:text-4xl sm:leading-8 sm:pt-6">
                  69
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default GeneralPage;
