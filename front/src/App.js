import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CoinsList from './components/CoinsList/CoinsList';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Calculate from './components/Converter/Calculate';
import CoinDetail from './components/DetailCoin/CoinDetail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Main />
        </Route>
        <Route exact path="/coinslist">
        <CoinsList />
        </Route>
        <Route exact path="/coinslist/:id">
        <CoinDetail />
        </Route>
        <Route exact path="/calculator">
          <Calculate />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        
      </Switch>
    </div>
  </Router>
)
}

export default App;
