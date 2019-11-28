import React, {Component} from 'react';
import './courseLearn.scss'
import { Container, Col, Row, Accordion, Card, ListGroup, Tabs, Tab } from 'react-bootstrap';
import NavbarLearn from '../../components/navbarLearn'
import ReactPlayer from 'react-player'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseLearnActions from "../../store/courseLearn/actions";
export default class courseLearn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeTab: 'overview'
        };
    }

    handleSelect(key) {
      this.setState({activeTab : key, ...this.state})
    }

    render() {
      
      const styles = {
        sidebar : {
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1,
          backgroundColor: '#fff',
          border: '1px solid #e8e9eb',
          overflowX: 'hidden',
          overflowY: 'auto',
        }
      }

      return (
        <div>
          <NavbarLearn></NavbarLearn>
          <Container fluid>
            <Row>
              <Col className='p-0' lg={9} md={12}>
                <div>
                  <ReactPlayer 
                    url='https://www.youtube.com/watch?v=uMkBmFUq8IU' 
                    playing 
                    controls
                    light
                    pip
                    width='100%'
                    height='600px'
                  />
                </div>

                <Tabs 
                  className='m-3' 
                  id="controlled-tab-example" 
                  activeKey={this.activeTab} 
                  onSelect={tab => this.handleSelect(tab)}
                >
                

                  <Tab eventKey="overview" title="Overview">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto col-7">
                                <div >
                                    <div>
                                        <div className="course-overview--container--2OKKD" data-purpose="dashboard-overview-container">
                                            <div className="border-bottom" data-purpose="course-headline">
                                                <div className="h1">About this course</div>
                                                <p>Learn to recognize high audio and video quality</p>
                                            </div>
                                            <div className="course-overview--grid-row--1nKqQ">
                                                <div>By the numbers</div>
                                                <div data-purpose="course-main-stats">
                                                    <div>Skill level: Beginner Level</div>
                                                    <div>Students: 568258</div>
                                                    <div>Languages: English</div>
                                                    <div>Captions: Yes</div>
                                                </div>
                                                <div data-purpose="course-additional-stats">
                                                    <div>Lectures: 20</div>
                                                    <div>Video: 33 mins</div>
                                                </div>
                                            </div>
                                            <div className="course-overview--grid-row--1nKqQ course-overview--course-features--2fF12"
                                                data-purpose="course-features">
                                                <div>Features</div>
                                                <div><span>Available on <a href="https://udemy.app.link/EF2Emfzjm1" target="_blank"
                                                            rel="noopener noreferrer">iOS</a> and <a
                                                            href="https://udemy.app.link/EF2Emfzjm1" target="_blank"
                                                            rel="noopener noreferrer">Android</a></span></div>
                                                <div>
                                                    <div>Certificate of completion</div>
                                                </div>
                                            </div>
                                            <div className="course-overview--grid-row--1nKqQ">
                                                <div>Description</div>
                                                <div className="course-overview--wide--37Lev course-overview--description--2m1iq"
                                                    data-purpose="course-description">
                                                    <div>
                                                        <p>We talk a lot about "high quality videos" here at Udemy, but do you know what
                                                            "high quality"&nbsp;<em>actually</em> means? In this course we'll go
                                                            over&nbsp;what a great video looks and sounds like so that you're speaking the
                                                            exact same language as the Udemy Review Team. You'll learn what good (and bad!)
                                                            audio and video look like and you'll also&nbsp;learn how to actually identify
                                                            specific problems so that you can diagnose and fix your&nbsp;own videos.</p>

                                                        <p>In&nbsp;this official, Udemy-produced&nbsp;course you'll learn the skills and
                                                            language you'll need to make sure your course is the best it can be. Whether
                                                            you're an experienced videographer or a video newbie, this course will ensure
                                                            that you understand how videos on Udemy should look and sound.&nbsp;</p>
                                                        <p>We'll go over all of the topics that go into recognizing great videos:</p>
                                                        <ol>
                                                            <li>Identifying (and fixing) common audio issues</li>
                                                            <li>Identifying (and fixing) common video&nbsp;issues</li>
                                                            <li>Giving and getting video feedback</li>
                                                        </ol>
                                                        <p><br/></p>
                                                        <p>This course is part of the "Filming"&nbsp;track of Udemy's Official Instructor
                                                            Education Program and is highly recommended for&nbsp;<em>all</em> Udemy
                                                            instructors -- new and experienced alike. In each of our official courses we
                                                            strive to deliver information-packed lectures that quickly give you the
                                                            information you need to make your course creation process easy and your final
                                                            product amazing. We include lots of examples, as well as practice activities to
                                                            make sure you're practicing your new skills.&nbsp;</p>
                                                        <p>By the end of this course you'll&nbsp;have learned exactly what videos on Udemy
                                                            should look and sounds like, and you'll have learned valuable skills to perfect
                                                            your own videos.&nbsp;Let's get started!</p>
                                                    </div>
                                                    <h4>What you’ll learn</h4>
                                                    <ul>
                                                        <li>Identify common audio and video issues</li>
                                                        <li>Recognize a high quality video</li>
                                                        <li>Provide feedback on video quality to other instructors</li>
                                                        <li>Speak the same language when it comes to audio and video</li>
                                                    </ul>
                                                    <h4>Are there any course requirements or prerequisites?</h4>
                                                    <ul>
                                                        <li>There are no prior requirements to taking this course. This course is the
                                                            foundation for all instructors.</li>
                                                        <li>We will recommend some paid materials in this course. All of the materials are
                                                            optional based on your preferences.</li>
                                                    </ul>
                                                    <h4>Who this course is for:</h4>
                                                    <ul>
                                                        <li>Instructors who are planning on creating a Udemy course</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="course-overview--grid-row--1nKqQ">
                                                <div>Instructor</div>
                                                <div className="course-overview--wide--37Lev">
                                                    <div className="instructor-profile--header-row--n0Prm"><img alt="User photo"
                                                            aria-label="User photo" className="user-avatar user-avatar--image"
                                                            data-purpose="user-avatar" height="64" width="64"
                                                            src="https://i.udemycdn.com/user/200_H/137060_54c1_8.jpg" />
                                                        <div className="instructor-profile--title-wrapper--2V1u6">
                                                            <div className="instructor-profile--title--1rlDt"><a href="/user/udemymanager/"
                                                                    data-purpose="instructor-url">Udemy Instructor Team</a></div>
                                                            <p>Official Udemy Instructor Account</p>
                                                        </div>
                                                    </div>
                                                    <div className="instructor-profile--social-links-row--14uvr"><a
                                                            href="https://twitter.com/UdemyInstructor"
                                                            className="instructor-profile--social-profile-btn--fs2ve" target="_blank"
                                                            rel="noopener noreferrer nofollow"><span aria-label="Twitter"
                                                                className="udi udi-twitter"></span></a><a
                                                            href="https://www.facebook.com/groups/UdemyStudio/"
                                                            className="instructor-profile--social-profile-btn--fs2ve" target="_blank"
                                                            rel="noopener noreferrer nofollow"><span aria-label="Facebook"
                                                                className="udi udi-facebook"></span></a></div>
                                                    <div className="instructor-profile--description--vCsKv">
                                                        <div>
                                                            <p>The Udemy Instructor Team has one passion: Udemy's instructors! We'll work
                                                                with you to help you create an online course -- along the way, we'll also
                                                                help you become an integral member of the Udemy community, a promotional
                                                                whiz, a teaching star, and an all-around amazing instructor. We're excited
                                                                to help you succeed on Udemy!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <button type="button"
                                        className="view-more-container--view-more__collapse-btn--1bVN9 btn btn-link">
                                        - See less
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </Tab>

                  <Tab eventKey="bookmarks" title="Bookmarks">
                    
                  </Tab>

                  <Tab eventKey="announcements" title="Announcements">
                    
                  </Tab>

                </Tabs>

              </Col>

              <Col className='p-0' lg={3} md={12}>
                <div className='' >
                  <Card bg='white'>
                    <Card.Body>
                      <strong>Course Content</strong>
                    </Card.Body>
                  </Card>
                  <div >
                    <Accordion  defaultActiveKey="0">
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <strong>Introduction</strong> <br/>
                          <small>0 / 2 | 3 min</small>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{transition: 'all .25s ease-in-out'}}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item >Vestibulum at eros</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div >
                    <Accordion>
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <strong>Introduction</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{transition: 'all .25s ease-in-out'}}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item >Vestibulum at eros</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div >
                    <Accordion>
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <strong>Introduction</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{transition: 'all .25s ease-in-out'}}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item >Vestibulum at eros</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  
                </div>
              </Col>
            </Row>

          </Container>
        </div>
      )
    }
  }
// export default connect(
//     ({ courseLearn }) => ({ ...courseLearn }),
//     dispatch => bindActionCreators({ ...courseLearnActions }, dispatch)
//   )( courseLearn );