import { fireEvent, render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from '../../src/08-useReducer/useTodo';

jest.mock('../../src/08-useReducer/useTodo');

describe('Testing 08-useReducer/TodoApp', () => {

  useTodo.mockReturnValue({
    todos: [{
      id: 1,
      description: 'Learn react',
      done: false
    }], 
    todosCount: 1, 
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })
  
  test('Debe hacer match con el snapshot', () => {
    
    const { container } = render(<TodoApp />);
    expect(container).toMatchSnapshot();

  });

  
  test('Debe mostrar el componente correctamente', () => {

    render(<TodoApp />);
    screen.debug();
    
    expect(screen.getByText('Learn react')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    
  });
  
 })