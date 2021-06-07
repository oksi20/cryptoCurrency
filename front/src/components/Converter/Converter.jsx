import style from "./style.module.css"
const Converter=({icon, title, rate, selected, clickedCard})=>{
 

  return(
    <>
    <div onClick={()=>clickedCard(title)} className={`${style.card} ${selected && style.selected}`}>
      <div className="card-body">
        <div className="coin-icon">
          <img src={icon} alt=""/></div>
        <div>{title}</div>
        <div>${rate.toLocaleString()}</div>
      </div>
      
    </div>
    </>
  )
}
export default Converter;
