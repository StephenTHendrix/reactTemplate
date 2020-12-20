import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { GlobalStyles } from '../globalStyles';
import { Home } from '_pages';
import { ScrollToTop } from '_components';
import { ViewportProvider } from '_hooks';

export const Routes = () => {
  return (
    <ViewportProvider>
      {/* <ScrollToTop /> */}
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ViewportProvider>
  );
};
