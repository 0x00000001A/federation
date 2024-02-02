import React from "react";

import {Button, Card, Input, Space, Switch} from "antd";

const App = () => (
  <Card title={'Child application container'}>
    <Space>
      <Button type={'primary'}>Children button</Button>
      <Button>Children button</Button>
      <Input placeholder={'Input placeholder'} />
      <Switch checked/>
    </Space>
  </Card>
);

export default App
