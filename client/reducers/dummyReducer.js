function dummyData (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER' :
      console.log('Incrementing COUNTER!!')
      const i = action.index
      return [
        ...state.slice(0, i),
        {...state[i], counter: state[i].counter + 1},
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default dummyData
