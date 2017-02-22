function catData (state = '', action) {
  switch (action.type) {
    case 'GET_CAT' :
      return ''
    case 'SET_CAT_TO_STATE' :
      return action.imgUrl
    default:
      return state
  }
}

export default catData
