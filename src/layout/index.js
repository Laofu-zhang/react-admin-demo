/*
 * @Author: zhangyun
 * @Date: 2021-01-14 11:12:26
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 13:54:57
 * @FilePath: /react-admin-demo/src/layout/index.js
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import './layout.scss'
import Users from '../views/Users'
import Manage from '../views/Manage'
import Category from '../views/Category'
import InnerHome from '../views/Home'
import Header from '../components/Header'
import AsideMenus from '../components/Menus'
import Search from '../components/Search'

// icon
import { Nests } from '@icon-park/react'

const { Content } = Layout

// route
import { asideRoute } from './routeMap'
export default class Home extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <Router>
        <div className="layout">
          <Layout className="layout">
            <Header icon={<Nests theme="outline" size="24" fill="#fff" />}>
              <Search />
            </Header>
            <Content>
              <div className="main-content">
                <div className="aside-menu">
                  <AsideMenus menuItems={asideRoute} />
                </div>
                <div className="conponent-container">
                  <Switch>
                    <Route exact path="/">
                      <InnerHome />
                    </Route>
                    <Route path="/users">
                      <Users />
                    </Route>
                    <Route path="/manage">
                      <Manage />
                    </Route>
                    <Route path="/category">
                      <Category />
                    </Route>
                  </Switch>
                </div>
              </div>
            </Content>
          </Layout>
        </div>
      </Router>
    )
  }
}
