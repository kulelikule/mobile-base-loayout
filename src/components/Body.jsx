import React, { Component } from 'react';

class Body extends Component {
  static displayName = 'Body';

  render() {
    const { children } = this.props;

    return (
      <div className="mobile-body-container">
        { children }
      </div>
    );
  }
}

export default Body;