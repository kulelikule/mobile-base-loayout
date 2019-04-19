import React, { Component } from 'react';

class Footer extends Component {
  static displayName = 'Footer';
  
  render() {
    const { children } = this.props;

    return (
      <div className="mobile-footer-container">
        { children }
      </div>
    );
  }
}

export default Footer;