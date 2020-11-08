import React from 'react';
import { Home } from './views/HOME/Home';
import { Skills } from './views/SKILLS/Skill';
import { Achievement} from './views/ACHIEVEMENTS/Achievement'
import { Projects } from './views/PROJECTS/Projects';
import { About } from './views/ABOUT/About';
import {App} from './App'
// import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import Otisportal from './views/OTISPORTAL/Otisportal';
import Dental from './views/DENTAL/dental';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Projects" component={Home} />
        <Route exact path="/">
          <Redirect to="/Projects" />
        </Route>
        <Route exact path="/Projects/1" component={Projects} />
        <Route exact path="/Projects/2" component={Otisportal} />
        <Route exact path="/Projects/3" component={Dental} />
        <Route exact path = "/Skills" component={Skills} />
        <Route exact path = "/Projects" component={Home} />
        <Route exact path = "/Achievements" component={Achievement} />
        <Route exact path = "/App" component={App} />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};