import { Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';

import Header from './products/header/Header';
import Products from './products/Products';

export function App() {
  return (
    <div className={styles.app}>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
