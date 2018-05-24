/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import { getUniversities } from '../../redux/actions/university.actions'
import { getUsers, deleteUser } from '../../redux/actions/user.actions'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'

class User extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      usersData: [],
      filterValue: '',
      showModal: false,
      searchValue: '',
      deleteid: ''
    }
    props.getUsers()
    props.getUniversities()
    this.searchUser = this.searchUser.bind(this)
    this.onFilter = this.onFilter.bind(this)
    this.gotoEditUser = this.gotoEditUser.bind(this)
    this.showDialog = this.showDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
  }

  gotoEditUser (user) {
    browserHistory.push({
      pathname: `/editUser`,
      state: user
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.users) {
      this.setState({ usersData: nextProps.users })
    }
  }

  searchUser (event) {
    this.setState({searchValue: event.target.value})
    var filtered = []
    if (event.target.value !== '') {
      if (this.state.filterValue !== '') {
        for (let i = 0; i < this.props.users.length; i++) {
          let name = this.props.users[i].people_id.first_name + ' ' + this.props.users[i].people_id.last_name
          if (name.toLowerCase().includes(event.target.value) && this.props.users[i].university_id.name === this.state.filterValue) {
            filtered.push(this.props.users[i])
          }
        }
      } else {
        for (let j = 0; j < this.props.users.length; j++) {
          let name = this.props.users[i].people_id.first_name + ' ' + this.props.users[i].people_id.last_name
          if (name.toLowerCase().includes(event.target.value)) {
            filtered.push(this.props.users[j])
          }
        }
      }
    } else {
      if (this.state.filterValue !== '') {
        for (let k = 0; k < this.props.users.length; k++) {
          if (this.props.users[k].university_id.name === this.state.filterValue) {
            filtered.push(this.props.users[k])
          }
        }
      } else {
        filtered = this.props.users
      }
    }
    this.setState({ usersData: filtered })
  }

  onFilter (e) {
    this.setState({filterValue: e.target.value})
    var filtered = []
    if (e.target.value !== '') {
      if (this.state.searchValue !== '') {
        for (let a = 0; a < this.props.users.length; a++) {
          let name = this.props.users[i].people_id.first_name + ' ' + this.props.users[i].people_id.last_name
          if (name.toLowerCase().includes(this.state.searchValue) && this.props.users[a].university_id.name === e.target.value) {
            filtered.push(this.props.users[a])
          }
        }
      } else {
        for (let b = 0; b < this.props.users.length; b++) {
          if (this.props.users[b].university_id.name === e.target.value) {
            filtered.push(this.props.users[b])
          }
        }
      }
    } else {
      if (this.state.searchValue !== '') {
        for (let c = 0; c < this.props.universities.length; c++) {
          let name = this.props.users[i].people_id.first_name + ' ' + this.props.users[i].people_id.last_name
          if (name.toLowerCase().includes(this.state.searchValue)) {
            filtered.push(this.props.users[c])
          }
        }
      } else {
        filtered = this.props.users
      }
    }
    this.setState({usersData: filtered})
  }

  showDialog (id) {
    this.setState({showModal: true})
    this.setState({deleteid: id})
  }

  closeDialog () {
    this.setState({showModal: false})
  }

	componentDidMount () {
    document.title = 'CampA | Users'
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
                  <h3 className='m-subheader__title'>Manage Users</h3>
                </div>
              </div>
            </div>
            <div className='m-content'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12  col-md-12 col-sm-12 col-xs-12'>
                  <div className='m-portlet m-portlet--mobile'>
                    <div className='m-portlet__head'>
                      <div className='m-portlet__head-caption'>
                        <div className='m-portlet__head-title'>
                          <h3 className='m-portlet__head-text'>
                            Users
                          </h3>
                        </div>
                      </div>
                      <div className='m-portlet__head-tools'>
                        <Link to='/addUser' >
                          <button className='btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill'>
                            <span>
                              <i className='la la-plus' />
                              <span>
                                Add User
                              </span>
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='m-portlet__body'>
                      <div className='row align-items-center'>
                        <div className='col-xl-8 order-2 order-xl-1' />
                          <div className='col-xl-4 order-1 order-xl-2 m--align-right'>
                            {
                              this.state.showModal &&
                              <ModalContainer style={{width: '500px'}}
                                onClose={this.closeDialog}>
                                <ModalDialog style={{width: '500px'}}
                                  onClose={this.closeDialog}>
                                  <h3>Delete University</h3>
                                  <p>Are you sure you want to delete this user?</p>
                                  <button style={{float: 'right'}}
                                    className='btn btn-primary btn-sm'
                                    onClick={() => {
                                      this.props.deleteUser({userId: this.state.deleteid})
                                      this.closeDialog()
                                    }}>Delete
                                  </button>
                                </ModalDialog>
                              </ModalContainer>
                            }
                          </div>
                        </div>
                        {
                          this.props.users && this.props.users.length > 0
                          ? <div className='col-lg-12 col-md-12 order-2 order-xl-1'>
                            <div className='form-group m-form__group row align-items-center'>
                              <div className='m-input-icon m-input-icon--left col-md-4 col-lg-4 col-xl-4' style={{marginLeft: '15px'}}>
                                <input type='text' value={this.state.searchValue} placeholder='Search by name...' className='form-control m-input m-input--solid' onChange={(event) => { this.searchUser(event) }} />
                                <span className='m-input-icon__icon m-input-icon__icon--left'>
                                  <span><i className='la la-search' /></span>
                                </span>
                              </div>
                              <div className='col-md-4 col-lg-4 col-xl-4 row align-items-center' />
                              <div className='m-form__group m-form__group--inline col-md-4 col-lg-4 col-xl-4 row align-items-center'>
                                <select className='custom-select' id='m_form_status' tabIndex='-98' value={this.state.filterValue} onChange={this.onFilter}>
                                  <option value='' disabled>Filter by University...</option>
                                  <option value=''>All</option>
                                  {
                                    this.props.universities && this.props.universities.map((university, i) => (
                                      <option value={university.name}>{university.name}</option>
                                    ))
                                  }
                                </select>
                              </div>
                            </div>
                            {
                              this.state.usersData.length > 0
                              ? <div className='m_datatable m-datatable m-datatable--default m-datatable--loaded' id='local_data'>
                                <table className='m-datatable__table'
                                  id='m-datatable--27866229129' style={{
                                    display: 'block',
                                    height: 'auto',
                                    overflowX: 'auto'
                                  }}>
                                  <thead className='m-datatable__head'>
                                    <tr className='m-datatable__row'
                                      style={{height: '53px'}}>
                                      <th data-field='name'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '100px'}}>Name</span>
                                      </th>
                                      <th data-field='username'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '100px'}}>Username</span>
                                      </th>
                                      <th data-field='email'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '100px'}}>Email</span>
                                      </th>
                                      <th data-field='university'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '100px'}}>University</span>
                                      </th>
                                      <th data-field='sector'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '100px'}}>Created At</span>
                                      </th>
                                      <th data-field='options'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '170px'}} />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className='m-datatable__body' style={{textAlign: 'center'}}>
                                    {
                                      this.state.usersData.map((user, i) => (
                                        <tr data-row={i}
                                          className={((i % 2) === 0) ? 'm-datatable__row' : 'm-datatable__row m-datatable__row--even'}
                                          style={{height: '55px'}} key={i}>
                                          <td data-field='name'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '100px'}}>
                                              {user.people_id.first_name + ' ' + user.people_id.last_name}
                                            </span>
                                          </td>
                                          <td data-field='username'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '100px'}}>
                                              {user.username}
                                            </span>
                                          </td>
                                          <td data-field='email'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '100px'}}>
                                              {user.people_id.email}
                                            </span>
                                          </td>
                                          <td data-field='university'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '100px'}}>
                                              {user.university_id.name}
                                            </span>
                                          </td>
                                          <td data-field='sector' className='m-datatable__cell'>
                                            <span style={{width: '100px'}}>
                                              {user.created_at}
                                            </span>
                                          </td>
                                          <td data-field='options'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '170px'}}>
                                              <Link onClick={() => { let userSelected = user; this.gotoEditUser(userSelected) }} className='btn btn-primary btn-sm' style={{float: 'left', margin: 2, color: 'white'}}>
                                                Edit
                                              </Link>
                                              <button className='btn btn-primary btn-sm'
                                                style={{float: 'left', margin: 2}}
                                                onClick={() => this.showDialog(user._id)}>
                                                Delete
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                </table>
                              </div>
                              : <p> No results found. </p>
                            }
                          </div>
                          : <div className='table-responsive'>
                            <p> No data to display </p>
                          </div>
                        }
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
  console.log(state)
  return {
    universities: (state.universityInfo.universities),
    users: (state.userInfo.users)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getUniversities,
    getUsers,
    deleteUser
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
