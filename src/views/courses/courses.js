import React, {Component} from 'react';
import './courses.scss'
import Navbar from '../../components/navbar';
import CourseDeck from '../../components/courseDeck/courseDeck';
import Footer from '../../components/footer';
import { Container, Row, Col, Card, Tabs, Tab, CardDeck } from 'react-bootstrap';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as coursesActions from "../../store/courses/actions";
export default class courses extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <div>
          <div className="">
            <Navbar/>
            <Container className='pt-lg-4 pt-md-3'>
              <h4 className='mb-4'>Course to get you started</h4>
              <Row>
                <Col>
                  <Tabs defaultActiveKey="Popular" id="uncontrolled-tab-example" className='mb-3' >
                    <Tab eventKey="Popular" title="Popular">
                      <CardDeck>
                        <Card>
                          <Card.Img variant="top" src="holder.js/100px160" />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src="holder.js/100px160" />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                              content.{' '}
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src="holder.js/100px160" />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This card has even longer content than the first to
                              show that equal height action.
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </Card.Footer>
                        </Card>
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