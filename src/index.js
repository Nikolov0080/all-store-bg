import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/slate/bootstrap.min.css";
import PageRouter from './PageRouter';
import SessionContext from './SessionContext';
import './firebase/SDK';
import ErrorBoundary from './errorBoundaries/errorBoundary';

// <!-- darkly, slate, cosmo, spacelab, and superhero -->
ReactDOM.render(

  <React.StrictMode>

    <ErrorBoundary>
      <SessionContext>
        <PageRouter />
      </SessionContext>
    </ErrorBoundary>


  </React.StrictMode>,
  document.getElementById('root')
);