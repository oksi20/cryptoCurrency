import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Bar from './Bar';

const Workstats=()=>{
const users=useSelector(state=>state.stats.editedUsers)
const [updatedArr, setUpdatedArr]=useState(null)
console.log("here", users)

useEffect(()=>{
  if (users){
   const usersToArray=Object.entries(users);
   setUpdatedArr(usersToArray)
   console.log('Kakkkk', updatedArr)
    }
    
}, [users])

  
  return(
  //   <Card className="text-dark">
  //   <Bar />
  //   <CardBody>
  //     <CardTitle tag="h5">Card title</CardTitle>
  //     <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
  //     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  //     <Button>Button</Button>
  //   </CardBody>
  // </Card>
  // <div className="container">
    <div className="row">
    {updatedArr? (updatedArr.map((el, indx)=><Bar key={indx} workName={el[0]} workData={el[1]} />)) :(<div></div>)} 
    </div>
  // </div>
  )
}
export default Workstats;
