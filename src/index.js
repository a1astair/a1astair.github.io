import React from 'react'
import { render } from 'react-dom'
import Root from './containers/root'
import configureStore from './store/configure-store'
import { AppContainer } from 'react-hot-loader'

const store = configureStore();

const rootEl = document.getElementById('root')
 render(
 <AppContainer>
     <Root store={store} />
  </AppContainer>,
    rootEl
  );

if (module.hot) {
   module.hot.accept('./containers/root', () => {
     const NextApp = require('./containers/root').default;
      render(
       <AppContainer>
         <NextApp store={store} />
       </AppContainer>,
        rootEl
      );
    });
}
