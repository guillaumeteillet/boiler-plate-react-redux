import React from 'react'

import Title from '../components/Title'
import Menu from '../components/Menu'

const Homepage = React.createClass({
  render() {
    return (
      <div>
        <h2>Homepage</h2>
      <ul>
        {this.props.dummyData.map((data, i) => <li key={i}>{data.name}</li>)}
      </ul>
      </div>
    )
  }
})

export default Homepage
