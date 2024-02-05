import React, {Suspense, useState} from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "@emotion/react";

const ChildApp = React.lazy(() => import('child/ChildApp'));

import {Button, Card, ColorPicker, ConfigProvider, Flex, Input, Space, Switch} from "antd";

const App = () => {
  const [theme, setTheme] = useState({
    colorPrimary: '#004AB9'
  })

  const onColorChange = (color) => {
    setTheme({
      ...theme,
      colorPrimary: color.toHexString()
    })
  }

  return (
    <ConfigProvider theme={{token: theme}}>
      <ThemeProvider theme={theme}>
        <Card title={'Host application container'}>
          <Space direction={'vertical'} style={{width: '100%'}}>
            <Flex justify={'space-between'}>
              <Space>
                <Button type={'primary'}>Host button</Button>
                <Button>Host button</Button>
                <Input placeholder={'Input placeholder'} />
                <Switch checked/>
              </Space>
              <Space>
                Change theme color:
                <ColorPicker value={theme.colorPrimary} onChangeComplete={onColorChange}/>
              </Space>
            </Flex>
            <Suspense fallback={<>Loading...</>}>
              <ChildApp/>
            </Suspense>
          </Space>
        </Card>
      </ThemeProvider>
    </ConfigProvider>
  )
};

ReactDOM.render(<App/>, document.getElementById("app"));
