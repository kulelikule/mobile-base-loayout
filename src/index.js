import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './App';
import * as serviceWorker from './serviceWorker';

const { Header, Body, Footer } = BaseLayout;

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      activeName: '',
    }

    this.viewDemo = this.viewDemo.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  viewDemo(activeName) {
    this.setState({
      activeName,
    });
  }

  goBack() {
    this.setState({
      activeName: '',
    });
  }

  render() {
    const { activeName } = this.state;

    // 头部内容
    const header = (
      <div className="demo-header">
        <span className="back" onClick={this.goBack}>返回</span>
        header
      </div>
    );

    // 主体内容
    const htmlContent = `I'm HTML！ `.repeat(200);
    const reactContent = `I'm React！ `.repeat(200);

    // 底部内容
    const footer = <div className="demo-footer">footer</div>;

    return (
      <div>
        {
          !activeName ? (
            <div>
              <button onClick={() => { this.viewDemo('html') }}>HTML版本</button>
              <button onClick={() => { this.viewDemo('react') }}>React版本</button>
            </div>
          ) : (
            <div>
              {
                activeName === 'html' ? (
                  <div className="mobile-base-layout">
                    <div>
                      { header }
                    </div>
                    <div className="mobile-body-container">
                      { htmlContent }
                    </div>
                    <div>
                      { footer }
                    </div>
                  </div>
                ) : (
                  <BaseLayout>
                    <Header>
                      { header }
                    </Header>
                    <Body>
                      { reactContent }
                    </Body>
                    <Footer>
                      { footer }
                    </Footer>
                  </BaseLayout>
                )
              }
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
