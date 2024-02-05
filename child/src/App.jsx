import React from "react";

import {Button, Card, Input, Space, Switch} from "antd";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({theme}) => ({
  background: theme.colorPrimary,
  color: '#fff'
}))

const App = () => (
  <Card title={'Child application container'}>
    <Space>
      <Button type={'primary'}>Children button</Button>
      <Button>Children button</Button>
      <Input placeholder={'Input placeholder'} />
      <Switch checked/>
      <StyledButton>Styled button</StyledButton>
    </Space>
  </Card>
);

export default App
