import React, {Component} from 'react';
// import './home.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeActions from "../../store/home/actions";
import Navbar from '../../components/navbar'
import MainBanner from "../../components/mainBanner";
import ListBanner from "../../components/listBanner";

import {Container, Jumbotron, Button, Row, Col, Card, CardDeck, Tabs, Tab} from 'react-bootstrap'
import FeaturedList from '../../components/featuredList/featuredList';
import CourseDeck from '../../components/courseDeck/courseDeck';
import TopCategories from '../../components/topCategories/topCategories';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
      return (
          <div className="view-home">
            <Navbar/>
            <MainBanner></MainBanner>
            <ListBanner></ListBanner>
            <FeaturedList></FeaturedList>
            <CourseDeck></CourseDeck>
            <CourseDeck></CourseDeck>
            <TopCategories></TopCategories>
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