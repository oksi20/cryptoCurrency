import { useEffect, useState } from "react"
import InputBase from "./Exchange"


const FormConverter=({symbol, rate})=>{

  const INIT={amount:0, converted:0}
  const [input, setInput]=useState(INIT)

  useEffect(()=>{
   
setInput({
  ...input,
  converted:(Number(input.amount)/rate).toFixed(3)

})
  }, [symbol])

  const calculatedPrice=({target:{value}})=>{
const val=Number(value.trim());
const convertedPrice=(val/rate).toFixed(3);
setInput({amount:val, converted:convertedPrice})

  }
  return(
    <form className='form'>
      <div className="input-form mb-3 d-flex">
       <InputBase onChange={calculatedPrice} textLabel="USD" />
        <i className="fas fa-exchange-alt" />
        <InputBase textLabel={symbol} value={input.converted}/>
      </div>
    </form>
  )
}

export default FormConverter
