import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

import Login from "../pages/auth/Login/Login";
import DashBoardLayout from "../layouts/index";
import GeneralPage from "../pages/dashboard/General/General";
import GeneralPages from "../pages/dashboard/General/GeneralPage";
import BotSetup from "../pages/dashboard/BotSetup/BotSetup";
import KnowledgeBase from "../pages/dashboard/KnowledgeBase/KnowledgeBase";
import Client from "../pages/dashboard/Client/Client";
import ClientModal from "../pages/dashboard/Client/ClientModal";
import InBox from "../pages/dashboard/InBox/InBox";
import ChatAnalytics from "../pages/dashboard/InBox/ChatAnalytics";
import Bot from "../pages/dashboard/InBox/Bot";
import Subscription from "../pages/dashboard/Subscription/Subscription";

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <DashBoardLayout />,
      children: [
        { path: "dashboard", element: <GeneralPage /> },
        { path: "dashboard/general", element: <GeneralPages /> },
        { path: "bot-setup", element: <BotSetup /> },
        { path: "knowledge-base", element: <KnowledgeBase /> },
        { path: "client", element: <Client /> },
        {
          path: "client/edit/:id",
          element: <ClientModal />,
        },
        { path: "inbox", element: <InBox /> },
        { path: "inbox/chat-analytics", element: <ChatAnalytics /> },
        { path: "inbox/chat-analytics/bot", element: <Bot /> },
        { path: "subscription", element: <Subscription /> },
      ],
    },
  ]);
}

export default Routes;
