/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import Files from 'react-files'
import { addUser } from '../../redux/actions/user.actions'

class AddUser extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      role: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      designation: '',
      department: '',
      gender: '',
      email: '',
      contact: '',
      ext: 'none',
      officeHours: 'none',
      officeLocation: 'none',
      CNIC: '',
      profilePic: 'none',
      university: ''
    }
    this.changeRole = this.changeRole.bind(this)
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeDesignation = this.changeDesignation.bind(this)
    this.changeDepartment = this.changeDepartment.bind(this)
    this.changeGender = this.changeGender.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeContact = this.changeContact.bind(this)
    this.changeCNIC = this.changeCNIC.bind(this)
    this.changeUniversity = this.changeUniversity.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  changeRole (e) {
    this.setState({role: e.target.value})
  }

  changeFirstName (e) {
    this.setState({firstName: e.target.value})
  }

  changeLastName (e) {
    this.setState({lastName: e.target.value})
  }

  changeUserName (e) {
    this.setState({username: e.target.value})
  }

  changePassword (e) {
    this.setState({password: e.target.value})
  }

  changeDesignation (e) {
    this.setState({designation: e.target.value})
  }

  changeDepartment (e) {
    this.setState({department: e.target.value})
  }

  changeGender (e) {
    this.setState({gender: e.target.value})
  }

  changeEmail (e) {
    this.setState({email: e.target.value})
  }

  changeContact (e) {
    this.setState({contact: e.target.value})
  }

  changeCNIC (e) {
    this.setState({CNIC: e.target.value})
  }

  changeUniversity (e) {
    this.setState({university: e.target.value})
  }

	componentDidMount () {
    document.title = 'CampA | Add User'
  }

  addUser () {
    const data = {
      role: this.state.role,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      designation: this.state.designation,
      department: this.state.department,
      gender: this.state.gender,
      email: this.state.email,
      contact: this.state.contact,
      ext: this.state.ext,
      officeHours: this.state.officeHours,
      officeLocation: this.state.officeLocation,
      CNIC: this.state.CNIC,
      profilePic: this.state.profilePic,
      universityId: this.state.university,
      createdBy: this.props.userdetails._id
    }
    this.props.addUser(data)
    browserHistory.push({
      pathname: `/users`
    })
  }

  render() {
    return (
			<div>
				<Header />
				<div style={{backgroundColor: '#f2f3f8'}} className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
					<Sidebar />
          <div className='m-grid__item m-grid__item--fluid m-wrapper'>
            <div className='m-subheader '>
              <div className='d-flex align-items-center'>
                <div className='mr-auto'>
                  <h3 id='survey' className='m-subheader__title'>Add University</h3>
                </div>
              </div>
            </div>
            <div className='m-content'>
              <div className='row'>
                <div
                  className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div id='identity' className='m-portlet m-portlet--mobile' style={{height: '100%'}}>
                    <div className='m-portlet__body'>
                      <div className='col-xl-12'>
                        <div className='form-group m-form__group row'>
                          <div className='col-lg-6'>
                            <label className='control-label'>First Name</label>
                            <input className='form-control' placeholder='Enter first name here...'
                              value={this.state.firstName} onChange={(e) => this.changeFirstName(e)} />
                          </div>
                          <div className='col-lg-6'>
                            <label className='control-label'>Last Name</label>
                            <input className='form-control' placeholder='Enter last name here...'
                              value={this.state.lastName} onChange={(e) => this.changeLastName(e)} />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group m-form__group row'>
                          <div className='col-lg-6'>
                            <label className='control-label'>Username</label>
                            <input className='form-control' placeholder='Enter username here...'
                              value={this.state.username} onChange={(e) => this.changeUserName(e)} />
                          </div>
                          <div className='col-lg-6'>
                            <label className='control-label'>Password</label>
                            <input className='form-control' placeholder='Enter password here...'
                              value={this.state.password} onChange={(e) => this.changePassword(e)} />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group m-form__group row'>
                          <div className='col-lg-6'>
                            <label className='control-label'>Role</label>
                            <select style={{borderRadius: '4px'}} className='form-control m-input m-input--square' value={this.state.role} onChange={this.changeRole}>
                              <option value='' disabled>Choose Role...</option>
                              <option value='faculty'>Faculty</option>
                              <option value='faculty'>Student</option>
                              <option value='administrator'>University Administrator</option>
                            </select>
                          </div>
                          <div className='col-lg-6'>
                            <label className='control-label'>Role</label>
                            <select style={{borderRadius: '4px'}} className='form-control m-input m-input--square' value={this.state.gender} onChange={this.changeGender}>
                              <option value='' disabled>Choose Gender...</option>
                              <option value='male'>Male</option>
                              <option value='female'>Female</option>
                              <option value='other'>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group m-form__group row'>
                          <div className='col-lg-6'>
                            <label className='control-label'>Designation</label>
                            <input className='form-control' placeholder='Enter designation here...'
                              value={this.state.designation} onChange={(e) => this.changeDesignation(e)} />
                          </div>
                          <div className='col-lg-6'>
                            <label className='control-label'>Department</label>
                            <input className='form-control' placeholder='Enter department here...'
                              value={this.state.department} onChange={(e) => this.changeDepartment(e)} />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group m-form__group row'>
                          <div className='col-lg-6'>
                            <label className='control-label'>Email</label>
                            <input className='form-control' placeholder='Enter email here...'
                              value={this.state.email} onChange={(e) => this.changeEmail(e)} />
                          </div>
                          <div className='col-lg-6'>
                            <label className='control-label'>Contact</label>
                            <input className='form-control' placeholder='Enter contact here...'
                              value={this.state.contact} onChange={(e) => this.changeContact(e)} />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'>CNIC</label>
                          <textarea className='form-control'
                            placeholder='Enter CNIC# here...'
                            rows='1' value={this.state.CNIC} onChange={(e) => this.changeCNIC(e)} />
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'>University</label>
                          <select style={{borderRadius: '4px'}} className='form-control m-input m-input--square' value={this.state.university} onChange={this.changeUniversity}>
                            <option value='' disabled>Choose University...</option>
                            {
                              this.props.universities && this.props.universities.map((university, i) => (
                                <option value={university._id}>{university.name}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='m-portlet__foot m-portlet__foot--fit' style={{'overflow': 'auto'}}>
                      <div className='m-form__actions' style={{'float': 'right', 'marginTop': '25px', 'marginRight': '20px', 'marginBottom': '25px'}}>
                        <button onClick={this.addUser} className='btn btn-primary'>
                          Add
                        </button>
                        <Link
                          to='/users'
                          className='btn btn-secondary' style={{'margin-left': '10px'}}>
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    userdetails: (state.basicInfo.userdetails),
    universities: (state.universityInfo.universities)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addUser
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
