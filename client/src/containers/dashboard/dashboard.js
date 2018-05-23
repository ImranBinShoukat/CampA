/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import { getuserdetails } from '../../redux/actions/basicinfo.actions'

class Dashboard extends React.Component {
	constructor (props) {
		super(props);
		props.getuserdetails()
	}

	componentDidMount () {
    document.title = 'CampA | Dashboard'
  }

  render() {
    return (
			<div>
				<Header />
				<div style={{backgroundColor: '#f2f3f8'}} className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
					<Sidebar />
					<div>Dashboard</div>
				</div>
			</div>
    );
  }
}

function mapStateToProps (state) {
  return {
    userdetails: (state.loginInfo.userdetails)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
		getuserdetails
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
