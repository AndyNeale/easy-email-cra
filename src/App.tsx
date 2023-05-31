import Page from 'components/Page';
import Home from 'pages/Home';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import store from 'store';
import { history } from './utils/history';

import 'styles/common.scss';

const Editor = React.lazy(() => import('pages/Editor'));

function App() {
  return (
    <Provider store={store}>
      <Page>
        <Suspense
          fallback={
            <div
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img width="200px" src="/loading" alt="" />
              <p
                style={{
                  fontSize: 24,
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                Please wait a moment.
              </p>
            </div>
          }
        >
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/editor" component={Editor} />
            </Switch>
          </Router>
        </Suspense>
      </Page>
    </Provider>
  );
}

export default App;
