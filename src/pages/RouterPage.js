import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
const { Header, Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Layout style={{height: '100vh'}}>
      <Sider>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Ingresar",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Cola",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Crear Ticket",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
          }}
        >
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
