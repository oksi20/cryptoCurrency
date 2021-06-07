import { useSelector } from "react-redux";
import {  Link} from "react-router-dom";
import style from './header.module.css'
const Header =()=>{
  // const user = useSelector((state) => state.user);
  let user={};
  user.isLogin=false;
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
            {!user.isLogin ? 
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
              </>)}
          </ul>
          <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </nav>
  )
}

export default Header;
