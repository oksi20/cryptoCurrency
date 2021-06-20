import { useEffect, useState } from "react"
import Exchange from "./Exchange"
import {Button, FormGroup} from 'reactstrap'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, fetchAddCarttoDB } from "../../redux/reducer/cartReducer"
import { useHistory } from "react-router-dom"

const FormConverter=({symbol, rate, id})=>{
const dispatch=useDispatch();
const history=useHistory();
const user=useSelector(state=>state.user.user)
  const INIT={amount:0, converted:0}
  const [input, setInput]=useState(INIT)

  useEffect(()=>{
   
setInput((prev)=>{
  return {
  ...prev,
  converted:(Number(input.amount)/rate).toFixed(2)

}
})
  }, [symbol])

  const calculatedPrice=({target:{value}})=>{
const val=Number(value.trim());
const convertedPrice=(val/rate).toFixed(3);
setInput({amount:val, converted:convertedPrice})

  }
  const addCryptoToCart=()=>{
    if (user.username){
      dispatch(fetchAddCarttoDB({cart:{...input, id}, username:user.username}))
    } else {
      history.push('/register')
    }


  }
  return(
    <form className='form d-flex'>
      <FormGroup className="d-flex">
      <div className="input-form mb-3 d-flex">
       <Exchange onChange={calculatedPrice} textLabel="USD" placeholder="enter amount $" />
        <i className="fas fa-exchange-alt" />
        <Exchange textLabel={symbol} value={input.converted}/>
        <Button className="p-1 ml-3" style={{width:250}} type="button" onClick={addCryptoToCart} >Add <i class="fas fa-shopping-cart"></i> </Button>
      </div>
      </FormGroup> 
    </form>
  )
}

export default FormConverter
