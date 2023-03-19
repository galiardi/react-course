import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Testing TodoItem', () => { 

  const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock= jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })
   
  test('debe mostrar el todo pendiente de completar', () => {
    
    render(<TodoItem
              todo={todo}
           />);
    
    const li = screen.getByRole('listitem');
    screen.debug();
    expect(li.className).toBe('list-group-item d-flex justify-content-between');

    const span = screen.getByLabelText('span');
    expect(span.className).toBe('align-self-center ');

  });


  test('debe mostrar el todo completado', () => {
    
    todo.done = true;

    render(<TodoItem
              todo={todo}
           />);

    const span = screen.getByLabelText('span');
    expect(span.className).toContain('text-decoration-line-through');

  });

  
  test('debe ejecutar onToggleTodo al hacer click sobre el span', () => {
    
    render(<TodoItem
              todo={todo}
              onToggleTodo={onToggleTodoMock}
           />);
        
    const span = screen.getByLabelText('span');
    fireEvent.click(span);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

  });
  
  test('debe llamar onDeleteTodo al hacer click sobre el boton', () => {
    
    render(<TodoItem
              todo={todo}
              onDeleteTodo={onDeleteTodoMock}
          />);

    const button = screen.getByRole('button', {name: 'Borrar'});
    fireEvent.click(button);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

  });
  
  
 })