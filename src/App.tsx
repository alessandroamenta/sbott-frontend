import React from "react";
// import "antd/dist/reset.css";
import "./App.scss";
import Routes from "./routes";
import ThemeProvider from "./theme/index";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
