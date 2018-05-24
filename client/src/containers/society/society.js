/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import { getSocieties, deleteSociety } from '../../redux/actions/society.actions'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'

class Society extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      societyData: [],
      showModal: false,
      searchValue: '',
      deleteid: ''
    }
    props.getSocieties(props.userdetails.university_id._id)
    this.searchSociety = this.searchSociety.bind(this)
    this.gotoEditSociety = this.gotoEditSociety.bind(this)
    this.showDialog = this.showDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
  }

  gotoEditSociety (society) {
    browserHistory.push({
      pathname: `/editUniversity`,
      state: society
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.societies) {
      this.setState({ societyData: nextProps.societies })
    }
  }

  searchSociety (event) {
    this.setState({searchValue: event.target.value})
    var filtered = []
    if (event.target.value !== '') {
      for (let j = 0; j < this.props.societies.length; j++) {
        if (this.props.societies[j].name.toLowerCase().includes(event.target.value)) {
          filtered.push(this.props.societies[j])
        }
      }
    } else {
      filtered = this.props.societies
    }
    this.setState({ societyData: filtered })
  }

  showDialog (id) {
    this.setState({showModal: true})
    this.setState({deleteid: id})
  }

  closeDialog () {
    this.setState({showModal: false})
  }

	componentDidMount () {
    document.title = 'CampA | Society'
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
                  <h3 className='m-subheader__title'>Manage Societies</h3>
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
                            Societies
                          </h3>
                        </div>
                      </div>
                      <div className='m-portlet__head-tools'>
                        <Link to='/addSociety' >
                          <button className='btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill'>
                            <span>
                              <i className='la la-plus' />
                              <span>
                                Add Society
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
                                  <p>Are you sure you want to delete this society?</p>
                                  <button style={{float: 'right'}}
                                    className='btn btn-primary btn-sm'
                                    onClick={() => {
                                      this.props.deleteSociety({societyId: this.state.deleteid})
                                      this.closeDialog()
                                    }}>Delete
                                  </button>
                                </ModalDialog>
                              </ModalContainer>
                            }
                          </div>
                        </div>
                        {
                          this.props.societies && this.props.societies.length > 0
                          ? <div className='col-lg-12 col-md-12 order-2 order-xl-1'>
                            <div className='form-group m-form__group row align-items-center'>
                              <div className='m-input-icon m-input-icon--left col-md-4 col-lg-4 col-xl-4' style={{marginLeft: '15px'}}>
                                <input type='text' value={this.state.searchValue} placeholder='Search by name...' className='form-control m-input m-input--solid' onChange={(event) => { this.searchSociety(event) }} />
                                <span className='m-input-icon__icon m-input-icon__icon--left'>
                                  <span><i className='la la-search' /></span>
                                </span>
                              </div>
                            </div>
                            {
                              this.state.societyData.length > 0
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
                                      <th data-field='description'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '100px'}}>Description</span>
                                      </th>
                                      <th data-field='patron'
                                        className='m-datatable__cell--center m-datatable__cell m-datatable__cell--sort'>
                                        <span style={{width: '100px'}}>Patron</span>
                                      </th>
                                      <th data-field='created_at'
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
                                      this.state.societyData.map((society, i) => (
                                        <tr data-row={i}
                                          className={((i % 2) === 0) ? 'm-datatable__row' : 'm-datatable__row m-datatable__row--even'}
                                          style={{height: '55px'}} key={i}>
                                          <td data-field='name'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '100px'}}>
                                              {society.name}
                                            </span>
                                          </td>
                                          <td data-field='description'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '100px'}}>
                                              {society.description}
                                            </span>
                                          </td>
                                          <td data-field='patron' className='m-datatable__cell'>
                                            <span style={{width: '100px'}}>
                                              {society.patron_id.first_name + ' ' + society.patron_id.last_name}
                                            </span>
                                          </td>
                                          <td data-field='options'
                                            className='m-datatable__cell'>
                                            <span
                                              style={{width: '170px'}}>
                                              <Link onClick={() => { let societySelected = society; this.gotoEditSociety(societySelected) }} className='btn btn-primary btn-sm' style={{float: 'left', margin: 2, color: 'white'}}>
                                                Edit
                                              </Link>
                                              <button className='btn btn-primary btn-sm'
                                                style={{float: 'left', margin: 2}}
                                                onClick={() => this.showDialog(society._id)}>
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
    societies: (state.societyInfo.societies),
    userdetails: (state.basicInfo.userdetails)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getSocieties,
    deleteSociety
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Society)
