 import React, {Component} from 'react';
 import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
 import {Route, Link} from 'react-router-dom';
 import GoogleLogin  from 'react-google-login';
 import UserStore from '../Stores/UserStore';

class NavBar extends Component{

  constructor (props, context){
    super(props, context);
    this.state={};
  }

  componentWillMount() {
    UserStore.on('USER_LOGGED_IN', () =>{
      let userData = UserStore.getUser();
      this.setState(
        {loggedIn: true,
          userData: userData
      });

    });
  }

  render(){
    const responseGoogle = (response) => {
      console.log(response);
    }
    const NavItemNavigate = () => (
      <Route render={({history})=>(<NavItem onClick={() => {history.push('/cards')}}>Cards</NavItem>
      )} />
      ); 
    const NavLoginLink = () => (
      <Route render={({history})=>(<NavItem onClick={() => {history.push('/login')}}>Login</NavItem>
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
          <NavLoginLink/>
          
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