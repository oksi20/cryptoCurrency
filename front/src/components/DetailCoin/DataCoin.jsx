import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchGetDetailCoin} from '../../redux/reducer/coinsPartialListReducer'
import style from './datacoin.module.css'

const DataCoin=({id})=>{
  const dispatch=useDispatch();
  const coin=useSelector(state=>state.coinspartial.coin);
  useEffect(()=>{
dispatch(fetchGetDetailCoin(id))
  }, [])

  return (
    <>
    {coin.length? 
<div className={`${style.box} container `}>
  <div className={`row ${style.rowCoin}`}>
    <div className="col">
   <h6> <img src={coin[0].image} alt="" className={style.imageCoin}/> {coin[0].name} </h6>  
    </div>
    <div className="col">
     <h6> Current price <span className="text-warning">${coin[0].current_price.toLocaleString()}</span></h6>
    </div>
    </div>
    <div className={`row ${style.rowCoin}`}>
    <div className="col">
      Price change % : {coin[0].price_change_percentage_24h.toFixed(2)}
    </div>
    <div className="col">
      Market Cap :{coin[0].market_cap.toLocaleString()}
    </div>
    </div>
  <div className={`row ${style.rowCoin}`}>
    <div className="col">Highest price for the last 24h: {coin[0].high_24h.toLocaleString()}</div>
    <div className="col">Lowest price for the last 24h: {coin[0].low_24h.toLocaleString()}</div>
  </div>
</div>
: (<div></div>)}
</>
  )

}
export default DataCoin;
