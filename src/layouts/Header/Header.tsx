import React from "react";
import { Layout, Button, Image } from "antd";
import Usericon from "../../assets/images/userIcon.png";
import { ReactComponent as EmailIcon } from "../../assets/images/emailLoginIcon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/images/notificationIcon.svg";
import { ReactComponent as Bars } from "../../assets/images/barIcon.svg";
import { Link } from "react-router-dom";
interface HeaderProps {
  setSidebaropen: Function;
  sidebaropen: Boolean;
}

const Header: React.FC<HeaderProps> = ({ setSidebaropen, sidebaropen }) => {
  // const [collapsed, setCollapsed] = useState(false);
  const { Header } = Layout;
  return (
    <div className="sticky top-0 z-20">
      <Header className="bg-dark-black h-auto py-4 header-main sm:pt-5 px-5 md:pb-6 md:pt-8  lg:pr-10">
        <div className="flex justify-between lg:justify-end items-center gap-4">
          <Button
            onClick={() => setSidebaropen(!sidebaropen)}
            className="border-none block p-0 hover:text-white lg:hidden"
          >
            <Bars className="w-7" />
          </Button>
          <div className="flex items-center gap-4">
            <div className="hidden gap-5 sm:flex">
              <Link to="#">
                <EmailIcon />
              </Link>
              <Link to="#">
                <NotificationIcon />
              </Link>
            </div>
            <div className="bg-raisin-black min-w-fit hidden w-px h-8 sm:block"></div>
            <Link to="#" className="flex">
              <Image preview={false} src={Usericon} className="w-11" />
            </Link>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Header;
