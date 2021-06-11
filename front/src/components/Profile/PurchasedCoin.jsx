import { Card, CardTitle, CardText } from 'reactstrap';
import purch from "./purchased.module.css"
const PurchasedCoin=({coinname, amount, converted})=>{
  return(
    <Card className={`${purch.card} mt-5 mx-1 `} inverse style={{backgroundColor:"rgba(255, 255, 255, 0.9)"}}>
        <CardTitle className={purch.cardtitle} style={{fontWeight:300,  color:"green" ,backgroundColor:"rgba(0, 0, 0, 0.8)"}} tag="h5">{coinname}</CardTitle>
        
        <CardText style={{color:"black"}}>You purchased {converted} {coinname} for ${amount}</CardText>
      </Card>
  )
}
export default PurchasedCoin;
