import React, {Component} from 'react';
import './courseView.scss'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Container, Row, Col, Card, Accordion, ListGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserCheck, faStarHalfAlt, faStar, faCheck} from '@fortawesome/free-solid-svg-icons'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseViewActions from "../../store/courseView/actions";
export default class courseView extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <div className="view-course-view">
          <Navbar></Navbar>
          <Container fluid style={{background : '#29303B'}}>
            <Container className='d-flex h-100 text-light py-5'>
              <Row className='my-auto'>
                <Col lg={8}>
                  <h1>
                    The Complete Junior to Senior Web Developer Roadmap (2020)
                  </h1>
                  <h5>
                    Go from Junior Developer to Senior Developer. Learn all the technical skills Senior Web Developers know in 2020!
                  </h5>
                  <p>
                    <span className='text-warning mr-2'> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStar} /> 
                      <FontAwesomeIcon icon={faStarHalfAlt} />   
                    </span>
                    <span>
                      4.7 (3,613 ratings)
                    </span>
                    <span className='mx-3'>
                      <FontAwesomeIcon icon={faUserCheck} />  32,748 students enrolled
                    </span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>

          <Container className='py-4'>
            <Row>
              <Col lg={8}>
                <Card bg='light' className=''>
                  <Card.Body className=''>
                    <div className=''>

                      <Card.Title>What you'll learn</Card.Title>
                      <Row className='text-secondary'>
                        <Col md={6}>
                          <Row>
                            <Col md={1}>
                              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </Col>
                            <Col md={11}>
                              Skills that will allow you to apply for jobs in these roles: Web Developer, Software Developer, Front End Developer, Javascript Developer, or Full Stack Developer
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={1}>
                              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </Col>
                            <Col md={11}>
                            You will no longer be or feel like a Junior Developer
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={1}>
                              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </Col>
                            <Col md={11}>
                            Learn the technologies that are being used behind the biggest tech companies in 2020
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={1}>
                              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </Col>
                            <Col md={11}>
                            Have a full featured image recognition app to put onto your portfolio that will wow any employer
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={1}>
                              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </Col>
                            <Col md={11}>
                            Lead technical projects as a Senior Developer  
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={1}>
                              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </Col>
                            <Col md={11}>
                            Master advanced and modern fundamental concepts in web development
                            </Col>
                          </Row>
                        </Col>
                        
                      </Row>
                     
                    </div>
                  </Card.Body>
                </Card>

                

              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={8}>
              <div className='my-4'>
                  <div className='mb-1'>
                    <Accordion  defaultActiveKey="0">
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Introduction
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
                  <div className='mb-1'>
                    <Accordion>
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Introduction
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
                  <div className='mb-1'>
                    <Accordion>
                      <Card className='border-bottom'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Introduction
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


          <Container>
            <Row>
              <Col md={8} className='p-3'>
                <h4 >
                  Requirements
                </h4>
                <div >
                  <ul >
                    <li >Basic understanding of HTML, CSS, and Javascript</li>
                    <li >Prepare to learn real life skills and build real web apps that will get you hired</li>
                    <li >Completion of "The Complete Web Developer in 2020: Zero to Mastery" is a bonus but not necessary</li>
                  </ul>
                </div>


                <h4>
                Description
                </h4>
                <div>
                  <p><strong>Join a live online community of over 120,000+ developers and a course taught by an industry expert that has actually worked both in Silicon Valley and Toronto as a senior developer. Graduates of this course are now working at Google, Amazon, Apple, IBM, JP Morgan, Facebook + other top tech companies.</strong></p><p>This is&nbsp;<em>the</em>&nbsp;tutorial you've been looking for to no longer be a junior developer, level up your skills, and earn a higher salary.<strong>&nbsp;</strong>This extensive course doesn’t just cover a small portion of the industry. This covers everything you need to know to go from junior developer, to learning the in-demand technical skills that some of the top developers in the industry know <strong>so you can become a senior developer this year</strong>. <br/><br/>I&nbsp;guarantee you that you won't&nbsp;find a course that is&nbsp;as comprehensive, up to date, and better quality, than this tutorial. You will be guided in your&nbsp;journey to become&nbsp;an admired and respected Senior Developer one day.</p><p><strong>This is the hardest work I have ever done in my life, and it took me months to plan, months to film, months to edit, and years of experience to create.&nbsp;</strong>No course like this exists out there because this is a really difficult topic to teach and to combine all of the technologies we cover into one course is a long hard process.</p><p><strong>By the end of this course you will have a fully functioning image recognition app to show off on your portfolio. More importantly, you will be able to&nbsp;implement&nbsp;and add the below skillsets to your resume, impress your boss, and ace your next interview </strong>(Trust me, some of these may not mean anything to you now, but they are topics&nbsp;that ALL&nbsp;Senior Developers know).&nbsp;You will be taken from absolute zero to knowing how to:
                  </p><ul><li><p><strong>Use React and Redux</strong>&nbsp;to build complex and large&nbsp;applications.</p></li><li><p><strong>Improve performance of any web&nbsp;application </strong>(Code Splitting, Load Balancing, Caching,&nbsp;Code Optimizations, and much more)</p></li><li><p><strong>Use SSH</strong>&nbsp;on a remote linux server and generate ssh keys</p></li><li><p><strong>Use Webpack 4</strong>&nbsp;and <strong>Parcel </strong>to set up a project and bundle your files</p></li><li><p><strong>Implement proper&nbsp;security</strong>&nbsp;and securing your apps like an expert</p></li><li><p><strong>Use AWS Lambda and Serverless&nbsp;</strong>architecture to manage applications that can handle millions of users</p></li><li><p><strong>Use Typescript</strong>&nbsp;on a project to have less bugs in your code</p></li><li><p><strong>Write&nbsp;all kinds of tests&nbsp;and learn about all the testing tools you can use </strong>to write better software</p></li><li><p><strong>Use Docker and docker compose</strong>&nbsp;to create containers for your services</p></li><li><p><strong>Use Sessions and JWT</strong>&nbsp;to manage user authentication and authorization</p></li><li><p><strong>Use Redis database</strong>&nbsp;for session management and caching</p></li><li><p><strong>Decide when to use</strong>&nbsp;<strong>Server Side Rendering vs Client Side Rendering </strong>for your projects</p></li><li><p><strong>Create a Progressive Web App </strong>that works offline like a native mobile app.</p></li><li><p><strong>Implement Continuous Integration, Continuous Delivery, Continuous Deployment</strong>&nbsp;for your company and make your boss happy.</p></li></ul><p>
                  </p><p>The above skillsets are exactly what Senior Developers know and can use&nbsp;in terms of their technical skills. Not only will you understand how to do these things, but most importantly, you will deeply understand why they exist and what problems they solve so that when asked in an interview, you can speak intelligently about them, or when asked by your boss, you can take the lead on the project and implement them.</p><p><strong>Here is what sets this course apart from the rest:</strong></p><ol><li><p>There is no wasted time here. We won’t be using outdated technologies that a lot of courses online use. Although still useful, outdated technologies&nbsp;are low paying and demand for them is decreasing. In this course, you will learn the specific technologies that are the most in demand in the industry right now. These include&nbsp;<strong>tools and technologies used by the biggest tech companies like Google, Facebook, Amazon, etc… It’s geared specifically for people that want to excel in their career as a web developer in 2020.</strong></p></li><li><p>After finishing this course, you will be able to apply for intermediate to senior&nbsp;developer roles. You will no longer be a junior developer. We won't be taking any shortcuts in this course.&nbsp;<strong>You will be&nbsp;taken&nbsp;through everything I have learned over the many years coding while&nbsp;managing projects and people for some of the largest tech firms.</strong></p></li><li><p>This course is taught by an instructor who has worked in Silicon Valley, and one of the top tech consulting companies in Canada.&nbsp;<strong>I have built large scale applications, managed projects and people, but most importantly, I have&nbsp;worked directly with these technologies. I am not an online marketer or a salesman. I am a senior software developer who loves programming and believes that there needs to be a course out there that actually teaches valuable modern skills.</strong></p></li><li><p>Your time is valuable. You want a course that outlines the best way to learn the topic, in simple and well explained way, so that you fully understand the content instead of just watching somebody on your screen code<strong>. I have taken the best pieces, the best methods, from experience as well as from other experts, and condensed everything so that you can learn in the most efficient way possible. 50 hours of videos doesn't mean much if the instructor isn't engaging or focuses on outdated topics.&nbsp;</strong></p></li><li><p><strong>We&nbsp;have a thriving online chat community so you really feel like you are part of a classroom and not just watching videos by yourself.&nbsp;</strong>You will have a chance to communicate with fellow students, work on group projects together, and contribute to open source. Anytime you have a question you can ask in the chat and someone will surely be able to help you right away including myself.</p></li><li><p>The course is designed to&nbsp;<strong>level up your skills ABOVE a Junior Developer role</strong>.&nbsp;My previous course <em>The Complete Web Developer in 2020: Zero to Mastery</em> is the highest rated developer course on Udemy, and one of the fastest growing.<strong> I've helped students who now work at some of the largest tech firms in the world as developers.</strong></p></li></ol><p>
                  </p><p>In this course,&nbsp;you will be taken through online videos and exercises. It will follow a storyline where you are hired by Keiko Corp. They are a fast growing tech company that has two products which definitely need some work. Each section of the course will solve different problems for this company which mimic real life scenarios you will encounter as a senior developer.&nbsp;</p><p>You will become comfortable using the below skills and you will be able to put these on your resume:</p><ul><li><p><strong>SSH</strong></p></li><li><p><strong>React + Redux&nbsp;</strong></p></li><li><p><strong>Webpack4 + Parcel</strong></p></li><li><p><strong>Node.js + Express</strong></p></li><li><p><strong>Front End&nbsp;Performance Optimizations</strong></p></li><li><p><strong>Back End Performance Optimization</strong></p></li><li><p><strong>Progressive Web Apps</strong></p></li><li><p><strong>Typescript</strong></p></li><li><p><strong>Software Testing</strong></p></li><li><p><strong>Server Side Rendering and Client Side Rendering</strong></p></li><li><p><strong>Front End Security Optimizations</strong></p></li><li><p><strong>Back End Security Optimizations</strong></p></li><li><p><strong>Docker</strong></p></li><li><p><strong>Redis</strong></p></li><li><p><strong>Sessions + JWT</strong></p></li><li><p><strong>Amazon Web Services</strong></p></li><li><p><strong>Serverless Architecture</strong></p></li><li><p><strong>Continuous Integration</strong></p></li><li><p><strong>Continuous Delivery</strong></p></li><li><p><strong>Continuous Deployment
                  </strong></p></li></ul><p><br/>This course is the accumulation of all of my years working, learning, and teaching coding, and all of the frustrations and incomplete&nbsp;information I have encountered along the way.&nbsp;<strong>There is so much information out there, so many opinions, and so many ways of doing things, that unless you have spent the past years working with these technologies in a company, you will never fully understand. So this course is the answer to that&nbsp;exact&nbsp;problem</strong>. I have gone through thousands of coding books and online tutorials and bootcamps and have worked and consulted on some really big projects. I have worked with these tools on real applications.&nbsp;<strong>Throughout the years I have taken notes on what has worked, and what hasn't and I've created this course to narrow down the best way to learn and the most relevant information for you to&nbsp;become a superstar web developer.</strong></p><p>If you succeed in this course, that is my success as well. Therefore, I will be there every step of the way helping you understand concepts and answering any questions you have.</p><p>I am 100% confident that you won't find a course like this out there that will help you&nbsp;build the&nbsp;strong foundations for you to start a new career or to upgrade your skills and become a top level developer. We're not going to be building simple todo applications&nbsp;and cat image sliders.&nbsp;<strong>We are going to learn actual&nbsp;practical skills that will put you above and beyond&nbsp;the skillset of the average developer.</strong></p><p>Why do we teach the above? Why did we&nbsp;pick these tools? Because in this day and age,&nbsp;<strong>just being a junior developer won't make you happy. You want to feel important, smart, and admired at work. You want to be able to make big decisions.&nbsp;With this course, you will be able to&nbsp;grow in your role and command a higher salary. I am teaching you these topics because these are the things you should know in 2020 so that you are miles ahead of the rest, because these are the skills used by the top tech firms around the world.</strong></p><p>Make this&nbsp;the year that you took a risk, you learned&nbsp;highly in demand skills, you had new experiences, and you received new opportunities. I hope you join me in this journey.
                  <strong>See you inside!</strong></p><p><strong><br/></strong></p><p><strong>Taught by:&nbsp;</strong>&nbsp;</p><p>Andrei is the instructor of the highest rated Web Development course on Udemy as well as&nbsp;one of the fastest&nbsp;growing.&nbsp;His graduates have&nbsp;moved&nbsp;on to work for&nbsp;some of the biggest tech&nbsp;companies around the world like Apple.&nbsp;He&nbsp;has&nbsp;been working as a senior software developer in&nbsp;Silicon Valley and Toronto for many years,&nbsp;and&nbsp;is now taking all that he has learned,&nbsp;to teach&nbsp;programming skills and&nbsp;to help you&nbsp;discover the amazing career opportunities that being a developer allows in&nbsp;life.&nbsp;</p><p>Having been&nbsp;a self taught programmer,&nbsp;he understands that there is an&nbsp;overwhelming number of online courses, tutorials and books&nbsp;that are overly verbose and inadequate at teaching proper skills.&nbsp;Most people feel paralyzed and don't know where to start when learning a complex subject matter, or even worse, most people don't have $20,000 to spend on a coding bootcamp.&nbsp;<strong>Programming skills should be affordable and open to all. An education material&nbsp;should teach real life skills that are current and&nbsp;they should not waste a student's valuable time.</strong>&nbsp;
                  Having learned important&nbsp;lessons from working for Fortune 500 companies, tech startups, to even&nbsp;founding his own business, he is now dedicating 100% of his time to&nbsp;teaching others valuable&nbsp;software development skills&nbsp;in order to take control of their life and work in an exciting industry with infinite possibilities.&nbsp;</p><p>Andrei promises you that there are no other courses out there as comprehensive and as well explained.&nbsp;<strong>He believes that in order to learn anything of value, you need to start with the foundation and develop the roots of the tree. Only from there will you be able to learn concepts and specific skills(leaves) that connect to the foundation. Learning becomes exponential when structured in this way.</strong>&nbsp;</p><p>Taking his experience in educational psychology and coding, Andrei's courses will take you on an understanding of complex subjects that you never thought would be possible.&nbsp;&nbsp;
                  </p><p><strong>See you inside the courses!</strong></p>
                  <div  data-purpose="course-audience">
                    <div >
                    Who this course is for:
                    </div>
                    <ul >
                      <li>You don't want to be a Junior Web Developer anymore</li>
                      <li>You want to become a Senior Developer one day and earn a higher salary</li>
                      <li>You want to learn best practices and build scalable applications professionally</li>
                      <li>You know HTML, CSS and Javascript but want to expand your skills and do more</li>
                      <li>You want to start your own business or become a freelancer</li>
                      <li>You want to learn advanced industry skills that are necessary in 2020 to get hired as a web developer</li>
                      <li>You want one course to teach you everything in one place from a Senior Developer that works in the industry</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Footer></Footer>
        </div>
      )
    }
  }
// export default connect(
//     ({ courseView }) => ({ ...courseView }),
//     dispatch => bindActionCreators({ ...courseViewActions }, dispatch)
//   )( courseView );