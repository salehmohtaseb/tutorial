import React from 'react';
import Slidemenue from './slidemenue'

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header style={{ display: "block" }}>
        <nav className='navbar navbar-default nav-cloudview'>
          <div className="container-fluid" >
            <div id="slidemenu" className="navbar-collapse dclr slidsx" style={{ display: "block" }}>
              <Slidemenue />
            </div>
            <div id="navbar-height-col"></div>
          </div>
        </nav>
      </header >
    )
  }
}