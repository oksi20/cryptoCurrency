import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import mod from"./login.module.css"
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

const Login=()=>{
  const history=useHistory()
  const [modal, setModal] = useState(false);

  useEffect(()=>{
    handleToggle() 
  }, [])

  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const handleToggle=()=>{
    setModal(!modal);
  }
  const handleToggleandRedirect=()=>{
    setModal(!modal);
    history.push('/');
  }
  let msg=false;
  const handleOnSubmit=()=>{

  }
  const handleChangeName = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);





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
