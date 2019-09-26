import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { MasterPage } from "./MasterPage";
import { RoutesEnum } from "src/constants/Roots";

export const RouterApp = (
  <BrowserRouter>
    <Suspense
      fallback={
        <MasterPage>
          <div>Loading...</div>
        </MasterPage>
      }
    >
      <MasterPage>
        <Switch>
          <Route exact path={RoutesEnum.HomePage} component={lazy(() => import("./pages/List"))} />
          <Route exact path={RoutesEnum.List} component={lazy(() => import("./pages/List"))} />
          <Route exact path={RoutesEnum.Detail} component={lazy(() => import("./pages/Detail"))} />
          <Route component={lazy(() => import("./pages/404"))} />
        </Switch>
      </MasterPage>
    </Suspense>
  </BrowserRouter>
);
