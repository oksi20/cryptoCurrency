import style from "./loading.module.css"
const Loader=()=>{
  return(
    <div className={style.loader}>
    <div className={style["lds-spinner"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
export default Loader;
