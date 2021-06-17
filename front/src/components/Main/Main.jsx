import main from './main.module.css'
import ReactTypingEffect from 'react-typing-effect';


const Main=()=>{

  
  return(
  <div className={main.container}>
  
     <h1 className={main.heading}> <ReactTypingEffect text={["Crypto Currency today . . . "]} staticText={'Find your'} eraseDelay={200}/></h1>
     </div>
    
  )
}
export default Main;
