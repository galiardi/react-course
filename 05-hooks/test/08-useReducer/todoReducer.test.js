import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Testing todoReducer', () => {
  
  const initialState = [{
    id: 1,
    description: 'Demo todo',
    done: false
  }]

  test('debe regresar el estado inicial',() => {

    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);

  })


  test('debe agregar un todo', () => {
    
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        deccription: 'Todo 2',
        done: false
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContainEqual(action.payload);
    // toContainEqual, al igual que toEqual, no espera el mismo espacio en memoria

  });


  test('debe eliminar un todo', () => {

    const action = {
      type: '[TODO] Delete Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);

  });

  
  // test('debe eliminar un todo', () => {

  //   const todo2 = {
  //       id: 2,
  //       deccription: 'Todo 2',
  //       done: false
  //     };

  //   const actionAdd = {
  //     type: '[TODO] Add Todo',
  //     payload: todo2
  //   };

  //   const actionDelete = {
  //     type: '[TODO] Delete Todo',
  //     payload: 2
  //   };

  //   const newState1 = todoReducer(initialState, actionAdd)
  //   const newState2 = todoReducer(newState1, actionDelete);
  //   expect(newState2.length).toBe(1);
  //   expect(newState2).not.toContain(todo2);
  //   expect(newState2).toContain(initialState[0]);
  //   expect(newState2).toContainEqual({
  //   id: 1,
  //   description: 'Demo todo',
  //   done: false
  // });

  // });
  
  
  test('debe togglear un todo', () => {

    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);

  });
  
 })