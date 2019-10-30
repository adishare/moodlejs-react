import React, {Component} from 'react';
import './courseEdit.scss'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form as Fform } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import {postRequest} from '../../services/config/request'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseEditActions from "../../store/courseEdit/actions";
export default class courseEdit extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    postdata =({ fullname, shortname, category, visible, startdate, enddate, idnumber, summary, format })=> {
      postRequest('/courses', {
        fullname,
        shortname,
        category: Number(category),
        visible,
        startdate: startdate.getTime(),
        enddate: enddate.getTime(),
        idnumber,
        summary,
        format,
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err.response);
      })
    }

    render() {

      let postdata = this.postdata

      return (
        <div>
          <Navbar></Navbar>
          <Container>
            <h4>Add New Course</h4>

            <Row>
              <Col>
                <Formik
                
                  initialValues={{
                    fullname: '',
                    shortname: '',
                    category: 1,
                    visible: '',
                    startdate: '',
                    enddate: '',
                    idnumber: '',
                    summary: '',
                    format: '',
                  }}
                  validationSchema={Yup.object().shape({
                    fullname: Yup.string().required('Full Name is required'),
                    shortname: Yup.string().required('Short Name is required'),
                    idnumber: Yup.string().required('ID Number is required'),
                    summary: Yup.string().required('Course Summary is required'),
                  })}
                  onSubmit={ async fields => {
                    await alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    // console.log('masuk');
                      this.postdata(fields)
                  }}
                  render={({ errors, status, touched, setFieldValue, values }) => (
                    <Fform>
                      <Form.Group>
                          <Form.Label htmlFor="fullname">Full Name</Form.Label>
                          <Field name="fullname" type="text" className={'form-control' + (errors.fullname && touched.fullname ? ' is-invalid' : '')} />
                          <ErrorMessage name="fullname" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label htmlFor="shortname">Short Name</Form.Label>
                          <Field name="shortname" type="text" className={'form-control' + (errors.shortname && touched.shortname ? ' is-invalid' : '')} />
                          <ErrorMessage name="shortname" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="category">Category</Form.Label>
                          <Field name="category" as="select" className='form-control'>
                            <option value={1}>ICT</option>
                            <option value={1}>Komunikasi</option>
                            <option value={1}>Development</option>
                          </Field>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="visible">Course Visibility</Form.Label>
                          <Field name="visible" as="select" className='form-control'>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </Field>
                      </Form.Group>
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
                      <Form.Group>
                          <Form.Label htmlFor="idnumber">ID Number</Form.Label>
                          <Field name="idnumber" type="text" className={'form-control' + (errors.idnumber && touched.idnumber ? ' is-invalid' : '')} />
                          <ErrorMessage name="idnumber" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label htmlFor="summary">Course Summary</Form.Label>
                          <Field name="summary" type="text" className={'form-control' + (errors.summary && touched.summary ? ' is-invalid' : '')} />
                          <ErrorMessage name="summary" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="format">Course Format</Form.Label>
                          <Field name="format" as="select" className='form-control'>
                            <option value="topic">Topics Format</option>
                            <option value="weekly">Weekly Format</option>
                          </Field>
                      </Form.Group>
                      <div>
                          <button type="submit" className="btn btn-primary mr-2">Register</button>
                          <button type="reset" className="btn btn-secondary">Reset</button>
                      </div>
                    </Fform>
                  )}
              />
              </Col>
            </Row>
          </Container>
          <Footer></Footer>
        </div>
      )
    }
  }