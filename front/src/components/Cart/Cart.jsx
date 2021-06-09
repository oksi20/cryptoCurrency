import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap'; 
import CartElement from './CartElement';
import cartelem from './cart.module.css';
import {
  fetchdeleteFromCart,
  fetchDownloadCart,
  fetchPurchaseCoins,
} from '../../redux/reducer/cartReducer';
import { useHistory } from 'react-router-dom';

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.cart);

  let username = useSelector((state) => state.user.user.username);

  const deleteCoin = (id, username) => {
    dispatch(fetchdeleteFromCart({ id, username }));
  };
  const purchaseCoins = (e) => {
    e.preventDefault();
    dispatch(fetchPurchaseCoins({ username }));
    history.push('/');
  };

  return (
    <>
      {cart.length ? (
        <Form
          onSubmit={purchaseCoins}
          className={cartelem.backColor}
        >
          <h3 className={cartelem.title}><i class="fas fa-shopping-cart" style={{padding:10}}></i>Your Shopping Cart</h3>
          <div className={`d-flex justify-content-center align-items-center`}>
      <FormGroup className={cartelem.lab}>
        <Input
         
          disabled
          value="Coin Name"
          type="text"
          name="coinname"
          
        />
      </FormGroup>
      <FormGroup className={cartelem.lab}>
        <Input
          
          disabled
          type="text"
          name="amount"
         
          value="Invested Money"
        />
      </FormGroup>
      <FormGroup className={cartelem.lab}>
        <Input
          disabled
         
          type="text"
          name="converted"
          value="Coin Quantity"
        />
      </FormGroup>
      <Button className={`${cartelem.lab} bg-danger `} disabled type="button"
      >
        Delete
      </Button>
    </div>
          {cart.map((el, indx) => (
            <CartElement
              key={indx}
              amount={el.amount}
              converted={el.converted}
              coinname={el.coinname}
              id={el._id}
              username={username}
              deleteCoin={deleteCoin}
            />
          ))}

          <Button className={`ml-5 ${cartelem.purchase} bg-success`}>Purchase <i class="fas fa-money-check-alt"></i></Button>
        </Form>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Cart;
