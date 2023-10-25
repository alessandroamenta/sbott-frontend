import React, { Suspense } from "react";

import "antd/dist/antd.dark.css";
// import "antd/dist/reset.css";

const DarkApp = (props: any) => {
  return <>{props.children}</>;
};

export default DarkApp;
