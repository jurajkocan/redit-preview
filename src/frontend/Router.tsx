import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { MasterPage } from "./MasterPage";
import { RoutesEnum } from "src/constants/Roots";

export const RouterApp = (
  <BrowserRouter>
    <MasterPage>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={RoutesEnum.HomePage} component={lazy(() => import("./pages/List"))} />
          <Route exact path={RoutesEnum.List} component={lazy(() => import("./pages/List"))} />
          <Route
            exact
            path={RoutesEnum.DetailWithParam}
            component={lazy(() => import("./pages/Detail"))}
          />
        </Switch>
      </Suspense>
    </MasterPage>
  </BrowserRouter>
);
