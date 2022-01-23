import { Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import Products from './components/products/Products';

export function App() {
  return (
    <div className={styles.app}>
      <div className="container">
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

