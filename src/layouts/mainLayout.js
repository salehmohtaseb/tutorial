import React from 'react';
import Footer from './footer'
import Header from './header'
import Main from './body'

export class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="wrapper">
        <Header />
        <Main>
          {this.props.children}
        </Main>
        <Footer />
      </div >
    )
  }
};
