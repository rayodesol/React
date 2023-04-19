import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode 는 2번씩 실행됨.
  <>
    <GlobalStyle />
    <App />
  </>,
);

reportWebVitals();
