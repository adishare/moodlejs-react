import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './mainBanner.scss';
import image from "../../assets/banner1.jpg";
import image2 from "../../assets/banner2.jpg";
import image3 from "../../assets/banner3.jpg";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as mainBannerActions from "../../store/mainBanner/actions";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

export default class mainBanner extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const styles = {
      banner1: {
          backgroundSize: 'cover',
          minHeight: 500,
          marginBottom: 0,
      }
    };

    return (
      <Slider {...settings} className='text-light'>
        <div>
          <Jumbotron fluid className='d-flex h-100' style={{background: `url(${image2})`, ...styles.banner1}}>
            <Container className='my-auto'>
              <Row>
                <Col lg={4}>
                  <h1>Learn on your schedule</h1>
                  <h5 className='my-4'>
                    Study any topic, anytime. Explore thousands of courses 
                    starting at Rp154,000 each.
                  </h5>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
        <div>
          <Jumbotron fluid className='d-flex h-100' style={{background: `url(${image})`, ...styles.banner1}}>
            <Container className='my-auto'>
              <Row>
                <Col lg={4}>
                  <h1>Learn on your schedule</h1>
                  <h5 className='my-4'>
                    Study any topic, anytime. Explore thousands of courses 
                    starting at Rp154,000 each.
                  </h5>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
        <div>
          <Jumbotron fluid className='d-flex h-100' style={{background: `url(${image3})`, ...styles.banner1}}>
            <Container className='my-auto'>
              <Row>
                <Col lg={4}>
                  <h1>Learn on your schedule</h1>
                  <h5 className='my-4'>
                    Study any topic, anytime. Explore thousands of courses 
                    starting at Rp154,000 each.
                  </h5>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </Slider>
    )
  }
}
// export default connect(
//     ({ mainBanner }) => ({ ...mainBanner }),
//     dispatch => bindActionCreators({ ...mainBannerActions }, dispatch)
//   )( mainBanner );
