import style from './coin.module.css'

const Coin=({name, image, symbol, rate, volume, priceChange})=>{
  return(
    <div className={style["coin-container"]}>
      <div className={style["coin-row"]}>
        <div className={style["coin"]}>
          <img src={image} alt="crypto"/>
          <h1>{name}</h1>
          <p className={style["coin-symbol"]}>{symbol}</p>
        </div>
        <div className={style["coin-data"]}>
          <p className={style["coin-price"]}>{rate.toLocaleString()}</p>
            <p className={style["coin-volume"]}>{volume.toLocaleString()}</p>
            <p className={`${style["coin-percent"]} ${priceChange<0? style.red:style.green}`} >{priceChange.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    
  )
}
export default Coin;
