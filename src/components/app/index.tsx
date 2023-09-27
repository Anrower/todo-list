import React from 'react';
import { Layout } from 'antd';
import Todo from '../Todo';

import './index.scss';

const { Header, Content, Footer } = Layout;
const App: React.FC = () => (
  <Layout>
    <Header>Todo List</Header>
    <Content className="content">
      <Todo />
    </Content>
    <Footer>Ant Design ©2023 Created by Ant UED</Footer>
  </Layout>
);

export default App;
