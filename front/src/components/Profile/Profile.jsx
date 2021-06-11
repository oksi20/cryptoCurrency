import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import PersonalInfo from "./PersonalInfo";
import PurchasedCoin from "./PurchasedCoin";
import profile from './profile.module.css'
import {fetchGetCoins} from '../../redux/reducer/authReducer';


const Profile=()=>{
  const user=useSelector(state=>state.user.user)
const dispatch=useDispatch();


useEffect(()=>{
  dispatch(fetchGetCoins(user.username));
}, [])

  return(
    <div className={`${profile.container} mt-5`}>
<PersonalInfo username={user.username} email={user.email} work={user.work} />
<div className={profile.containerCard}>
{user.coins.map(el=><PurchasedCoin key={el._id} coinname={el.coinname} amount={el.amount} converted={el.converted}/>)}
</div>
</div>
  )
}
export default Profile;

