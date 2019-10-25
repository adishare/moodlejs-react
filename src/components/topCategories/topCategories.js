import React, {Component} from 'react';
import './topCategories.scss'
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as topCategoriesActions from "../../store/topCategories/actions";
export default class topCategories extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {

      const styles = {
        banner1: {
            // background: `url(${image})`,
            backgroundColor: '#29303b',
            minHeight: 400,
            marginBottom: 0,
            color: 'white',
        }
      };

      return (
        <div style={styles.banner1}>
          <Container className='py-md-5'>
            <h3 className='mb-4'>BG, world!</h3>
            <Row>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='text-dark mb-4' bg='light'>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
   
        </div>
      )
    }
  }
// export default connect(
//     ({ topCategories }) => ({ ...topCategories }),
//     dispatch => bindActionCreators({ ...topCategoriesActions }, dispatch)
//   )( topCategories );