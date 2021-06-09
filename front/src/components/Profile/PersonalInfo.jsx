import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import style from "./personal.module.css"
const PersonalInfo=({username, email})=>{
  return(
    <>
    <InputGroup>
        <InputGroupAddon addonType="prepend" >
          <InputGroupText className={style.span}>Your name:</InputGroupText>
        </InputGroupAddon>
        <Input style={{color:"black"}} value={username} disabled/>
      </InputGroup>
    <InputGroup>
        <InputGroupAddon addonType="prepend" >
          <InputGroupText className={style.span}>Email:</InputGroupText>
        </InputGroupAddon>
        <Input style={{color:"black"}} value={email} disabled/>
      </InputGroup>
    </>
  )
}
export default PersonalInfo;
