import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Layout, Menu, Divider } from "antd";
import Header from "./Header/Header";
import { ReactComponent as SbottLogo } from "../assets/images/sbottlogoIcon.svg";
import { ReactComponent as DashboardIcon } from "../assets/images/dashboardIcon.svg";
import { ReactComponent as BotsetupIcon } from "../assets/images/botSetupIcon.svg";
import { ReactComponent as KnowledgebaseIcon } from "../assets/images/knowledgeIcon.svg";
import { ReactComponent as ClientsIcon } from "../assets/images/clientIcon.svg";
import { ReactComponent as InboxIcon } from "../assets/images/inboxIcon.svg";
import { ReactComponent as SubscriptionsIcon } from "../assets/images/subscriptionsIcon.svg";
import { ReactComponent as LightmodeIcon } from "../assets/images/lightmodeIcon.svg";

// import "./index.scss";
import { Link } from "react-router-dom";

const DashBoardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebaropen, setSidebaropen] = useState(false);

  const activeMenuKeys: any = {
    "/dashboard": "1",
    "/bot-setup": "2",
    "/knowledge-base": "3",
    "/client": "4",
    "/inbox": "5",
    "/subscription": "6",
  };

  const partiallyMatchedKey: any = Object.keys(activeMenuKeys).find((key) =>
    location.pathname.includes(key)
  );

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={
          sidebaropen
            ? "bg-primary flex-none flex-col h-full fixed overflow-auto max-w-none w-[220px] z-30 py-4 sidebar-main sm:pt-6 sm:pb-8 sm:w-[324px] md:pt-12 lg:flex"
            : "bg-primary flex-none flex-col h-full fixed overflow-auto max-w-none w-[220px] pb-8 pt-12 hidden sidebar-main sm:w-[324px] lg:flex"
        }
      >
        <div className="border-squid-ink border-b-2 pb-3 mb-4 ml-4 mr-7 sm:pb-5 sm:mb-5 md:pb-8">
          <Link to="#">
            <SbottLogo />
          </Link>
        </div>

        <Menu
          className="flex-1 px-3 bg-transparent dashboard-menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[activeMenuKeys[partiallyMatchedKey] || ""]}
        >
          <Menu.Item
            className="text-steel-blue text-sm font-medium rounded-lg h-auto transition-none py-[14px] px-5 m-0 sm:text-base"
            key="1"
            icon={<DashboardIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            onClick={() => {
              navigate("/dashboard");
              setSidebaropen(false);
            }}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            className="text-steel-blue text-sm font-medium rounded-lg h-auto transition-none py-[14px] px-5 m-0 sm:text-base"
            key="2"
            icon={<BotsetupIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            onClick={() => {
              navigate("/bot-setup");
              setSidebaropen(false);
            }}
          >
            Bot SetUp
          </Menu.Item>
          <Menu.Item
            className="text-steel-blue text-sm font-medium rounded-lg h-auto transition-none py-[14px] px-5 m-0 sm:text-base"
            key="3"
            icon={<KnowledgebaseIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            onClick={() => {
              navigate("/knowledge-base");
              setSidebaropen(false);
            }}
          >
            Knowledge Base
          </Menu.Item>
          <Menu.Item
            className="text-steel-blue text-sm font-medium rounded-lg h-auto transition-none py-[14px] px-5 m-0 sm:text-base"
            key="4"
            icon={<ClientsIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            onClick={() => {
              navigate("/client");
              setSidebaropen(false);
            }}
          >
            Clients
          </Menu.Item>
          <Menu.Item
            className="text-steel-blue text-sm font-medium rounded-lg h-auto transition-none py-[14px] px-5 m-0 sm:text-base"
            key="5"
            icon={<InboxIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            onClick={() => {
              navigate("/inbox");
              setSidebaropen(false);
            }}
          >
            Inbox
          </Menu.Item>
        </Menu>
        <Divider plain className="min-w-fit w-auto mx-4 my-0"></Divider>
        <Menu
          className="bg-transparent flex flex-col justify-end pt-4 px-3 dashboard-menu"
          theme="dark"
          mode="inline"
          selectedKeys={[activeMenuKeys[partiallyMatchedKey] || ""]}
        >
          <Menu.Item
            className="text-steel-blue text-sm font-medium rounded-lg h-auto transition-none py-[14px] px-5 m-0 sm:text-base"
            key="6"
            icon={<SubscriptionsIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            onClick={() => {
              navigate("/subscription");
              setSidebaropen(false);
            }}
          >
            Subscriptions
          </Menu.Item>
          <Menu.Item
            className="text-steel-blue text-sm font-medium rounded-lg h-auto transition-none py-[14px] px-5 m-0 sm:text-base"
            key="7"
            icon={<LightmodeIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            // onClick={() => navigate("/subscription")}
          >
            Light Mode
          </Menu.Item>
        </Menu>
      </Sider>
      <div
        className={
          sidebaropen
            ? "bg-dark-black h-screen overflow-auto pl-0"
            : "bg-dark-black h-screen overflow-auto flex flex-col pl-0 pb-7 lg:pl-[324px]"
        }
      >
        <Header setSidebaropen={setSidebaropen} sidebaropen={sidebaropen} />
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardLayout;
