import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Greeting from './Greeting';
import Clicker from './Clicker'
import Game from './Game'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const element = (
  <>
    <Game/>
  </>
)

root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);

reportWebVitals();
