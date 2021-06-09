import main from './main.module.css'
import ReactTypingEffect from 'react-typing-effect';

const Main=()=>{

  
  return(
  <div className={main.container}>
     <h1 className={main.heading}> <ReactTypingEffect text={["Currency today . . . "]} staticText={'Find your Crypto'} eraseDelay={500}/></h1>
     </div>
    
  )
}
export default Main;
