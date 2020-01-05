import { connect } from 'react-redux';
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { notify } from '../helpers/notifier'

class ModalSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      name: '',
      mac: '',
      ip: '',
      rts: ''
    };
  }

  closeModal = () => {
      this.setState({ modalIsOpen: false });
      this.props.closeModal()
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <Modal size="lg" className="" show={this.state.modalIsOpen} onHide={this.closeModal} animation="true">
        <Modal.Header closeButton>
          <h4 className="modal-title"><i className="cv-icon-camera-lens"></i> Add Camera </h4>
        </Modal.Header>
        <Modal.Body>
          <form id="addCameraForm">
            <div className="row form-group">
              <div className="col-xs-6">
                <label>Camera Name</label>
                <input required autoComplete="off" name='name' type="text" defaultValue={this.props.edit ? this.props.camera.name : ''} className="form-control" placeholder="Camera Name"></input>
              </div>
              <div className="col-xs-6">
                <label>Mac Address</label>
                <input autoComplete="off" name='mac' type="text" defaultValue={this.props.edit ? this.props.camera.mac : ''} className="form-control" placeholder="Mac Address"></input>
              </div>
            </div>
            <label style={{ paddingBottom: 5 + 'px', paddingTop: 5 + 'px', fontSize: 18 + 'px' }}>Camera Connection Config</label>
            <div className="row form-group">
              <div className="col-xs-6">
                <label>IP</label>
                <input autoComplete="off" name='ip' type="text" defaultValue={this.props.edit ? this.props.camera.localIp : ''} className="form-control" placeholder="IP"></input>
              </div>
              <div className="col-xs-6">
                <label>RTSP Port</label>
                <input autoComplete="off" name='rtspPort' type="text" defaultValue={this.props.edit ? this.props.camera.rtspPort : ''} className="form-control" placeholder="RTSP Port"></input>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-xs-12">
                <label>RTSP Url</label>
                <input autoComplete="off" name='rtspUrl' type="text" defaultValue={this.props.edit ? this.props.camera.rtspURL : ''} className="form-control" placeholder="RTSP Url"></input>
              </div>
            </div>
            <label style={{ paddingBottom: 5 + 'px', paddingTop: 5 + 'px', fontSize: 18 + 'px' }}>Onvif Config</label>
            <div className="row form-group">
              <div className="col-xs-6">
                <label>Hostname</label>
                <input autoComplete="off" name='hostName' type="text" defaultValue={this.props.edit && this.props.camera.onvif ? this.props.camera.onvif.hostname : ''} className="form-control" placeholder="Hostname"></input>
              </div>
              <div className="col-xs-6">
                <label>Port</label>
                <input autoComplete="off" name='port' type="text" defaultValue={this.props.edit && this.props.camera.onvif ? this.props.camera.onvif.port : ''} className="form-control" placeholder=" Port"></input>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-xs-6">
                <label>Password</label>
                <input autoComplete="off" name='password' type="text" defaultValue={this.props.edit && this.props.camera.onvif ? this.props.camera.onvif.password : ''} className="form-control" placeholder="Password"></input>
              </div>
              <div className="col-xs-6">
                <label>Username</label>
                <input autoComplete="off" name='username' type="text" defaultValue={this.props.edit && this.props.camera.onvif ? this.props.camera.onvif.username : ''} className="form-control" placeholder="Username"></input>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-cvs-default" onClick={this.validation}>
            Save
			    </button>
          <button type="button" className="btn btn-cvs-default" onClick={this.closeModal} data-dismiss="modal">
            Cancel
          </button>
        </Modal.Footer>
      </Modal >
    )
  }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSample);