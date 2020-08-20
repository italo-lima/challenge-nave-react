import React from "react";
import { Switch } from "react-router-dom";

import SignIn from "../screens/SignIn";
import Navers from "../screens/Navers";
import CreateNaver from "../screens/CreateNaver";
import EditNaver from "../screens/EditNaver";
import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/navers" component={Navers} isPrivate />
    <Route path="/create-naver" component={CreateNaver} isPrivate />
    <Route path="/edit-naver/:id" component={EditNaver} isPrivate />
  </Switch>
);

export default Routes;
