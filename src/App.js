import React, { PureComponent } from 'react'
import { Button } from 'antd';
export default class App extends PureComponent {
 

  render() {
   
    return (
      <div>
          <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
      </div>
    )
  }

}