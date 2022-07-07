import { SyntheticEvent } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction';
import { UserState } from '../IRestuarant';
import { RootState } from '../store';

const Header = () => {

  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>((state: RootState) => state.userLogin);
  const {userInfo} = userLogin
  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    dispatch(logout())

  }
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Plating</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {userInfo ? (
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;