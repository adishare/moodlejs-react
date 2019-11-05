import React, {Component} from 'react';
import './courses.scss'
import Navbar from '../../components/navbar';
import CourseDeck from '../../components/courseDeck/courseDeck';
import Footer from '../../components/footer';
import { Container, Row, Col, Card, Tabs, Tab, CardDeck } from 'react-bootstrap';
import { getListRequest } from '../../services/config/request'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as coursesActions from "../../store/courses/actions";
export default class courses extends Component {
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
      return (
        <div>
          <div className="">
            <Navbar/>
            <Container className='pt-lg-4 pt-md-3'>
              <h4 className='mb-4'>Course to get you started</h4>
              <Row>
                <Col>

                {/* popular */}
                  <Tabs defaultActiveKey="Popular" id="uncontrolled-tab-example" className='mb-3' >
                    <Tab eventKey="Popular" title="Popular">
                      <CardDeck>
                        { this.state.coursesList.slice(0,5).map( (course, index) => {
                          return (
                            <Card key={index}>
                              <Card.Img variant="top" src="https://picsum.photos/60/40" />
                              <Card.Body>
                                <Card.Title>{ course.fullname }</Card.Title>
                                <Card.Text>
                                  { course.summary }
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                              </Card.Footer>
                            </Card>

                          )
                        }) }
                      </CardDeck>
                    </Tab>
                    <Tab eventKey="Trending" title="Trending">

                    </Tab>
                
                  </Tabs>
                </Col>
              </Row>
              
            </Container>
            <CourseDeck></CourseDeck>
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