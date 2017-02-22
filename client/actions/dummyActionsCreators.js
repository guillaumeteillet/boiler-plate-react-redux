export function increment (index) {
  return {
    type: 'INCREMENT_COUNTER',
    index
  }
}

export function getCat () {
  return {
    type: 'GET_CAT'
  }
}

export function setCatImgToState (imgUrl) {
  return {
    type: 'SET_CAT_TO_STATE',
    imgUrl
  }
}
