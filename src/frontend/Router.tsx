import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { MasterPage } from "./MasterPage";
import { RoutesEnum } from "src/constants/Roots";
import { Detail } from "./pages/Detail";
import { List } from "./pages/List";

export const RouterApp = (
  <BrowserRouter>
    <MasterPage>
      <Switch>
        <Route exact path={RoutesEnum.HomePage} component={List} />
        <Route exact path={RoutesEnum.List} component={List} />
        <Route exact path={RoutesEnum.DetailWithParam} component={Detail} />
      </Switch>
    </MasterPage>
  </BrowserRouter>
);
