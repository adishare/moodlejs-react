import React, {Component} from 'react';
import './navbar.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as navbarActions from "../../store/navbar/actions";
export default class navbar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-navbar">Hello! component navbar</div>;
    }
  }
// export default connect(
//     ({ navbar }) => ({ ...navbar }),
//     dispatch => bindActionCreators({ ...navbarActions }, dispatch)
//   )( navbar );