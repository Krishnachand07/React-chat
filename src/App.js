import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container-xl container-fluid">
      <BrowserRouter>
      
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
