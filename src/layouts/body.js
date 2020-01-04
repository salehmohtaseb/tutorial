import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

class Body extends React.Component {
  constructor(props) {
    let login;

    if(!props.session.loginStatus){
      login = {}
    }else {
      login = props.session.loginStatus.last
    }

    let date = moment(login.dateTime).format('DD/MM/YYYY HH:mm:ss')
    let text;
    let classStatus;

    if (login.success == 1) {
      text = props.tr('login:status:success')
      classStatus = 'success'
    } else {
      text = props.tr('login:status:failed')
      classStatus = 'error'
    }

    if (date == 'Invalid date') {
      date = ''
    } else {
      date = date.split(' ')
      date = date[0] + ', ' + date[1]
    }

    super(props)
    this.state = {
      date: date || '',
      classStatus: classStatus || '',
      text: text || ''
    }

  }

  render() {
    const tr = this.props.tr
    return (
      <div>
        <div className="container-fluid">
          <div className="lastLogin">
            {tr('last:login')}
            <span id="loginStatus" className={this.state.classStatus}>{this.state.text}</span>
            <span id="lastLoginDate">{this.state.date}</span>
          </div>
        </div>
        <div className="cvs-breadcrumbs text-capitalize">
          <ol className="breadcrumb">
          </ol>
        </div>
        <div id="page-content" className="container-fluid">
          <section className='main-view'>{this.props.children}</section>
        </div>
        <div id="preloader" style={{ display: "none" }}>
          <div id="status">
            <i className="fa fa-circle-o-notch fa-spin"></i>
          </div>
        </div>
        <div className="events-bar hidden-xs"></div>
      </div >
    )
  }

}

const mapStateToProps = ({ translator, session }) => ({
  tr: translator,
  session: session
});
export default connect(mapStateToProps)(Body);