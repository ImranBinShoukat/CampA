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
import { addSociety } from '../../redux/actions/society.actions'
import { getUsers } from '../../redux/actions/user.actions'

class AddSociety extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: '',
      description: '',
      patron: '',
      officeBearers: []
    }
    props.getUsers()
    this.changeName = this.changeName.bind(this)
    this.changeDescription = this.changeDescription.bind(this)
    this.changePatron = this.changePatron.bind(this)
    this.changeOB = this.changeOB.bind(this)
    this.addSociety = this.addSociety.bind(this)
  }

  changeName (e) {
    this.setState({name: e.target.value})
  }

  changeDescription (e) {
    this.setState({description: e.target.value})
  }

  changePatron (e) {
    this.setState({patron: e.target.value})
  }

  changeOB (e) {
    this.setState({officeBearers: [e.target.value]})
  }

	componentDidMount () {
    document.title = 'CampA | Add Society'
  }

  addSociety () {
    const data = {
      name: this.state.name,
      description: this.state.description,
      patronId: this.state.patron,
      officeBearers: this.state.officeBearers,
      universityId: this.props.userdetails.university_id._id,
      createdBy: this.props.userdetails._id
    }
    this.props.addSociety(data)
    browserHistory.push({
      pathname: `/societies`
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
                  <h3 id='survey' className='m-subheader__title'>Add Society</h3>
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
                        <div className='form-group' id='titl'>
                          <label className='control-label'><h5>Name</h5></label>
                          <input className='form-control' placeholder='Enter society name here...'
                            value={this.state.name} onChange={(e) => this.changeName(e)} />
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'><h5>Description</h5></label>
                          <textarea className='form-control'
                            placeholder='Enter society description here...'
                            rows='2' value={this.state.description} onChange={(e) => this.changeDescription(e)} />
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'><h5>Patron</h5></label>
                          <select style={{borderRadius: '4px'}} className='form-control m-input m-input--square' value={this.state.patron} onChange={this.changePatron}>
                            <option value='' disabled>Choose Patron...</option>
                            {
                              this.props.users && this.props.users.map((user, i) => (
                                <option key={i} value={user.people_id._id}>{user.people_id.first_name + ' ' + user.people_id.last_name}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'><h5>Office Bearer</h5></label>
                          <select style={{borderRadius: '4px'}} className='form-control m-input m-input--square' value={this.state.officeBearers} onChange={this.changeOB}>
                            <option value='' disabled>Choose Office Bearer...</option>
                            {
                              this.props.users && this.props.users.map((user, i) => (
                                <option key={i} value={user.people_id._id}>{user.people_id.first_name + ' ' + user.people_id.last_name}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='m-portlet__foot m-portlet__foot--fit' style={{'overflow': 'auto'}}>
                      <div className='m-form__actions' style={{'float': 'right', 'marginTop': '25px', 'marginRight': '20px', 'marginBottom': '25px'}}>
                        <button onClick={this.addSociety} className='btn btn-primary'>
                          Add
                        </button>
                        <Link
                          to='/societies'
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
    users: (state.userInfo.users),
    userdetails: (state.basicInfo.userdetails)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getUsers,
    addSociety
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddSociety)
