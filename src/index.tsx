import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './components/App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const element = (
  <>
    <App/>
  </>
)

root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);

reportWebVitals();
