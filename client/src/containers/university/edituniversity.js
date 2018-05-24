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
import { uploadFile, editUniversity } from '../../redux/actions/university.actions'

class EditUniversity extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: this.props.location.state.name,
      address: this.props.location.state.address,
      sector: this.props.location.state.sector,
      file: '',
      fileErrors: '',
      logoUrl: this.props.location.state.logo_url
    }
    this.changeName = this.changeName.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changeSector = this.changeSector.bind(this)
    this.onFilesChange = this.onFilesChange.bind(this)
    this.onFilesError = this.onFilesError.bind(this)
    this.removeFile = this.removeFile.bind(this)
    this.editUniversity = this.editUniversity.bind(this)
  }

  changeName (e) {
    this.setState({name: e.target.value})
  }

  changeAddress (e) {
    this.setState({address: e.target.value})
  }

  changeSector (e) {
    this.setState({sector: e.target.value})
    if (this.state.address !== '' && this.state.name !== '' && this.state.file !== '' && e.target.value !== '') {
      this.setState({disabled: false})
    }
  }

	componentDidMount () {
    document.title = 'CampA | Edit University'
  }

  onFilesChange (file) {
    var self = this
    if (file.length > 0) {
      this.setState({
        file: file,
        fileErrors: []
      })
      var fileData = new FormData()
        fileData.append('file', file)
        fileData.append('filename', file.name)
        fileData.append('filetype', file.type)
        fileData.append('filesize', file.size)
        this.props.uploadFile(fileData, this.handleFile)
    }
  }

  handleFile (data) {
    console.log('fileData', data)
  }

  onFilesError (error, file) {
    this.setState({
      fileErrors: [{errorMsg: error.message}]
    })
  }

  editUniversity () {
    const data = {
      universityId: this.props.location.state._id,
      name: this.state.name,
      address: this.state.address,
      sector: this.state.sector,
      logoUrl: 'none'
    }
    this.props.editUniversity(data)
    browserHistory.push({
      pathname: `/universities`
    })
  }

  removeFile () {
    this.setState({file: ''})
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
                  <h3 id='survey' className='m-subheader__title'>Edit University</h3>
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
                          <input className='form-control' placeholder='Enter university name here...'
                            value={this.state.name} onChange={(e) => this.changeName(e)} />
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'><h5>Address</h5></label>
                          <textarea className='form-control'
                            placeholder='Enter university address here...'
                            rows='2' value={this.state.address} onChange={(e) => this.changeAddress(e)} />
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'><h5>Sector</h5></label>
                          <select style={{borderRadius: '4px'}} className='form-control m-input m-input--square' value={this.state.sector} onChange={this.changeSector}>
                            <option value='' disabled>Choose Sector...</option>
                            <option value='public'>Public</option>
                            <option value='private'>Private</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='m-portlet__foot m-portlet__foot--fit' style={{'overflow': 'auto'}}>
                      <div className='m-form__actions' style={{'float': 'right', 'marginTop': '25px', 'marginRight': '20px', 'marginBottom': '25px'}}>
                        <button onClick={this.editUniversity} className='btn btn-primary'>
                          Save
                        </button>
                        <Link
                          to='/universities'
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
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    uploadFile,
    editUniversity
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUniversity)
