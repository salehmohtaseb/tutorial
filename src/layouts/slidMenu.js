import React from 'react';

export class Slidemenue extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <React.Fragment>
        <ul className="nav navbar-nav percentage" style={{ marginLeft: "160px" }}>
          <li className= 'active'>
            <a >
              <i className="cv-icon-inbox"></i>
              {Trips}
            </a>
          </li>
        </ul >
       
      </React.Fragment>
    )
  }
}
