import React, {Component} from 'react';
import './topCategories.scss'
import { Jumbotron, Container, Button, Row, Col, Card } from 'react-bootstrap';
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
            <h3>BG, world!</h3>
            <Row>
              <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='d-inline'>
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
              </Col>
            </Row>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>
   
        </div>
      )
    }
  }
// export default connect(
//     ({ topCategories }) => ({ ...topCategories }),
//     dispatch => bindActionCreators({ ...topCategoriesActions }, dispatch)
//   )( topCategories );