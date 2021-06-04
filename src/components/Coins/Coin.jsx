const Coin=({name, image, symbol, rate, volume, priceChange})=>{
  return(
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto"/>
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{rate}</p>
            <p className="coin-volume">{volume.toLocaleString()}</p>
            <p className={`coin-percent ${priceChange<0? 'red':'green'}`} >{priceChange.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    
  )
}
export default Coin;
