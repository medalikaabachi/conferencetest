
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal'
import{useSelector,useDispatch} from "react-redux";
import { logoutUser } from '../redux/actions/userAction';
import {useNavigate} from "react-router-dom"
import "../styles.css"

function AppNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((state)=>state.authReducer.user)
    const logoutt=()=>{
      dispatch(logoutUser())
      navigate("/")

    }
    const conf=()=>{
      navigate("/ConferanceList")
    }
    const article=()=>{
      navigate("/ArticleList")
    }
  
    const authLinks = (
      <div className='navbar-elem'>

          <NavItem>
            <Link to="/dashboard">
              <span className="navbar-text mr-3">
                <strong>Dashboard</strong>
              </span>
            </Link>
          </NavItem>


          <NavLink href="#" onClick={logoutt}>
            Logout
          </NavLink>

          <NavLink href="#" onClick={conf}>
            Conference
          </NavLink>

          <NavLink href="#" onClick={article}>
            Article
          </NavLink>
          </div>

      );
    
      const guestLinks = (
        <>
          <NavItem>
        <RegisterModal/>
          </NavItem>
          <NavItem>
        <LoginModal/>
          </NavItem>
          </>
      );
  return ( 



    <div>
    <Navbar color="white" light expand="sm" className="mb-5"  >
      <Container>
        <NavbarBrand style={{display:"flex",justifyContent:"center"}} href="/">Home</NavbarBrand>
        <NavbarToggler  onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

            {user?authLinks:guestLinks}

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default AppNav