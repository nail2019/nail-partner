import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';

const MainRoute = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
    </Switch>
  </main>
);

export default MainRoute;
