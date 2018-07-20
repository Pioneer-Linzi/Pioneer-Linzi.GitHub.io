import *  as React from 'react';
import * as ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import './index.scss'
import 'reset-css'
import {CanvasPanel} from './components/canvas'

function App() {
  return (
    <CanvasPanel></CanvasPanel>
  );
}

ReactDom.render(
    <App />,
    document.getElementById("app")
);





