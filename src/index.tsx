import ReactDom = require('react-dom');
import 'reset-css';
import TankPanel from './game/tank/Panel';
import './index.scss';


import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import React = require('react');

function App() {
  return (
    <div>
        <Router basename='/'>
          <Route path={'/tank'} component={TankPanel}/>
          <Route path={'/css'} component={Css}/>
        </Router>
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById("app")
);
