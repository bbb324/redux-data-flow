/**
 * Created by junxie on 18/5/27.
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';

import Login from './component/login/Login.jsx';     // 登录页面
import Editor from './component/editor/Editor.jsx'; // 富文本编辑器

class App extends Component {
  render() {
    return (
      <HashRouter history={hashHistory}>
        <SliderComponent />
      </HashRouter>
    )
  }
}

const SliderComponent = () => (
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route exact path="/editor" component={Editor}/>
  </Switch>
);

ReactDom.render(
  <App />,
  document.getElementById('root')
);