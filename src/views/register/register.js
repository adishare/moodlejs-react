import React, {Component} from 'react';
import './register.scss'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as registerActions from "../../store/register/actions";
export default class register extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex">
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin">
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="firstName">
                          <Form.Control type="firstname" placeholder="First Name" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="lastName">
                          <Form.Control type="lastname" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type='password' placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                      <Form.Control type='password' placeholder="Confirm Password" />
                    </Form.Group>


                    <Link to="/home">
                      <Button block variant="primary">
                        Register
                      </Button>
                    </Link>
                    <Link to="/login" className="d-block text-center mt-2 small">
                        Sign In
                    </Link>
                    <hr className="my-4" />
                    <Button block className=' shadow-sm text-left my-3'> <FontAwesomeIcon icon={faFacebookF} className='mr-3' /> Continue With Facebook </Button>
                    <Button block variant='danger' className=' shadow-sm text-left mb-4'> <FontAwesomeIcon icon={faGoogle} className='mr-3' /> Continue With Google </Button>

                  </form>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

