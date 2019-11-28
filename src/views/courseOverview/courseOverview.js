import React, {Component} from 'react';
import './courseOverview.scss'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Container, Row, Col, Card, Accordion, ListGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserCheck, faStarHalfAlt, faStar, faCheck} from '@fortawesome/free-solid-svg-icons'
import { getRequest } from '../../services/config/request'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseOverviewActions from "../../store/courseOverview/actions";
export default class courseOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          course : {}
        };
    }

    async fetchCourse(id) {
      let course = await getRequest('/courses/'+id)
      this.setState({
        ...this.state,
        course : course
      });
    }

    componentDidMount () {
      console.log(this.props);
      const { courseId } = this.props.match.params 
      const { course } = this.props.location.state
      
      if(course) {
        this.setState({
          ...this.state,
          course : course
        })
      }
      else {
        this.fetchCourse(courseId)
      }

    }

    render() {

      let course = this.state.course

      return (
        <div className="view-course-view">
          <Navbar></Navbar>
          <Container fluid style={{background : '#29303B'}}>
            <Container className='d-flex h-100 text-light py-5'>
              <Row className='my-auto'>
                <Col lg={8}>
                  <h1>
                    {course.title}
                  </h1>
                  <h5>
                    {course.subtitle}
                  </h5>
                  <p>
                    <span className='text-warning mr-2'> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStarHalfAlt} />   
                    </span>
                    <span>
                      4.7 (3,613 ratings)
                    </span>
                    <span className='mx-3'>
                      <FontAwesomeIcon icon={faUserCheck} />  32,748 students enrolled
                    </span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>

          <Container className='py-4'>
            <Row>
              <Col lg={8}>
                <Card bg='light' className=''>
                  <Card.Body className=''>
                    <div className=''>

                      <Card.Title>What you'll learn</Card.Title>
                      <Row className='text-secondary'>

                        {course.studentWillLearn && course.studentWillLearn.map((item,index) => {
                          return (
                            <Col md={6} key={index}>
                              <Row>
                                <Col md={1}>
                                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                </Col>
                                <Col md={11}>
                                  {item}
                                </Col>
                              </Row>
                            </Col>
                          )
                        })}

                        
                        
                      </Row>
                     
                    </div>
                  </Card.Body>
                </Card>

                

              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={8}>
              <div className='my-4'>
                  <div className='mb-1'>
                    <Accordion  defaultActiveKey="0">
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Introduction
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{transition: 'all .25s ease-in-out'}}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item >Vestibulum at eros</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className='mb-1'>
                    <Accordion>
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Introduction
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{transition: 'all .25s ease-in-out'}}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item >Vestibulum at eros</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className='mb-1'>
                    <Accordion>
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Introduction
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{transition: 'all .25s ease-in-out'}}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item >Vestibulum at eros</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Container>


          <Container>
            <Row>
              <Col md={8} className='p-3'>
                <h4 >
                  Requirements
                </h4>
                <div >
                  <ul >
                    {course.requirements && course.requirements.map((item,index) => {
                      return (
                        <li key={index} >{item}</li>
                      )
                    })}
                  </ul>
                </div>


                <h4>
                Description
                </h4>
                <div>
                <div dangerouslySetInnerHTML={{ __html: course.description }} />
                </div>
              </Col>
            </Row>
          </Container>

          <Container className='py-3'>
            <Row>
              <Col md={8}>
                <Card bg='light' className='w-100 p-4' >
                  <Card.Body>
                    <Row>
                      <Col md={1}>
                        <h1>@</h1>
                      </Col>
                      <Col md={11}>
                        <strong>Ashfaq Shimer </strong> ( 30 courses, 25 reviews )
                        <br/>
                        <span className='text-warning mr-2'> 
                          <FontAwesomeIcon icon={faStar} /> 
                          <FontAwesomeIcon icon={faStar} /> 
                          <FontAwesomeIcon icon={faStar} /> 
                          <FontAwesomeIcon icon={faStar} /> 
                          <FontAwesomeIcon icon={faStarHalfAlt} />   
                        </span>
                        <br/>
                        4 months ago
                      </Col>
                    </Row>
                    <Card.Text className='py-3'>
                    This course is packed with a lot of learning material. Just like with the ZTM course, Andrei delivers the material that is important and practical for working as a full stack developer. There's really no other course on Udemy that covers these topics at the moment. UPDATE at 50%: I've learned so much already. Good organization of content and a nice mix of theory and exercises.
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>
            </Row>
          </Container>

          <Footer></Footer>
        </div>
      )
    }
  }
// export default connect(
//     ({ courseOverview }) => ({ ...courseOverview }),
//     dispatch => bindActionCreators({ ...courseOverviewActions }, dispatch)
//   )( courseOverview );