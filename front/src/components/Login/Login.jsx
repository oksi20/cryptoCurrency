import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import mod from"./login.module.css"
import {fetchLoginUser} from '../../redux/reducer/authReducer'
import {fetchDownloadCart} from '../../redux/reducer/cartReducer'

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

const Login=()=>{
  const history=useHistory()
  const dispatch=useDispatch();
  const [modal, setModal] = useState(true);
  const user=useSelector(state=>state.user.user);
  const error=useSelector(state=>state.user.error);
  console.log("errorState", error);
 

  useEffect(()=>{
    setMsg(error);
if (user.username){
  // dispatch(fetchDownloadCart({username}))
  handleToggleandRedirect()
}
  }, [error, user])

  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const [msg, setMsg]=useState(null);
  

  const handleToggle=()=>{
    setModal(!modal);
  }
  const handleToggleandRedirect=()=>{
    setModal(!modal);
    history.push('/');
  }
  
  const handleOnSubmit=(e)=>{
    e.preventDefault();
dispatch(fetchLoginUser({username, password}))

// setMsg(error);

  }
  const handleChangeName = (e) => {
    setUsername(e.target.value);
  setMsg(null);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  setMsg(null);
  }


return(
<div>    
      <Modal isOpen={modal} >
        <ModalHeader toggle={handleToggleandRedirect} className={mod['text']}>Login</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label className={mod['text']} for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                className="mb-3"
                onChange={handleChangeName}
              />

              <Label className={mod['text']} for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={handleChangePassword}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
)
}
export default Login;
