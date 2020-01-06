import React from 'react';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';
import Filter from './filter';
import Table from './table';

class Movies extends React.Component {
    constructor(props) {
        super(props)
        props.getTrips()
    }
  
    render() {
        return (
            <div className='trips-page'>
                <div className='main-view-trips'>
                    <div className='container-fluid'>
                        <Filter />
                        <Table />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ trips }) => ({ trips });

const mapDispatchToProps = (dispatch) => ({
    getTrips() {
        dispatch(mutations.getTrips());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies);

