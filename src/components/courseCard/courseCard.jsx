import React, {Component} from 'react';
import './courseCard.scss'
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faStar, faUserCheck} from '@fortawesome/free-solid-svg-icons'


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseCardActions from "../../store/courseCard/actions";

export default class courseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentWillMount() {
        
    }
    
    render() {
        const { course, index, hover=true, maxWidth=300 } = this.props

        return (
            <div className="component-course-card" style={{minWidth: 240, maxWidth: maxWidth}}>
                <Link 
                    style={{textDecoration: 'none', color: '#29303b'}} 
                    className='pr-2' 
                    to={{
                        pathname: `/course/overview/${course._id}`,
                        state: {
                          course: this.props.course
                        }
                    }}
                > 
                    <Card className='w-100 mb-4 box-hover' style={{
                        cursor : hover===true ? 'pointer' : 'normal'
                        
                    }}>
                        {
                            course.image 
                            ? <Card.Img variant="top" src={course.image} /> 
                            : <Card.Img variant="top" src={`https://picsum.photos/250/`+(140+Number(index))} />
                        }
                        
                        <Card.Body className='p-3'>
                            <Card.Title className='h6'>{course.title}</Card.Title>
                            <Card.Text>
                                <small>{course.author && (course.author.firstname +' '+course.author.lastname)}</small>
                            </Card.Text>
                            <p>
                                <span className='text-warning mr-2'> 
                                <FontAwesomeIcon size='sm' icon={faStar} /> 
                                <FontAwesomeIcon size='sm' icon={faStar} /> 
                                <FontAwesomeIcon size='sm' icon={faStar} /> 
                                <FontAwesomeIcon size='sm' icon={faStar} /> 
                                <FontAwesomeIcon size='sm' icon={faStarHalfAlt} />   
                                </span>
                                <span>
                                <small>4.7 (3,613)</small> 
                                </span>
                            </p>
                            <div className='text-right'>
                                <h5>Rp280,000</h5>
                            </div>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                </Link>
            </div>
        );
    }
}
// export default connect(
//     ({ courseCard }) => ({ ...courseCard }),
//     dispatch => bindActionCreators({ ...courseCardActions }, dispatch)
//   )( courseCard );