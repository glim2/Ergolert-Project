import React from "react";
import ReactDom from "react-dom";
import Routes from "./components/Routes";

const App = () => {
  return <Routes />;
};

ReactDom.render(<App />, document.getElementById("main"));
