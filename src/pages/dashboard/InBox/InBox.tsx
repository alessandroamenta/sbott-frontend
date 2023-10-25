import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image } from "antd";
import Usericon from "../../../assets/images/userIcon.png";
import { ReactComponent as Chevronicon } from "../../../assets/images/chevronIcon.svg";

function InBox() {
  const [showOverflow, setShowOverflow] = useState(false);
  const navigate = useNavigate();

  const onChartHandle = () => {
    navigate("/inbox/chat-analytics");
  };
  const items = [
    { id: 1, name: "John Doe", message: "Messaged 2 seconds ago", number: 1 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
    { id: 2, name: "Jane Smith", message: "Messaged 5 seconds ago", number: 2 },
  ];

  const onMessagehandle = () => {
    // Handle the message click as needed
    if (window.innerWidth <= 767) {
      setShowOverflow(true);
    }
    // console.log("222222222");
  };

  const onBackhandle = () => {
    setShowOverflow(false);
  };

  return (
    <div className="bg-primary rounded-xl h-[calc(100%_-_78px)] sm:h-[calc(100%_-_106px)] lg:mt-7 mx-4 sm:mx-6 lg:ml-11 lg:mr-7">
      <div className="bg-secondary flex items-center flex-wrap justify-between rounded-t-xl py-4 px-4 sm:pl-6 sm:pr-5">
        <span className="text-xl text-white font-bold leading-8">Inbox</span>
        <span className="text-slate-gray">
          Last knowledge update: 2 days ago.
        </span>
      </div>
      <div className="flex h-[calc(100%_-_64px)]">
        <div
          className={`${
            showOverflow ? "hidden md:block" : "block"
          } border-r-2 border-r-secondary overflow-y-auto w-full min-w-[300px] xl:min-w-[398px]`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="border-b border-b-secondary flex items-center justify-between py-3 pl-3 pr-6"
              onClick={onMessagehandle}
            >
              <div className="flex items-center gap-3">
                <Image preview={false} src={Usericon} />
                <div>
                  <h5 className="text-base font-bold leading-5 mb-1">
                    {item.name}
                  </h5>
                  <p className="text-steel-blue text-base leading-5 mb-0">
                    {item.message}
                  </p>
                </div>
              </div>
              <span className="bg-light-blue text-base flex justify-center items-center w-8 h-8 rounded-full font-bold">
                {item.number}
              </span>
            </div>
          ))}
        </div>
        <div
          className={`${
            showOverflow ? "" : "hidden md:flex"
          } flex-col overflow-y-auto`}
        >
          <div className="bg-secondary flex items-center justify-between flex-wrap py-3 pl-5 pr-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                onClick={onBackhandle}
                className="block md:hidden border-none p-0"
              >
                <Chevronicon className="w-7" />
              </Button>
              <Image
                preview={false}
                src={Usericon}
                className="w-5 min-w-[30px] sm:min-w-[38px]"
              />
              <span className="text-base text-white font-bold leading-5 pl-1 sm:text-lg">
                John Doe
              </span>
            </div>

            <Button
              onClick={onChartHandle}
              className="bg-gradient-liener text-dark-black font-bold leading-8 h-auto rounded-xl py-0.5 px-3"
            >
              Chat Analytics
            </Button>
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <div className="pt-4 px-4 md:pt-10 md:pl-5 md:pr-6">
                <p className="bg-dark-charcoal text-base rounded-t-lg rounded-l-lg p-3 mb-2">
                  General estimate is around 3-5 minutes between sets. If you
                  can go back into your set under 2 minutes and maintain good
                  form that is a sign you should increase the weight or
                  intensity.
                </p>
                <span className="text-dark-cadet">Client Name - 12:32am </span>
                <div className="pt-10">
                  <p className="bg-light-coffee text-base rounded-t-lg rounded-l-lg max-w-[586px] p-3 mb-2 ml-auto">
                    How much rest time should I take between sets when doing
                    squats on the first workout?
                  </p>
                  <span className="text-dark-cadet text-end block">
                    <b className="text-dark-blue">Sbott</b> - 12:23am
                  </span>
                </div>
              </div>
              <div className="pt-4 px-4 md:pt-10 md:pl-5 md:pr-6">
                <p className="bg-dark-charcoal text-base rounded-t-lg rounded-l-lg p-3 mb-2">
                  General estimate is around 3-5 minutes between sets. If you
                  can go back into your set under 2 minutes and maintain good
                  form that is a sign you should increase the weight or
                  intensity.
                </p>
                <span className="text-dark-cadet">Client Name - 12:32am </span>
              </div>
            </div>
            <div className="bg-primary border-t border-t-dark-charcoal sticky bottom-0 rounded-b-lg py-4 px-6">
              <Button className="bg-dark-coffee text-light-pink w-full rounded-lg border-none leading-8 font-bold h-auto py-1">
                Pause Sbott
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InBox;
