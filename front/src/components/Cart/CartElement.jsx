import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import elements from './elements.module.css'

const CartElement = ({
  coinname,
  amount,
  converted,
  deleteCoin,
  id,
  username,
}) => {
  
  return (
    <div className={`d-flex ${elements.cartElements}`}>
      <FormGroup className={elements.inputs}>
        <Input
          
          disabled
          value={coinname}
          type="text"
          name="coinname"
          id={id}
        />
      </FormGroup>
      <FormGroup className={elements.inputs}>
        <Input
          
          disabled
          type="text"
          name="amount"
          id={`${coinname}${amount}`}
          value={amount}
        />
      </FormGroup>
      <FormGroup  className={elements.inputs}>
        <Input
          disabled
         
          type="text"
          name="converted"
          id={`${coinname}${converted}`}
          value={converted}
        />
      </FormGroup>
      <Button
        
        onClick={() => deleteCoin(id, username)}
        className={`${elements.inputs} bg-danger`}>
        Delete
      </Button>
    </div>
  );
};
export default CartElement;
