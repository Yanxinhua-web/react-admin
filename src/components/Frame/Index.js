import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
import { adminRoutes } from "../../routes";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const routes = adminRoutes.filter((route) => route.isShow);

function Index(props) {
  console.log(props.children);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              {routes.map((route) => {
                return (
                  <Menu.Item
                    key={route.path}
                    onClick={(p) => props.history.push(p.key)}
                  >
                    {route.title}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {props.children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default withRouter(Index);
