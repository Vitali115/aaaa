import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//               css            //
import "bootstrap/dist/css/bootstrap.min.css";
//               comp          //

//              screen         //
// import LogPage from "./pages/LogPage";
import HomePage from "./pages/HomePage";
import User from "./pages/User";
import Explore from "./pages/Explore";
import RadioUser from "./pages/RadioUser";
import ScrollToTop from "./components/ScrollToTop";
import Radio from "./pages/Radio";

//               app            //
export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch />
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/user" exact component={User} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/r/user" exact component={RadioUser} />
        <Route path="/radio" exact component={Radio} />
        <Switch />
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
