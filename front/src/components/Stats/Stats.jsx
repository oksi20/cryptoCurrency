import { useEffect } from "react";
import Workstats from "./Workstats"
import style from './stats.module.css'
import {fetchGetAllUsers} from "../../redux/reducer/statsReducer"
import {updateUsers} from "../../redux/reducer/statsReducer"
import { useDispatch, useSelector } from "react-redux";
const Stats=()=>{
  const users=useSelector(state=>state.stats.users)
  const updUsers=useSelector(state=>state.stats.editedUsers);
  console.log("users", users);
  console.log("uptUsers", updUsers);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchGetAllUsers())

  }, [])

  useEffect(()=>{
const updatedArr=transformUsers();
dispatch(updateUsers(updatedArr))
  }, [users])

  const transformUsers=()=>{
  const work={};
  let coins={}
  if (users){
    console.log('here', users)
    for (let el in users){
      console.log("el", el)
for (let i=0; i<users[el].length; i++){
 
  if (users[el][i].coinname in coins){
   console.log(typeof users[el][i].amount)
    coins[users[el][i].coinname]+=users[el][i].amount
   
  } else {
    coins[users[el][i].coinname]=users[el][i].amount;
  }
}
work[el]=coins;
coins={}
    }
  }
  console.log('work', work)
  return work;
  
}
 
  return(
    <div className={`${style.stats} container`}>
      <h2 className={style.title}>See where people invest</h2>
      <div className="row d-flex flex-wrap">
      {updUsers?  <Workstats /> : (<div></div>)} 
      </div>
    
     
    </div>
  )
}
export default Stats;
