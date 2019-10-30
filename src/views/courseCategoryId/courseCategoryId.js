import React, {Component} from 'react';
import './courseCategoryId.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseCategoryIdActions from "../../store/courseCategoryId/actions";
export default class courseCategoryId extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="view-course-category-id">Hello! component courseCategoryId</div>;
    }
  }
// export default connect(
//     ({ courseCategoryId }) => ({ ...courseCategoryId }),
//     dispatch => bindActionCreators({ ...courseCategoryIdActions }, dispatch)
//   )( courseCategoryId );