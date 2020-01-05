import React from 'react';
import { connect } from 'react-redux';
import Rows from './rows'

class MainTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const tr = this.props.tr
        return (
            <div>
                <div className="col-xs-12">
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className='pointer-cursor '>
                                <a style={{ color: 'inherit' }} className="pull-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Trips
                                </a>
                            </h4>
                        </div>
                        <div className="panel-body minht">
                            <div className="down-section">
                                <div role="tabpanel" className="tapsc tab-pane active" >
                                    <Rows />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = ({movies}) => ({movies})

export default connect(mapStateToProps, mapDispatchToProps)(MainTable)