import React, {Component} from 'react';
// import './home.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeActions from "../../store/home/actions";
import Navbar from '../../components/navbar'
import MainBanner from "../../components/mainBanner";
import ListBanner from "../../components/listBanner";

import FeaturedList from '../../components/featuredList/featuredList';
import CourseDeck from '../../components/courseDeck/courseDeck';
import TopCategories from '../../components/topCategories/topCategories';
import Testimonials from '../../components/testimonials';
import Footer from '../../components/footer';

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
            <Testimonials></Testimonials>
            <Footer></Footer>
          </div>
        );
    }
  }
// export default connect(
//     ({ home }) => ({ ...home }),
//     dispatch => bindActionCreators({ ...homeActions }, dispatch)
//   )( home );