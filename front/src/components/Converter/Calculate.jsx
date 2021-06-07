import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { fetchGetCrypto } from "../../redux/reducer/coinsPartialListReducer"
import ConverterList from "./ConverterList";


const Calculate=()=>{
  const dispatch=useDispatch();
 
  
  useEffect(()=>{
      dispatch(fetchGetCrypto())
  }, [dispatch])

  return(
    <div>
      <ConverterList />
    </div>
  )
}
export default Calculate
