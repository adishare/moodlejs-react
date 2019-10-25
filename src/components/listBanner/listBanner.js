import React, {Component} from 'react';
import './listBanner.scss'
import { Row, Col, Container } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faBookOpen, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as listBannerActions from "../../store/listBanner/actions";
export default class listBanner extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {

    const style = {
      background: 'linear-gradient(-45deg,#EC5252 0%,#6E1A52 100%)'
    }

    return (
      <div style={style}>
        <Container>
          <Row className='pt-4 pb-2 text-light'>
            <Col>
              <Row>
                <Col md={4} className='d-flex justify-content-end'><h1> <FontAwesomeIcon icon={faHome}  /></h1></Col>
                <Col md={8}>
                  <h5 className='mb-0'>100,000 online courses</h5>
                  <p>Explore a variety of fresh topics</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col md={4} className='d-flex justify-content-end'><h1> <FontAwesomeIcon icon={faBookOpen}  /></h1></Col>
                <Col md={8}>
                  <h5 className='mb-0'>Expert instruction</h5>
                  <p>Find the right instructor for you</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col md={4} className='d-flex justify-content-end'><h1> <FontAwesomeIcon icon={faCalendarAlt}  /></h1></Col>
                <Col md={8}>
                  <h5 className='mb-0'>Lifetime access</h5>
                  <p>Learn on your schedule</p>
                </Col>
              </Row>
            </Col>
           
          </Row>
        </Container>
      </div>
    )
  }
}
// export default connect(
//     ({ listBanner }) => ({ ...listBanner }),
//     dispatch => bindActionCreators({ ...listBannerActions }, dispatch)
//   )( listBanner );