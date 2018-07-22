import *  as React from 'react';
import * as ReactDom from 'react-dom';
import './index.scss'
import 'reset-css'
import TankPanel from './game/tank/Panel';

function App() {
  return (
	  <TankPanel></TankPanel>
  );
}

ReactDom.render(
    <App />,
    document.getElementById("app")
);





