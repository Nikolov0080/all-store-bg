import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/slate/bootstrap.min.css";
import PageRouter from './PageRouter';
import PageLayout from './Views/pageLayout/pageLayout';

// <!-- darkly, slate, cosmo, spacelab, and superhero -->
ReactDOM.render(
  <React.StrictMode>

    <PageLayout>
      <PageRouter />
    </PageLayout>
    
  </React.StrictMode>,
  document.getElementById('root')
);