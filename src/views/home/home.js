import React, {Component} from 'react';
// import './home.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeActions from "../../store/home/actions";
import Navbar from '../../components/navbar'

import {Container, Jumbotron, Button, Row, Col, Card, CardDeck, Tabs, Tab} from 'react-bootstrap'

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
      return (
          <div className="view-home">
            <Navbar/>
            <Container>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
              <Row>
                <Col md={6}>
                  <h1> Lorem ipsum </h1>
                </Col>
                <Col md={6}>
                  <h1> Lorem ipsum </h1>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <h1> Lorem ipsum </h1>
                </Col>
                <Col md={2}>
                  <Button>Go</Button>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                </Col>
                <Col md={8}>
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                      
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={8}>
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
                </Col>
              </Row>
              <Row>
                <h1>Lorem Ipsum</h1>
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
              </Row>
              <Jumbotron>
                <Container>
                  <h1>Fluid jumbotron</h1>
                  <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                  </p>
                </Container>
              </Jumbotron>

            </Container>
            <Container fluid>
              <Jumbotron fluid>
                <Container>
                  <h1>Fluid jumbotron</h1>
                  <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                  </p>
                </Container>
              </Jumbotron>
            </Container>
          </div>
        );
    }
  }
// export default connect(
//     ({ home }) => ({ ...home }),
//     dispatch => bindActionCreators({ ...homeActions }, dispatch)
//   )( home );