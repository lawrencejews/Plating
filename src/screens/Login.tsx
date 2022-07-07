import { SyntheticEvent, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import loginRedux from '../actions/userAction';
import FormContainer from '../components/FormContainer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { UserState } from '../IRestuarant';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>((state: RootState) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo != undefined && userInfo.firstName) {
      navigate("/Home");
    }
  } , [userInfo, navigate])
  
  

  const submitHandler = async(e: SyntheticEvent) => {
    e.preventDefault()

    // Reference dispatch
    dispatch(loginRedux(email, password))

    // navigate("/Home");
    console.log('submitted');
  }

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="my-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-3">
          Submit
        </Button>
      </Form>
    </FormContainer>

  );
}
export default Login;
