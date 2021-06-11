import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import style from "./personal.module.css"
const PersonalInfo=({username, email, work})=>{
  return(
    <div className={style.box}>
    <InputGroup className={style.inputGroup}>
        <InputGroupAddon addonType="prepend" >
          <InputGroupText className={style.span} >Your name:</InputGroupText>
        </InputGroupAddon>
        <Input style={{backgroundColor:"#f8f9fa"}} className={style.fontF} value={username} disabled/>
      </InputGroup>
    <InputGroup>
        <InputGroupAddon addonType="prepend" >
          <InputGroupText className={style.span}>Email:</InputGroupText>
        </InputGroupAddon>
        <Input style={{backgroundColor:"#f8f9fa"}} className={style.fontF} value={email} disabled/>
      </InputGroup>
    <InputGroup>
        <InputGroupAddon addonType="prepend" >
          <InputGroupText className={style.span}>Working @:</InputGroupText>
        </InputGroupAddon>
        <Input style={{backgroundColor:"#f8f9fa"}} className={style.fontF} value={work} disabled/>
      </InputGroup>
    </div>
  )
}
export default PersonalInfo;
