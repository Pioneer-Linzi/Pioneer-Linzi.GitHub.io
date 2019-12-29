import ReactDom = require('react-dom');
import 'reset-css';
import TankPanel from './game/tank/Panel';
import './index.scss';

import { renderRoutes } from 'react-router-config';



import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import React = require('react');
import routes  from './routes'

function App() {
  return (
    <div>
      <Router basename='/'>
        {
         renderRoutes(routes)
        }
      </Router>
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById("app")
);
