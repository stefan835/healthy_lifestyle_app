import React from 'react'
import {Switch, Route} from 'react-router-dom'

import DashboardView from './views/DashboardView'
import RecipesView from "./views/RecipesView";
import ChallengeView from "./views/ChallengeView";

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={DashboardView}/>
      <Route path="/dashboard" component={DashboardView}/>
      <Route path="/recipes" component={RecipesView}/>
      <Route path="/challenge" component={ChallengeView}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </div>
);

export default Content