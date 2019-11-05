import React, {Component} from 'react';
import './courseDeck.scss'
import { Container, Card, CardDeck, Row, Col } from 'react-bootstrap';
import { getListRequest } from '../../services/config/request'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseDeckActions from "../../store/courseDeck/actions";

export default class courseDeck extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading : false,
        courseList : [],
      };
    }

    async componentDidMount() {
      this.fetchCourses('business')
    }

    async fetchCourses() {
      let courses = await getListRequest('/courses')
      this.setState({
        ...this.state,
        courseList : courses
      });
    }

    render() {
      return (
        <div>
          <Container className='pt-lg-4 pt-md-3 py-5 px-4'>
          <h4>Lorem Ipsum</h4>
            <Row>
              <CardDeck>
                { this.state.courseList.map( (course, index) => {
                  return (
                    <Col key={index} lg={3} md={4} sm={6}>
                      <Card className='mr-3 mb-4'>
                        <Card.Img variant="top" src={`https://picsum.photos/250/14`+index} />
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
                    </Col>
                  )})
                }
              </CardDeck>
            </Row>
          </Container>
        </div>
      )
    }
  }
// export default connect(
//     ({ courseDeck }) => ({ ...courseDeck }),
//     dispatch => bindActionCreators({ ...courseDeckActions }, dispatch)
//   )( courseDeck );