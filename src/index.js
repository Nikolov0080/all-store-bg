import React from 'react';
import ReactDOM from 'react-dom';
// import "bootswatch/dist/darkly/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import './theme/bootstrap.css'
import PageRouter from './PageRouter';
import SessionContext from './SessionContext';
import './firebase/SDK';
import './main.module.css'

// bootstrap styles <!-- darkly, slate, cosmo, spacelab, and superhero -->
ReactDOM.render(

  // <React.StrictMode >

      <SessionContext>
        <PageRouter />
      </SessionContext>,

//  </React.StrictMode>,
  document.getElementById('root')
);