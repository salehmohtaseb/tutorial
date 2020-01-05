import React from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import  ModalSample from './modal'

class TripsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playMovie: false,
            idToBePlayed: '',
        }
    }

    closeModal() {
        this.setState({
            playMovie: false,
            idToBePlayed: '',
        })
    }

    render() {
        return (
            <React.Fragment>
                <TableContainer className='table table-striped no-footer no-margin-btm  head-black numbs2' component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow className='movie-Header'>
                                <TableCell className='cvs-table-checkbox-td'></TableCell>
                                <TableCell >from</TableCell>
                                <TableCell >to</TableCell>
                                <TableCell >time</TableCell>
                                <TableCell >driver details</TableCell>
                                <TableCell ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.trips.map(row => (
                                    <TableRow component="tr" scope="row">
                                        <TableCell></TableCell>
                                        <TableCell>{row.from}</TableCell>
                                        <TableCell>{row.to}</TableCell>
                                        <TableCell>{row.time}</TableCell>
                                        <TableCell>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow className='movie-Header'>
                                                        <TableCell className='cvs-table-checkbox-td'></TableCell>
                                                        <TableCell >driver name</TableCell>
                                                        <TableCell >car type</TableCell>
                                                        <TableCell >car model</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow component="tr" scope="row">
                                                        <TableCell></TableCell>
                                                        <TableCell>{row.driver.name}</TableCell>
                                                        <TableCell>{row.driver.carType}</TableCell>
                                                        <TableCell>{row.driver.carModel}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableCell>
                                        <TableCell>

                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer >
                {this.state.playMovie ? <ModalSample modalIsOpen={this.state.playMovie} closeModal={() => this.closeModal()} movieId={this.state.idToBePlayed} /> : ''}
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ trips }) => ({
    trips
});

export default connect(mapStateToProps)(TripsTable)