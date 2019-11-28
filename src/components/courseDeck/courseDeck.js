import React, {Component} from 'react';
import './courseDeck.scss'
import { Container, Card, CardDeck, Row, Col, CardGroup } from 'react-bootstrap';
import { getListRequest } from '../../services/config/request'
import CourseCard from '../courseCard'

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
              <CardGroup className='justify-content-between w-100'>
                { this.state.courseList.slice(0,5).map( (course, index) => {
                  return (
                    // <Col key={index} lg={3} md={4} sm={6}>
                      <CourseCard
                        key={index}
                        course={course}
                        index={index}
                        maxWidth={240}
                      ></CourseCard>
                    // </Col>
                  )})
                }
              </CardGroup>
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