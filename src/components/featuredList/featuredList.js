import React, {Component} from 'react';
import './featuredList.scss'
import { Container, Row, Col, Tabs, Tab, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getListRequest } from '../../services/config/request'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as featuredListActions from "../../store/featuredList/actions";

export default class featuredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading : false,
          activeTab : 'home',
          businessCourseList : [],
          designCourseList : [],
          developmentCourseList : []
        };
    }

    async componentDidMount() {
      this.fetchCourses('business')
    }

    async fetchCourses(listState) {
      let courses = await getListRequest('/courses')
      this.setState({
        ...this.state,
        ...(listState == 'business' ? { businessCourseList: courses } 
          : listState == 'Design' ? { designCourseList: courses} 
          : { developmentCourseList: courses}
        )
      });
    }

    handleSelect(key) {
      this.setState({activeTab : key, ...this.state})
      this.fetchCourses(key)
  }

    render() {

      const carouselsettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return (
        <Container className='pt-lg-4 pt-md-3'>

          <Row>

            {/* iklan */}
            <Col md={3}>
              <Card style={{ width: '18rem' }} bg='light' className='h-100'>
                <Card.Body className='d-flex h-100 text-center'>
                  <div className='my-auto'>

                  <Card.Title>The world’s largest selection of courses</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Choose from over 100,000 online video courses with new additions published every month
                  </Card.Subtitle>
                  <Card.Text>                  
                  </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link> */}
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Tabs */}
            <Col md={9}>
              <Tabs 
                className='mb-3' 
                id="controlled-tab-example" 
                activeKey={this.activeTab} 
                onSelect={tab => this.handleSelect(tab)}
              >
                <Tab eventKey="Business" title="Business">
                  <Slider {...carouselsettings} className=''>
                    { this.state.businessCourseList.map( (course, index) => {
                      return (
                        <div key={index}>
                          <Card className='mr-3'>
                            <Card.Img variant="top" src={`https://picsum.photos/200/14`+index} />
                            <Card.Body className='p-3'>
                              <Card.Title>{course.fullname}</Card.Title>
                              <Card.Text>
                                { course.summary }
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                          </Card>
                        </div>
                      )
                    })}
                  </Slider>
                </Tab>

                <Tab eventKey="Design" title="Design">
                  <Slider {...carouselsettings} className=''>
                    { this.state.designCourseList.map( (course, index) => {
                      return (
                        <div key={index}>
                          <Card className='mr-3'>
                            <Card.Img variant="top" src={`https://picsum.photos/200/14`+(index+1)} />
                            <Card.Body className='p-3'>
                              <Card.Title>{course.fullname}</Card.Title>
                              <Card.Text>
                                { course.summary }
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                          </Card>
                        </div>
                      )
                    })}
                  </Slider>
                </Tab>

                <Tab eventKey="Development" title="Development">
                  <Slider {...carouselsettings} className=''>
                    { this.state.developmentCourseList.map( (course, index) => {
                      return (
                        <div key={index}>
                          <Card className='mr-3'>
                            <Card.Img variant="top" src={`https://picsum.photos/200/14`+(index+2)} />
                            <Card.Body className='p-3'>
                              <Card.Title>{course.fullname}</Card.Title>
                              <Card.Text>
                                { course.summary }
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                          </Card>
                        </div>
                      )
                    })}
                  </Slider>
                </Tab>

              </Tabs>
            </Col>
          </Row>
          
        </Container>
      )
    }
  }
// export default connect(
//     ({ featuredList }) => ({ ...featuredList }),
//     dispatch => bindActionCreators({ ...featuredListActions }, dispatch)
//   )( featuredList );