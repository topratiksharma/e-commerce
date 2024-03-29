import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/App';

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
