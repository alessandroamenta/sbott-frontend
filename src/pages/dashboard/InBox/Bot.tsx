import React from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SendIcon } from "../../../assets/images/sendIocn.svg";

function Bot() {
  const navigate = useNavigate();
  const { TextArea } = Input;
  const onReturnHandle = () => {
    navigate("/inbox/chat-analytics");
  };

  return (
    <div className="h-[calc(100%_-_102px)] overflow-auto mx-4 sm:mt-3 md:mt-7 md:mx-6 xl:ml-11 xl:mr-7">
      <div className="bg-primary rounded-xl">
        <div className="bg-secondary rounded-t-xl flex justify-between items-center py-3 px-3 sm:pl-5 sm:pr-6">
          <span className="text-base text-white font-bold leading-5 sm:text-xl">
            Ask Your Bot
          </span>
          <Button
            onClick={onReturnHandle}
            className="bg-dark-black text-white border-none font-medium capitalize rounded-xl h-auto leading-8 py-0.5 px-3  hover:text-white"
          >
            Return to Analytics
          </Button>
        </div>
        <div className="min-h-[200px] sm:min-h-[550px]"></div>
        <div className="border-t-2 border-secondary py-[10px] pl-3 pr-4">
          <div className="relative">
            <TextArea
              placeholder="Type a question you want your bot to answer"
              autoSize
              className="bg-dark-black border-none text-sm rounded-lg leading-9 py-2 pl-4 h-14"
            />
            <Button className="border-none absolute top-1/2 right-3 -translate-y-1/2 h-auto p-0">
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bot;
