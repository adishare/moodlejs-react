import React, {Component} from 'react';
import './topCategories.scss'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getListRequest } from '../../services/config/request'
import { Link } from "react-router-dom";


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as topCategoriesActions from "../../store/topCategories/actions";

export default class topCategories extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading : false,
        caategoryList : [],
      };
    }

    async componentDidMount() {
      this.fetchCategories()
    }

    async fetchCategories() {
      let courseCategories = await getListRequest('/courseCategories')
      this.setState({
        ...this.state,
        caategoryList : courseCategories
      });
    }

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
            <h3 className='mb-4'>Top Categories</h3>
            <Row>
              { this.state.caategoryList.map( (category, index) => {
                return (
                  <Col key={index} lg={3} md={4} sm={6} xs={12}>
                    <Link style={{textDecoration: 'none', color: '#29303b'}} to={`/courseCategory/${category.id}`}>
                      <Card className='text-dark mb-4 box-hover' bg='light' style={{
                          cursor : 'pointer'}}>
                        <Card.Body>
                          <Card.Title>{category.name}</Card.Title>
                          <Card.Text>
                          { category.description }
                          </Card.Text>
                        </Card.Body>
                      </Card>

                    </Link>
                  </Col>
                )})
              }
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