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
import AdministratorDashboard from './administratorDashboard'
import SuperUserDashboard from './superuserDashboard'
import OfficeBearerDashboard from './officebearerDashboard'

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
							<div className='m-grid__item m-grid__item--fluid m-wrapper'>
        				<div className='m-subheader '>
          				<div className='d-flex align-items-center'>
            				<div className='mr-auto'>
              				<h3 className='m-subheader__title'>Dashboard</h3>
            				</div>
          				</div>
        				</div>
        				<div className='m-content'>
									{
										this.props.userdetails.is_office_bearer
										? <OfficeBearerDashboard />
										: this.props.userdetails.role === 'super user'
										? <SuperUserDashboard />
										: <AdministratorDashboard />
									}
								</div>
							</div>
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
