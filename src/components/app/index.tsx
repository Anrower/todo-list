import React from 'react';
import { Layout } from 'antd';
import Todo from '../Todo';

import './index.scss';

const { Header, Content, Footer } = Layout;
const App: React.FC = () => (
  <Layout>
    <Header className="header" />
    <Content className="content">
      <Todo />
    </Content>
    <Footer className="footer">{`Ant Design ©${new Date().getFullYear()} Created by Denis Shneider`}</Footer>
  </Layout>
);

export default App;
