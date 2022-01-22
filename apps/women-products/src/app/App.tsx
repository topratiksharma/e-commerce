import { Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import Header from './components/products/header/Header';
import Products from './components/products/Products';

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
