import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]

    case TOGGLE_TODO:
      let newArr = []
      for(let i=0; i<state.length; i++){
        if(state[i].id === action.id){
          state[i].completed = !state[i].completed
        }
        newArr.push(state[i])
      }
      return newArr
    case REMOVE_TODO:
      return state.filter((item, i) => (
        item.id !== action.id
      ))
    default:
      return state;
  }
}
