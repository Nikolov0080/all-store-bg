import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/darkly/bootstrap.min.css";
import PageRouter from './PageRouter';
import SessionContext from './SessionContext';
import './firebase/SDK';

// bootstrap styles <!-- darkly, slate, cosmo, spacelab, and superhero -->
ReactDOM.render(

  <React.StrictMode>

      <SessionContext>
        <PageRouter />
      </SessionContext>

  </React.StrictMode>,
  document.getElementById('root')
);