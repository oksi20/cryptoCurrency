import './App.css'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CoinsList from './components/Coins/CoinsList';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coinslist">CoinsList</Link>
            
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

    
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/coinslist">
        <CoinsList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
)
}

export default App;
