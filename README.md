## 说明文档

### 描述
一种简单的移动端可伸缩布局，主要包括头部、内容区域、底部，其中内容区域为可伸缩部分，即当头部或者底部不存在时，内容区域会自动扩展将其覆盖

### 安装
```shell
npm install mobile-base-loayout -S
```

### 演示
<img src="https://raw.githubusercontent.com/kulelikule/Images/master/mobile-base-layout.jpg?=240*200" width="350"/>

### 使用说明
* 通过HTML形式使用
```js
import 'mobile-base-loayout/lib/main.css';
```

```html
<div className="mobile-base-layout">
  <div>顶部</div>
  <div className="mobile-body-container">
    内容区域
  </div>
  <div>底部</div>
</div>
```
* 通过React形式使用
```jsx
import BaseLayout from 'mobile-base-loayout';
const { Header, Body, Footer } = BaseLayout;
class Demo extends Component {
  render() {
    return (
      <BaseLayout>
        <Header>顶部</Header>
        <Body>
          内容区域
        </Body>
        <Footer>底部</Footer>
      </BaseLayout>
    );
  }
}
```
