import { Card, CardTitle, CardText } from 'reactstrap';
import purch from "./purchased.module.css"
const PurchasedCoin=({coinname, amount, converted})=>{
  return(
    <Card className={`${purch.card} mt-5 mx-1 `} inverse style={{backgroundColor:"rgb(42 140 66)"}}>
        <CardTitle className="pt-2" style={{fontWeight:400,  color:"black"}} tag="h4">{coinname}<hr /></CardTitle>
        
        <CardText style={{color:"black"}}>You purchased {converted} {coinname} for ${amount}</CardText>
      </Card>
  )
}
export default PurchasedCoin;
