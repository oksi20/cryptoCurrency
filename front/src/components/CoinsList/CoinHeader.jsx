import style from "./coinheader.module.css"
const CoinHeader=()=>{
  return(
    <div className={style["coin-container"]}>
      <div className={style["coin-row"]}>
        <div className={style["coin"]}>
          {/* <img src="" alt="crypto"/> */}
          <i className={`fab fa-btc fa-lg ${style["coin-icon"]}`}></i>
          <h1>Name</h1>
          <p className={style["coin-symbol"]}>Symbol</p>
        </div>
        <div className={style["coin-data"]}>
          <p className={style["coin-price"]}>Rate</p>
            <p className={style["coin-volume"]}>Volume</p>
            <p className={style["coin-percent"]} >Price Change %</p>
          </div>
        </div>
      </div>
  )
}
export default CoinHeader;
