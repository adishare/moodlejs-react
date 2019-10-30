import React, {Component} from 'react';
import './notFoundPage.scss'
import blurwall from "../../assets/blurwall.jpg";
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as notFoundPageActions from "../../store/notFoundPage/actions";
export default class notFoundPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
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
              <Card.Header className='text-center bg-light text-danger'>
                Not Found
              </Card.Header>
              <Card.Body className='text-center'>
                <h1>404</h1>
                <h4>Sorry! The page you were looking for could not be found</h4>
                <h6>Please Contact Admin Support</h6>
                <Link to='/home' >
                  <Button variant='info' className='my-4'>
                    Back to Homepage
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Container>
      )
    }
  }
// export default connect(
//     ({ notFoundPage }) => ({ ...notFoundPage }),
//     dispatch => bindActionCreators({ ...notFoundPageActions }, dispatch)
//   )( notFoundPage );