import React, {Component} from 'react';
import './footer.scss'
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as footerActions from "../../store/footer/actions";
export default class footer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <div className='pt-4 pb-4' style={{color: '#007791'}}>
          <div className='py-4' style={{borderBottom: '1px solid #e8e9eb'}}>

            <Container>
              <Row >
                <Col md={3} sm={2}>
                  <h6>KJI For Business</h6>
                  <h6>KJI For Business</h6>
                  <h6>KJI For Business</h6>
                  <h6>KJI For Business</h6>
                </Col>
                <Col md={3} sm={2}>
                  <p>Lorem Ipsum</p>
                  <p>Dolor Sit amet</p>
                </Col>
                <Col md={3} sm={2}>
                  <p>Hakuna Matata</p>
                  <p>Let it go</p>
                </Col>
                <Col md={3} sm={2}>
                  <Button variant='info'>
                    Language
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className='pt-4'>
            <Row >
              <Col md={4} sm={2}>
                <h5>Kerjaindonesia.id</h5>
              </Col>
              <Col md={4} sm={2}>

              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }
// export default connect(
//     ({ footer }) => ({ ...footer }),
//     dispatch => bindActionCreators({ ...footerActions }, dispatch)
//   )( footer );