import React, {Component} from 'react';
import './courseEdit.scss'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Container, Row, Col, Form, Tab, Nav, Card } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form as Fform } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import CKEditor from 'ckeditor4-react';
import placeholderImg from '../../assets/placeholder.png'


import {postRequest} from '../../services/config/request'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseEditActions from "../../store/courseEdit/actions";
class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return (
      <img
        src={placeholderImg}
        style={{width: '100%'}}
        alt="placeholder"
      />
    ) }

    // if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      style={{width: '100%', height: '100%'}}
      />);
  }
}

export default class courseEdit extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }

  postData = ({ title, description, category, visible, startdate, enddate, idnumber, summary, format, image }) => {

    postRequest('/courses', {
      title,
      description,
      category: Number(category),
      visible,
      startdate: startdate.getTime(),
      enddate: enddate.getTime(),
      idnumber,
      summary,
      format,
      image,
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err.response);
    })

  }

  
    handleSubmit = async ({ title, description, category, visible, startdate, enddate, idnumber, summary, format })=> {
    
      
      if(this.state.selectedFile) {
        console.log('masuk if');
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        let response = await axios.post("http://localhost:3000/upload", data, {})
        this.postData({ title, description, category, visible, startdate, enddate, idnumber, summary, format, image : response.data.link })
      } else {
        console.log('masuk else');
        this.postData({ title, description, category, visible, startdate, enddate, idnumber, summary, format })
      }
      
    }

    render() {

      // let handleSubmit = this.handleSubmit

      return (
        <div className='bg-light'>
          <Navbar></Navbar>
          <Container className='p-5'>
            <h4>Add New Course</h4>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item >
                      <Nav.Link  eventKey="first">Define Course</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Pricing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Card>
                        <Card.Body>
                          <Formik
                  
                            initialValues={{
                              title: '',
                              description: '',
                              category: 1,
                              visible: false,
                              startdate: '',
                              enddate: '',
                              idnumber: '',
                              summary: '',
                              format: '',
                              image: null,
                            }}
                            validationSchema={Yup.object().shape({
                              title: Yup.string().required('Full Name is required'),
                              description: Yup.string(),
                              idnumber: Yup.string(),
                              summary: Yup.string(),
                            })}
                            onSubmit={ async fields => {
                              console.log(fields)
                              this.handleSubmit(fields)
                            }}
                            render={({ errors, status, touched, setFieldValue, values }) => (
                              <Fform>
                                <Form.Group className="form-group">
                                  <Form.Label htmlFor="file">Course Image</Form.Label>
                                  <Form.Row>
                                    <Col>
                                      <Thumb file={values.image} />
                                      
                                    </Col>
                                    <Col>
                                      <div><p>Make your course stand out with a great image from our design team based on your preferences and style. <a target="_blank" rel="noopener noreferrer" href="https://info.udemy.com/course-image-design">Get your free image</a>.</p><p>If you create your image, it must meet our <a target="_blank" rel="noopener noreferrer" href="https://support.udemy.com/hc/en-us/articles/229232347">course image quality standards</a> to be accepted.</p><p>Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.</p></div>
                                      <input id="file" name="file" type="file" onChange={(event) => {
                                        setFieldValue("image", event.currentTarget.files[0]);
                                        this.setState({
                                          selectedFile: event.target.files[0],
                                          loaded: 0,
                                        })
                                      }} className="form-contro-file btn-info w-100 p-2" />
                                    </Col>
                                  </Form.Row>
                                  
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="title">Course Title</Form.Label>
                                    <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                                    <ErrorMessage name="title" component="div" className="invalid-feedback" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="description">Short Name</Form.Label>
                                    <Field name="description" type="text" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                                    <ErrorMessage name="description" component="div" className="invalid-feedback" />
                                </Form.Group>
                                <Form.Row>
                                  <Col>
                                    <Form.Group>
                                      <Form.Label htmlFor="category">Category</Form.Label>
                                        <Field name="category" as="select" className='form-control'>
                                          <option value={1}>ICT</option>
                                          <option value={1}>Komunikasi</option>
                                          <option value={1}>Development</option>
                                        </Field>
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group>
                                      <Form.Label htmlFor="format">Course Format</Form.Label>
                                        <Field name="format" as="select" className='form-control'>
                                          <option value="topic">Topics Format</option>
                                          <option value="weekly">Weekly Format</option>
                                        </Field>
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                <Form.Row>
                                  <Col>
                                    <Form.Group>
                                      <Form.Label htmlFor="startdate">Start Date</Form.Label><br/>
                                      <DatePicker 
                                        
                                        selected={values.startdate}
                                        className="form-control"
                                        name="startdate"
                                        onChange={date => setFieldValue('startdate', date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group>
                                      <Form.Label htmlFor="enddate">End Date</Form.Label><br/>
                                      <DatePicker 
                                        selected={values.enddate}
                                        className="form-control"
                                        name="enddate"
                                        onChange={date => setFieldValue('enddate', date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                      />
                                    </Form.Group>
                                  </Col>
                                </Form.Row>
                                {/* <Form.Group>
                                  <Form.Label htmlFor="visible">Course Visibility</Form.Label>
                                    <Field name="visible" as="select" className='form-control'>
                                      <option value="true">Show</option>
                                      <option value="false">Hide</option>
                                    </Field>
                                </Form.Group> */}
                                {/* <Form.Group>
                                    <Form.Label htmlFor="idnumber">ID Number</Form.Label>
                                    <Field name="idnumber" type="text" className={'form-control' + (errors.idnumber && touched.idnumber ? ' is-invalid' : '')} />
                                    <ErrorMessage name="idnumber" component="div" className="invalid-feedback" />
                                </Form.Group> */}
                                <Form.Group>
                                    <Form.Label htmlFor="summary">Course Description</Form.Label>
                                    {/* <Field name="summary" type="text" className={'form-control' + (errors.summary && touched.summary ? ' is-invalid' : '')} /> */}
                                    <CKEditor
                                      onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true )}
                                      name='summary'
                                      editorName='summary'
                                      data={values.summary}
                                      onChange={(event)=>{
                                        setFieldValue('summary' ,event.editor.getData())
                                      }}
                                      config={ {
                                        toolbar: [ [ 'Bold','Italic','NumberedList','BulletedList' ] ]
                                      }}
                                    />
                                    <ErrorMessage name="summary" component="div" className="invalid-feedback" />
                                </Form.Group>
                                
                                <div>
                                    <button type="submit" className="btn btn-primary mr-2">Register</button>
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                </div>
                              </Fform>
                            )}
                        />
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Card>
                        <Card.Body>asdsa sadasd asd </Card.Body>
                      </Card>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

      
          </Container>
          <Footer></Footer>
        </div>
      )
    }
  }