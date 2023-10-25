import React from "react";
import { Button, Image, Select } from "antd";
import { useNavigate } from "react-router-dom";
import Userimg from "../../../assets/images/userIcon.png";
import { ReactComponent as MailIcon } from "../../../assets/images/gmailIcon.svg";
import { ReactComponent as CallIcon } from "../../../assets/images/phoneIcon.svg";
import { ReactComponent as MapIcon } from "../../../assets/images/mapIcon.svg";
import chartImage from "../../../assets/images/sentimentAnalysis.png";

function ChatAnalytics() {
  const navigate = useNavigate();

  const onreturnHandle = () => {
    navigate("/inbox");
  };

  const onBotHandle = () => {
    navigate("/inbox/chat-analytics/bot");
  };

  const handleChange = (value: string) => {};
  return (
    <div className="h-[calc(100%_-_102px)] overflow-auto sm:pt-4 md:pt-7 ">
      <div className="bg-primary rounded-xl mx-4 chart-analytics xl:ml-11 xl:mr-7  h-full">
        <div className="bg-secondary flex items-center justify-between rounded-t-xl py-3 pl-5 pr-6">
          <span className="text-base text-white font-bold leading-8 sm:text-xl">
            Chat Analytics
          </span>
          <div className="inbox-btn">
            <Button
              onClick={onreturnHandle}
              className="text-white font-medium rounded-xl leading-8 h-auto py-0.5 px-3 border"
            >
              Return to Inbox
            </Button>
          </div>
        </div>
        <div className="p-4 h-[calc(100%_-_62px)] overflow-auto sm:pt-6  sm:pb-8 sm:px-9">
          <div className="grid gap-4 pb-7 sm:gap-10 xl:grid-cols-2">
            <div className="bg-dark-black rounded-xl p-4 sm:pt-4 sm:pb-7 sm:px-5">
              <div className="border-b border-b-white border-opacity-10 pb-3">
                <span className="text-xl text-white font-semibold leading-6">
                  Contact Details
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-4 sm:gap-3">
                <div className="flex items-center gap-2 pb-1 sm:gap-3">
                  <Image preview={false} src={Userimg} className="w-10" />
                  <p className="text-white text-base m-0 sm:text-lg">
                    John Doer
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <MailIcon className="w-8 sm:w-10" />
                  <p className="text-white text-base m-0 sm:text-lg">
                    Example@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <CallIcon className="w-8 sm:w-10" />
                  <p className="text-white text-base m-0 sm:text-lg">
                    +1 433 1097845
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapIcon className="w-8 sm:w-10" />
                  <p className="text-white text-base m-0 sm:text-lg">
                    4001 Anderson Road, Nashville TN 37217
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-dark-black rounded-xl h-full pt-4 pb-7 px-5">
              <div className="border-b border-b-white border-opacity-10 pb-3">
                <span className="text-white text-xl font-semibold leading-6">
                  Sentiment analysis score
                </span>
              </div>
              <div className="pt-3">
                <img src={chartImage} alt="" className="w-full max-h-[202px]" />
              </div>
            </div>
          </div>
          <div className="bg-dark-black rounded-xl pt-3 pb-7 pl-5 pr-6">
            <div className="border-b border-b-white border-opacity-10 flex flex-wrap gap-3 items-center justify-between pb-3 mb-3">
              <span className="text-white text-xl font-semibold leading-6">
                Conversation Summary
              </span>
              <Button
                onClick={onBotHandle}
                className="bg-secondary border-none text-white font-bold rounded-xl leading-3 h-auto py-2 px-3"
              >
                Ask your bot
              </Button>
            </div>
            <div>
              <h6 className="text-steel-blue text-base font-medium leading-8 mb-0.5">
                Conversation Summary
              </h6>
              <p className="border-b-2 border-squid-ink text-base font-medium capitalize pb-3 mb-3">
                Phasellus sed rutrum purus. Etiam pharetra, dui et scelerisque
                molestie, lorem metus commodo felis, eu ullamcorper nibh nulla
                in leo. Etiam est diam, convallis ut tortor a, tincidunt
                fermentum metus.
              </p>
              <h6 className="text-steel-blue text-base font-medium leading-8 mb-3">
                Qualifying Questions
              </h6>
              <div className="flex flex-col gap-3">
                <Select
                  className="bg-secondary w-full rounded-md border-none py-0.5 pl-4 pr-3 qualifying-questions"
                  defaultValue="Question One"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Classic",
                      label: "Classic",
                    },
                    {
                      value: "Classic",
                      label: "Classic",
                    },
                  ]}
                />
                <Select
                  className="bg-secondary w-full rounded-md border-none py-0.5 pl-4 pr-3 qualifying-questions"
                  defaultValue="Question One"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Classic",
                      label: "Classic",
                    },
                    {
                      value: "Classic",
                      label: "Classic",
                    },
                  ]}
                />
                <Select
                  className="bg-secondary w-full rounded-md border-none py-0.5 pl-4 pr-3 qualifying-questions"
                  defaultValue="Question One"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Classic",
                      label: "Classic",
                    },
                    {
                      value: "Classic",
                      label: "Classic",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatAnalytics;
