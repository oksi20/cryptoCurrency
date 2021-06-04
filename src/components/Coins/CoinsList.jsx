import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCoinsList } from "../../redux/reducer/coinsReducer";
import Coin from "./Coin";
import './Coin.css'

const CoinsList=()=>{
  const dispatch=useDispatch();
  const [search, setSearch]=useState('');

  useEffect(()=>{
    dispatch(fetchGetCoinsList())
  }, [dispatch])

  let coins = useSelector((state) => state.coins.coinsList)
  console.log("coins",coins )


  const searchCoin=({target:{value}})=>{
setSearch(value)
  }


const filteredCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
return (
  <div className="coin-app">
    <div className="coin-search">
      <h1 className="coin-text">Search a currency</h1>
      <form>
<input type="text" placeholder='Search' className='coin-input' onChange={searchCoin}/>
      </form>
    </div>
    {filteredCoins.map(coin=><Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.market_cap} rate={coin.current_price} priceChange={coin.price_change_percentage_24h} />   )}
  </div>
)
}
export default CoinsList;