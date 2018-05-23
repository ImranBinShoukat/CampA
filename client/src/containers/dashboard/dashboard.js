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
				{
					this.props.userdetails &&
					<div>
						<Header />
						<div className='m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body'>
							<Sidebar />
							{
								this.props.userdetails.role === 'super user'
								? <div>Super User Dashboard</div>
								: this.props.userdetails.role === 'administrator'
								? <div>University Administrator Dashboard</div>
								: <div>Office Bearer Dashboard</div>
							}
						</div>
					</div>
				}
			</div>
    );
  }
}

function mapStateToProps (state) {
  return {
    userdetails: (state.basicInfo.userdetails)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
		getuserdetails
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
