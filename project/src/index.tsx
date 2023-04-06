import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
// import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import { fetchOfferAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOfferAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ErrorMessage/> */}
      <App />
    </Provider>
  </React.StrictMode>,
);
