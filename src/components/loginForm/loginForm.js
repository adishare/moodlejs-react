import React, {Component} from 'react';
import './loginForm.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginFormActions from "../../store/loginForm/actions";
import { Form, Button } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default class loginForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <div className='d-flex justify-content-center p-2'>
          <form style={{minWidth : 350}}>
            <Button block className='shadow-sm text-left my-3'> <FontAwesomeIcon icon={faFacebookF} className='mr-3' /> Continue With Facebook </Button>
            <Button block variant='danger' className='shadow-sm text-left mb-4'> <FontAwesomeIcon icon={faGoogle} className='mr-3' /> Continue With Google </Button>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/home">
              <Button block variant="primary">
                Login
              </Button>
            </Link>
            <div className="my-3 text-center">
              <span>or </span>
              <a href="#" className="">Forgot Password</a>
            </div>
            <div className="mt-4 text-center">
              <span>Don't have an account? </span>
              <a href="#" className="">Sign Up</a>
            </div>
            
          </form>
        </div>
      )
    }
  }
// export default connect(
//     ({ loginForm }) => ({ ...loginForm }),
//     dispatch => bindActionCreators({ ...loginFormActions }, dispatch)
//   )( loginForm );