import React, {Component} from 'react';
import './login.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
import { Container, Card } from "react-bootstrap";
import LoginForm from '../../components/loginForm'
import blurwall from "../../assets/blurwall.jpg";


export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    render() {
      const bgstyle = {
        background : `url(${blurwall}) no-repeat center center fixed`, 
        backgroundSize: 'cover',
        position: 'fixed',
        minHeight: '100%',
        minWidth: '100%'
      }

      return (
        <Container fluid className='h-100' style={bgstyle}>
          <div className='d-flex justify-content-center h-100'>
            <Card className='my-auto'>
              <Card.Header className='text-center bg-light'>
                Login
              </Card.Header>
              <Card.Body>
                <LoginForm></LoginForm>
              </Card.Body>
            </Card>
          </div>
        </Container>
      )
    }
  }
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );