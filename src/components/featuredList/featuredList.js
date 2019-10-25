import React, {Component} from 'react';
import './featuredList.scss'
import { Container, Row, Col, Tabs, Tab, Card, CardDeck } from 'react-bootstrap';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as featuredListActions from "../../store/featuredList/actions";
export default class featuredList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <Container className='pt-lg-4 pt-md-3'>
          <Row>
            <Col md={3}>
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
            <Col md={9}>
              <Tabs defaultActiveKey="Business" id="uncontrolled-tab-example" className='mb-3' >
                <Tab eventKey="Business" title="Business">
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
                <Tab eventKey="Design" title="Design">

                </Tab>
                <Tab eventKey="Development" title="Development">

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