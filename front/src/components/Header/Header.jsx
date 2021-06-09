import { useDispatch, useSelector, useStore } from "react-redux";
import {  Link, useHistory} from "react-router-dom";
import style from './header.module.css'
import {fetchLogoutUser} from "../../redux/reducer/authReducer"
import {clearCart} from "../../redux/reducer/cartReducer"
import { useEffect, useState } from "react";

const Header =()=>{
  const dispatch=useDispatch();
  const history=useHistory()
  const user = useSelector((state) => state.user);
  const cart=useSelector(state=>state.cart)
  const [userCart, setCart]=useState([])

  useEffect(()=>{
    setCart(cart.cart)
  }, [cart])



 const logout=()=>{
   dispatch(fetchLogoutUser())
   dispatch(clearCart())
  //  console.log(user.user);
   }
   
  
  return(
<nav className="navbar navbar-expand-lg navbar-light">
<div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={style["nav-link"]} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={style["nav-link"]} to="/calculator">Converter</Link>
            </li>
            <li className="nav-item">
              <Link className={style["nav-link"]} to="/coinslist">CoinList</Link>
            </li>
            {!user.isAuthorised ? 
             ( <>
            <li className="nav-item">
              <Link className={style["nav-link"]} to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className={style["nav-link"]} to="/register" >Register</Link>
            </li>
            </>): 
              (<>
              <li className="nav-item">
              <Link className={style["nav-link"]} to="/profile">Profile</Link>
            </li>
              <li className="nav-item">
              <Link className={style["nav-link"]} to="/explore">Explore</Link>
            </li>
              <li className="nav-item">
              <Link className={style["nav-link"]} to="/logout" onClick={logout}>Logout</Link>
            </li>
              </>)}
          </ul>
          <div className="d-flex mt-2">
           
          <form className="d-flex mr-4">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Link className={`${style["nav-link"]}  "m-2"`} to={`/cart/${user.user.username}`} >
        {
          userCart.length? <i style={{marginTop:10, marginRight:15, color:"red"}} class="fas fa-shopping-cart fa-lg"></i> :
          <i style={{marginTop:10, marginRight:15, color:"white"}} class="fas fa-shopping-cart fa-lg"></i> 
         }
             
              {/* className={`${style["coin-percent"]} ${priceChange<0? style.red:style.green}`} */}
          </Link>
      </div>
          </div>
        </nav>
  )
}

export default Header;
