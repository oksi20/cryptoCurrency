import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CoinsList from './components/CoinsList/CoinsList';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Calculate from './components/Converter/Calculate';
import CoinDetail from './components/DetailCoin/CoinDetail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import {fetchDownloadCart} from "./redux/reducer/cartReducer"
import Stats from './components/Stats/Stats';


function App() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.user.user)
  if (user.username){
    dispatch(fetchDownloadCart(user.username))
  }
  
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
        <Route exact path="/logout">
          <Redirect exact path="/" />
        </Route>
        <Route exact path="/cart/:username">
          <Cart />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/statistic">
          <Stats />
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
