import *  as React from 'react';
import * as ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import './index.scss'

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDom.render(
    <App />,
    document.getElementById("app")
);





