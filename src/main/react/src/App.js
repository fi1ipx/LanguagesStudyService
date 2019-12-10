import React from 'react';
import Words from './components/words/words';
import Groups from './components/groups/groups';
import Examples from './components/examples/examples';
import Practice from './components/examples/practice';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Content, Footer, Sider } = Layout;

function App() {

  return (

    <BrowserRouter>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Link to={'/'}>
                <span className="nav-text">
                  Words
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={'/example'}>
                <span className="nav-text">
                  Examples
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/groups'}>
                <span className="nav-text">
                  Groups
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <Route exact path={"/"} component={Words} />
            <Route exact path={"/example"} component={Examples} />
            <Route exact path={"/practice/:id"} component={Practice} />
            <Route exact path={"/groups"} component={Groups} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>&nbsp;&copy; 2020 Language study service</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
