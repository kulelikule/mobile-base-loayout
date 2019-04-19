import React, { Component } from 'react';

class Header extends Component {
  static displayName = 'Header';

  render() {
    const { children } = this.props;

    return (
      <div className="mobile-header-container">
        { children }
      </div>
    );
  }
}

export default Header;
