import React, { Component } from 'react';

class BaseLayout extends Component {
  static displayName = 'BaseLayout';

  render() {
    const { children } = this.props;
    let header = null;
    let body = null;
    let footer = null;
    React.Children.forEach(children, child => {
      if (child && typeof child.type === 'function') {
        switch(child.type.displayName) {
          case 'Header':
            header = child;
            break;
          case 'Body':
            body = child;
            break;
          case 'Footer':
            footer = child;
            break;
          default:;
        }
      }
    });

    return (
      <div className="mobile-base-layout">
        {header}
        {body}
        {footer}
      </div>
    );
  }
}

export default BaseLayout;
