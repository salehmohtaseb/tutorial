import React from 'react';
import MainLayout from './mainLayout';

export class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <MainLayout >
                    {this.getRoute()}
                </MainLayout>
            </React.Fragment>
        )
    }
};
