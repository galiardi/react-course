export const todoReducer = ( state = [], action = {}) => {

  switch ( action.type ) {
    case '[TODO] Add Todo':
      return [...state, action.payload];
    
    case '[TODO] Delete Todo':
      return state.filter( todo => todo.id !== action.payload );
    
    case '[TODO] Toggle Todo':
      return state.map((todo) => {

        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        
        return todo;
      })
      
    default:
      return state;
  }
}


// case '[TODO] Delete Todo':
//       const todoToDeleteIndex = state.findIndex((todo) => todo.id === action.payload);
//       const stateCopy = [...state];
//       stateCopy.splice(todoToDeleteIndex,1);
//       return stateCopy;

// case '[TODO] Toggle Todo':
//       const todo = state.find(todo => todo.id === action.payload);
//       const todoIndex = state.findIndex(todo => todo.id = action.payload);
//       const todoCopy = {...todo};
//       todoCopy.done = !todoCopy.done;
//       const newState = [...state];
//       newState.splice(todoIndex, 1, todoCopy);
//       return newState;