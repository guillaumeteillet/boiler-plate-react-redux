import React from 'react'
import cat from '../api/cat'

class Api extends React.Component {
  constructor () {
    super()
    this.changeCat = this.changeCat.bind(this)
  }
  changeCat () {
    cat.get(this.props.actions.getCat, this.props.actions.setCatImgToState)
  }
  render () {
    return (
      <div>
        <h2>I am cat api page </h2>
        {this.props.catData === '' ? <div>loading cats...</div> : <img src={this.props.catData} />}
        <button onClick={this.changeCat}>change cat!</button>
      </div>
    )
  }
}

export default Api
