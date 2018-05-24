/* eslint-disable no-undef */
/**
 * Created by imran on 20/01/2018.
 */

import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../components/header/header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { addPost } from '../../redux/actions/post.actions'

class CreatePost extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      post: '',
      title: ''
    }
    this.changePost = this.changePost.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.addPost = this.addPost.bind(this)
  }

  componentDidMount () {
    document.title = 'CampA | Create Post'
  }

  changePost (e) {
    this.setState({post: e.target.value})
  }

  changeTitle (e) {
    this.setState({title: e.target.value})
  }

  addPost () {
    const data = {
      payload: {
        title: this.state.title,
        body: this.state.post
      },
      createdBy: this.props.userdetails._id
    }
    this.props.addPost(data)
  }

  render () {
    return (
      <div>
				<Header />
				<div style={{backgroundColor: '#f2f3f8'}} className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
					<Sidebar />
          <div className='m-grid__item m-grid__item--fluid m-wrapper'>
            <div className='m-subheader '>
              <div className='d-flex align-items-center'>
                <div className='mr-auto'>
                  <h3 id='survey' className='m-subheader__title'>Create Post</h3>
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
                        <div className='form-group'>
                          <label className='control-label'><h5>Title</h5></label>
                          <input className='form-control' placeholder='Enter title here...'
                            value={this.state.title} onChange={(e) => this.changeTitle(e)} />
                        </div>
                      </div>
                      <br />
                      <div className='col-xl-12'>
                        <div className='form-group' id='desc'>
                          <label className='control-label'><h5>Body</h5></label>
                          <textarea className='form-control'
                            placeholder='Write your post here...'
                            rows='6' value={this.state.post} onChange={(e) => this.changePost(e)} />
                        </div>
                      </div>
                    </div>
                    <div className='m-portlet__foot m-portlet__foot--fit' style={{'overflow': 'auto'}}>
                      <div className='m-form__actions' style={{'float': 'right', 'marginTop': '25px', 'marginRight': '20px', 'marginBottom': '25px'}}>
                        <button onClick={this.addPost} className='btn btn-primary'>
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return {
    userdetails: (state.basicInfo.userdetails)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addPost
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
