import React from 'react'

import Title from '../components/Title'
import Menu from '../components/Menu'

const Main = React.createClass({
  render() {
    return (
      <div>
        <Title />
        <Menu />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main
