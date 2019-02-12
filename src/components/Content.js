import React from 'react'
import {Switch, Route} from 'react-router-dom'

import DashboardView from './views/DashboardView'
import RecipesView from "./views/RecipesView";
import ChallengeView from "./views/ChallengeView";

const Content = () => (
  <div>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={DashboardView}/>
      <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={DashboardView}/>
      <Route path={`${process.env.PUBLIC_URL}/recipes`} component={RecipesView}/>
      <Route path={`${process.env.PUBLIC_URL}/challenge`} component={ChallengeView}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </div>
);

export default Content
