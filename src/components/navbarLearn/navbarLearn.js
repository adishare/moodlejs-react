import React, {Component} from 'react';
import './navbarLearn.scss'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, ButtonToolbar}  from 'react-bootstrap'
import NavLogo from '../../assets/logokji.png'
import { Link } from 'react-router-dom'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as navbarActions from "../../store/navbar/actions";
export default class navbarLearn extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {

      const style = {
        boxShadow : "0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)",
        zIndex: 10,
        background : '#29303b',
        color : 'white'
      }

      return (
        <Navbar variant="dark" expand="lg" style={style}>
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={NavLogo}
                width="65"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-2 ml-4 border-left pl-4">
                {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <span>How to Improve Your Video Quality</span>
              </Nav>
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{minWidth:300}} />
                <Button variant="outline-success">Search</Button>
              </Form> */}
              {/* <ButtonToolbar className="ml-auto d-none d-xl-block">
                <Button variant="light">Terms And Enterprises</Button>
              </ButtonToolbar> */}
              <ButtonToolbar className="ml-auto ">
                <Nav className="mx-3">
                  <NavDropdown title="Your Progress" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Link to="/login">
                  <Button variant="outline-light">Share</Button>
                </Link>
              </ButtonToolbar>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    }
  }
// export default connect(
//     ({ navbar }) => ({ ...navbar }),
//     dispatch => bindActionCreators({ ...navbarActions }, dispatch)
//   )( navbar );