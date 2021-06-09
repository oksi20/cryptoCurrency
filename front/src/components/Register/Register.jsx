import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import mod from "./register.module.css"
import {fetchRegisterUser} from '../../redux/reducer/authReducer'
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

const Register=()=>{
  const history=useHistory()
  const dispatch=useDispatch()
 const error=useSelector(state=>state.user.error)
 const regUser=useSelector(state=>state.user.user)
 console.log("regUser", regUser);



  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [modal, setModal] = useState(true);
  const [msg, setMsg]=useState(null)
  const [user, setUser ]=useState({})

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(fetchRegisterUser({username, email, password}))
    }

useEffect(()=>{
  setMsg(error);
  setUser(regUser);
  if (regUser.username){
    handleToggle()
    history.push('/')
  }

}, [error, regUser])

  const handleToggle=()=>{
    setModal(!modal);
  }
  const handleToggleandRedirect=()=>{
    setModal(!modal);
    history.push('/');
  }

    

  const handleChangeName = (e) => {
    setUsername(e.target.value);
    setMsg(null)};
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  
  


return(
<div>
      <Modal isOpen={modal} >
        <ModalHeader toggle={handleToggleandRedirect} className={mod['text']}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg.error}</Alert> : null}
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="username" className={mod['text']}>Userame</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                className="mb-3"
                required
                onChange={handleChangeName}
              />

              <Label for="email" className={mod['text']}>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                required
                onChange={handleChangeEmail}
              />

              <Label for="password" className={mod['text']}> Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                required
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
