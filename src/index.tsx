import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'reset-css';
import TankPanel from './game/tank/Panel';
import './index.scss';


import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
        <Router basename='/'>
          <Route path={'/tank'} component={TankPanel}/>
        </Router>
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById("app")
);
