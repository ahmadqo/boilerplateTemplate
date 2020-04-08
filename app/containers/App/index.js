import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/features" component={FeaturePage} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
