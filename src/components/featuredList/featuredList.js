import React, {Component} from 'react';
import './featuredList.scss'
import { Container, Row, Col, Tabs, Tab, Card, CardDeck } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as featuredListActions from "../../store/featuredList/actions";
export default class featuredList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
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
                <Slider {...carouselsettings} className=''>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                  </Slider>
                </Tab>


                <Tab eventKey="Design" title="Design">
                  <Slider {...carouselsettings} className=''>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                    <div>
                      <Card className='mr-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className='p-3'>
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
                    </div>
                  </Slider>
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