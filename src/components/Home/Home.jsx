import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { fetchGetCrypto } from "../../redux/reducer/cryptoReducer"
import ConverterList from "../Converter/ConverterList";


const Home=()=>{
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
export default Home
