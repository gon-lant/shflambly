 import React, {Component} from 'react';
 import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button} from 'react-bootstrap';
 import Router, {Route, Link, withRouter} from 'react-router-dom';
 import GoogleLogin  from 'react-google-login';

class NavBar extends Component{

  constructor (props, context){
    super(props, context);
  }


  render(){
    const responseGoogle = (response) => {
      console.log(response);
    }
    const NavItemNavigate = () => (
      <Route render={({history})=>(<NavItem onClick={() => {history.push('/cards')}}>Cards</NavItem>
      )} />
      );
    
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to ='/'>Shflambly</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItemNavigate/>
          <NavItem eventKey={2} href="#">Link</NavItem>
          
        </Nav>
        <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
        <Nav pullRight>
          <GoogleLogin clientId="148866500076-osc22giicsts4md77hi10e1emqj7vk6o.apps.googleusercontent.com" 
                        onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                           buttonText="Login with Google"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavBar;