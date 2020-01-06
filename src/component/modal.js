import { connect } from 'react-redux';
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as mutations from '../store/mutations'

class ModalSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true
    };
    this.form = React.createRef();
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    this.props.closeModal()
  }

  changeStore = () => {
    const trip = {
      id: this.props.trip.id,
      from : this.form.current['from'].value,
      to:this.form.current['to'].value,
      time:this.form.current['time'].value,
      driver: {
        name:this.form.current['driverName'].value,
        carType:this.form.current['carType'].value,
        carModel:this.form.current['carModal'].value,
      }

    }

    this.props.putTrips(trip)
    this.closeModal()
  }

  render() {
    return (
      <Modal size="lg" className="" show={this.state.modalIsOpen} onHide={this.closeModal} animation="true">
        <Modal.Header closeButton>
          <h4 className="modal-title"><i className="fa fa-road"></i> Edit trip </h4>
        </Modal.Header>
        <Modal.Body>
          <form ref={this.form} >
            <div className="row">
              <div className="col-md-5 ">
                <label>From</label>
                <input required name='from' autoComplete="off" type="text" defaultValue={this.props.trip.from} className="form-control" placeholder="From"></input>
              </div>
              <div className="col-md-5 col-md-offset-2">
                <label>To</label>
                <input autoComplete="off" name='to' type="text" defaultValue={this.props.trip.to} className="form-control" placeholder="To"></input>
              </div>
            </div>
            <div className="row top-buffer form-group">
              <div className="col-md-5">
                <label>TIME</label>
                <input autoComplete="off" name='time' type="text" defaultValue={this.props.trip.time} className="form-control" placeholder="Time"></input>
              </div>
            </div>
            <label className='top-buffer' style={{ paddingBottom: 5 + 'px', paddingTop: 5 + 'px', fontSize: 18 + 'px' }}>Driver Details</label>
            <div className="row form-group">
              <div className="col-md-5">
                <label>Name</label>
                <input autoComplete="off" name='driverName' type="text" defaultValue={this.props.trip.driver.name} className="form-control" placeholder="Name"></input>
              </div>
              <div className="col-md-5">
                <label>Car Type</label>
                <input autoComplete="off" name='carType' type="text" defaultValue={this.props.trip.driver.carType} className="form-control" placeholder=" Type"></input>
              </div>
            </div>
            <div className="row top-buffer form-group">
              <div className="col-md-5">
                <label>Car Model</label>
                <input autoComplete="off" name='carModal' type="text" defaultValue={this.props.trip.driver.carModel} className="form-control" placeholder="Model"></input>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-cvs-default" style={{ backgroundColor: 'cornflowerblue' }} onClick={this.changeStore}>
            Save
			    </button>
          <button type="button" className="btn btn-cvs-default" style={{ backgroundColor: 'cornflowerblue' }} onClick={this.closeModal} data-dismiss="modal">
            Cancel
          </button>
        </Modal.Footer>
      </Modal >
    )
  }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  putTrips(row) {
    dispatch(mutations.updateTrips(row))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSample);