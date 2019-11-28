import React, {Component} from 'react';
import './courseCategoryId.scss'
import Navbar from '../../components/navbar';
import CourseDeck from '../../components/courseDeck/courseDeck';
import Footer from '../../components/footer';
import { Container, Row, Col, Card, Tabs, Tab, CardDeck, Badge, Button, CardGroup } from 'react-bootstrap';
import { getListRequest } from '../../services/config/request'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CourseCard from '../../components/courseCard';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as coursesActions from "../../store/courses/actions";
export default class courseCategoryId extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading : false,
          coursesList : []
        };
    }

    async fetchCourses() {
      let courses = await getListRequest('/courses')
      this.setState({...this.state, coursesList: courses});
    }

    async componentDidMount () {
      this.fetchCourses()
    }

    render() {

      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false, 
      };

      const PopularTopicsSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false, 
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        rows: 2,
        slidesPerRow: 2
      };

      return (
        <div>
            <Navbar/>
          <div className="">
            <Container fluid style={{background: 'linear-gradient(-45deg,#EC5252 0%,#6E1A52 100%)'}}>
              <Container>
                <Row className='py-5 text-light'>
                  <Col>
                    <h1>Development Courses</h1>
                  </Col>
                </Row>
              </Container>
            </Container>
            
            <Container className='pt-lg-4 pt-md-3'>
              <h4 className='mb-4'>Course to get you started</h4>
              <Row>
                <Col>

                {/* popular */}
                  <Tabs defaultActiveKey="Popular" id="uncontrolled-tab-example" className='mb-3' >
                    <Tab eventKey="Popular" title="Popular">
                      <CardGroup className='justify-content-between'>
                        { this.state.coursesList.slice(0,5).map( (course, index) => {
                          return (
                            <div key={index}>
                              <CourseCard
                                course={course}
                                index={index}
                              />
                            </div>
                          )
                        }) }
                      </CardGroup>
                    </Tab>
                    <Tab eventKey="Trending" title="Trending">

                    </Tab>
                
                  </Tabs>
                </Col>
              </Row>
              
            </Container>
            
            <Container className='mt-5'>
              <Row>
                <Col>
                  <h4>Featured</h4>
                </Col>
              </Row>
              <Slider {...settings}>
                <div>
                  <Card className='p-3'>
                    <Row>
                      <Col md={5}>
                        <Card.Img variant="left" src="https://picsum.photos/420/236" />
                      </Col>
                      <Col md={7}>
                        <Row>
                          <Col md={11} className='mb-2'>
                            <h5 className='mb-0'>Javascrpt for Beginners</h5>
                            <small>Last Update 3 Years ago</small>
                          </Col>
                          <Col md={1}>
                            @
                          </Col>
                        </Row>
                        <Row>
                          <Col md={11}>
                            <small >
                              <Badge variant="danger">HOT & NEW </Badge> 
                              12 hours 76 lectures Intermediate Level
                            </small>
                            <h5 className='my-3'>
                              Modern JavaScript from the beginning - all the way the way up to JS expert level! THE must-have JavaScript resource. | By Academind by Maximilian Schwarzmüller and 1 other
                            </h5>

                            <Button variant='info'>Explore Course</Button>
                          </Col>

                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
              </Slider>

            </Container>

            <Container className='mt-5'>
              <Row>
                <Col>
                  <h4>Popular Topics</h4>
                </Col>
              </Row>
              <Slider {...PopularTopicsSettings}>
                { ['React','JavaScript','Python','Web Dev','Unity','Angular', 'node.js','Php','swift',
                'SQL','Css','Docker','iOS','Flutter','Native','Kotlin'].map( (topic, index) => {
                  return (
                    <div key={index}>
                      <Card className='p-3 mx-2 my-1'>
                        <Card.Title>
                          {topic}
                        </Card.Title>
                      </Card>
                    </div>
                  )
                })}
              </Slider>
            </Container>

            <Container className='my-5'>
              <Row>
                <Col>
                  <h4>All Development Courses</h4>
                </Col>
              </Row>
                { ['React','JavaScript','Python','Web Dev','Unity','Angular', 'node.js','Php','swift',
                'SQL','Css','Docker','iOS','Flutter','Native','Kotlin'].map( (topic, index) => {
                  return (
                    <div key={index}>
                      <Card className='p-3 my-2'>
                        <Row>
                          <Col md={5}>
                            <Card.Img variant="left" src="https://picsum.photos/320/136" style={{width: '100%'}} />
                          </Col>
                          <Col md={7}>
                            <Row>
                              <Col md={11} className='mb-2'>
                                <h5 className='mb-0'>Javascrpt for Beginners</h5>
                                <small>Last Update 3 Years ago</small>
                              </Col>
                              <Col md={1}>
                                @
                              </Col>
                            </Row>
                            <Row>
                              <Col md={11}>
                                <small >
                                  <Badge variant="danger">HOT & NEW </Badge> 
                                  12 hours 76 lectures Intermediate Level
                                </small>
                                <h5 className='my-3'>
                                  Modern JavaScript from the beginning - all the way the way up to JS expert level! THE must-have JavaScript resource. | By Academind by Maximilian Schwarzmüller and 1 other
                                </h5>

                                <Button variant='info'>Explore Course</Button>
                              </Col>

                            </Row>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  )
                })}
            </Container>




            <Footer></Footer>
          </div>
        </div>
      )
    }
  }
// export default connect(
//     ({ courses }) => ({ ...courses }),
//     dispatch => bindActionCreators({ ...coursesActions }, dispatch)
//   )( courses );