import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Application from "../../../components/Property/Layout/Application/Application";
import { HOTEL_CONTENT } from "./Application/Content";

const Hotel = () => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h3>Hotel</h3>
      </Route>
      <Route exact path={`${path}/submission`}>
        <Application content={HOTEL_CONTENT} />
      </Route>
    </Switch>
  );
};

export default Hotel;
