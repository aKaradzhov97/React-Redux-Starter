import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { RootReducer } from './store/reducers/root-reducer';

// i18n
import './i18n';

// Styles
import './index.scss';

// Screens
import LoadingOverlay from 'react-loading-overlay';
import HomeScreen from './screens/Home/home-screen';
import AboutScreen from './screens/About/about-screen';
import NotFoundScreen from './screens/NotFound/not-found.screen';

const initialState = {};
const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    RootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history))),
  );
};

ReactDOM.render(
  <Suspense
    fallback={
      <LoadingOverlay
        active={true}
        spinner={true}
        styles={{
          wrapper: {
            height: '100vh',
          },
        }}
      />
    }
  >
    <Provider store={configureStore(initialState)}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Route path="**" component={NotFoundScreen} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
