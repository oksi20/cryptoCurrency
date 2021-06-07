import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import mod from "./register.module.css"
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

const Register=()=>{
  const history=useHistory()
  const [modal, setModal] = useState(false);

  useEffect(()=>{
    handleToggle() 
  }, [])

  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
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
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);





return(
<div>
      
      <Modal isOpen={modal} >
        <ModalHeader toggle={handleToggleandRedirect} className={mod['text']}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="username" className={mod['text']}>Userame</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                className="mb-3"
                onChange={handleChangeName}
              />

              <Label for="email" className={mod['text']}>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={handleChangeEmail}
              />

              <Label for="password" className={mod['text']}> Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={handleChangePassword}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
)
}
export default Register;
