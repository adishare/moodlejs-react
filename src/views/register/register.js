import React, {Component} from 'react';
import './register.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as registerActions from "../../store/register/actions";
export default class register extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="view-register">Hello! component register</div>;
    }
  }
// export default connect(
//     ({ register }) => ({ ...register }),
//     dispatch => bindActionCreators({ ...registerActions }, dispatch)
//   )( register );