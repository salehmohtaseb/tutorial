import React from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import ModalSample from './modal'

class TripsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opened: false
        }
        this.rowToShow = {}
    }

    closeModal() {
        this.setState({
            opened: false
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
                                    <TableRow component="tr" scope="row" key={row.id}>
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
                                                    <TableRow component="tr" scope="row" key={'driver'+ row.driver.id}>
                                                        <TableCell></TableCell>
                                                        <TableCell>{row.driver.name}</TableCell>
                                                        <TableCell>{row.driver.carType}</TableCell>
                                                        <TableCell>{row.driver.carModel}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableCell>
                                        <TableCell>
                                            <button onClick={() => { 
                                                this.rowToShow = row
                                                this.setState({ opened: true }) 
                                                }} className="btn btn-link">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer >
                {this.state.opened ? <ModalSample modalIsOpen={this.state.opened} trip={this.rowToShow} closeModal={() => this.closeModal()} /> : ''}
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ trips }) => ({
    trips
});

export default connect(mapStateToProps)(TripsTable)