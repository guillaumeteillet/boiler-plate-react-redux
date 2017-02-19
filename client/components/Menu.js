import React from 'react'
import { Link } from 'react-router'

const Menu = React.createClass({
  render() {
    return (
      <div className="menu">
        <Link to="/">Homepage</Link> -
        <Link to="/page1"> Page 1</Link> -
        <Link to="/page1/withParams"> Page 1</Link>
      </div>
    )
  }
})

export default Menu
