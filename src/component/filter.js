import React from 'react';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';
import { Fade } from 'react-bootstrap';

class MovieFilter extends React.Component {
    constructor(props) {
        super(props)
        this.buttonId = React.createRef();
        this.state = {
            open: false
        }
    }

    handleChange = (type, val) => {
        this.setState({ [type]: val })
    }

    toggleFilter = (e) => {
        this.setState({ open: !this.state.open })
        if (this.state.open) {
            this.buttonId.current.classList.add('fa-plus-circle')
            this.buttonId.current.classList.remove('fa-minus-circle')
        } else {
            this.buttonId.current.classList.remove('fa-plus-circle')
            this.buttonId.current.classList.add('fa-minus-circle')
        }
    }

    handleReset = () => {
        this.setState({
            open: false,
        })
        this.buttonId.current.classList.add('fa-plus-circle')
        this.buttonId.current.classList.remove('fa-minus-circle')
        this.props.getTrips({})
    }

    render() {
        return (
            <div id="_appFilterOptions" className="panel panel-CLDV" >
                <div className="panel-heading" style={ {cursor:'pointer'} } onClick={this.toggleFilter} id="_appFilterHeading">
                    <h4 >
                        <i className="fa fa-filter"></i> Trips Filter
                </h4>
                    <a href='#' className="collapse-filter pull-right">
                        <i id="_appFilterCollapse" ref={this.buttonId} className="fa fa-plus-circle"></i>
                    </a>
                </div>
                <Fade in={this.state.open} className="panel-body option-pan">
                    <div className="panel-body option-pan collapse" id="filterPanel">
                        <div className='box-time'>
                            <div className='container-fluid'>
                                <p>Choose your criteria</p>
                            </div>
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <div className="form-group cp2">
                                    <div className="sprates">
                                        driver name
                                    </div>
                                    <input autoComplete="off" type="text" className="movie-name" placeholder='driver name' />
                                </div>
                            </div>
                        </div>
                        <div className="form-group cp4 text-right">
                            <div className="reset-time">
                                <button id="_appSearchBtn" className="btn btn-default"  style={ {backgroundColor: 'cornflowerblue'}}><i className="fa fa-search"></i>search</button>
                                <button id="_appResetBtn" onClick={this.handleReset} className="btn cvs-btn-dark" style={ {backgroundColor: 'cornflowerblue'} }><i className="fa fa-history"></i> reset</button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div >
        )
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    getTrips(criteria) {
        dispatch(mutations.getTrips(criteria));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieFilter);

