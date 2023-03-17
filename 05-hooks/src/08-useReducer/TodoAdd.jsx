import {useForm} from '../custom-hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

  const { todoInput, onInputChange, onResetForm} = useForm({todoInput: ""});
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (todoInput.length < 2) return;
    onNewTodo({
      id: Date.now(),
      description: todoInput,
      done: false
    });
    onResetForm();   
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text" 
        placeholder="debo..." 
        className="form-control"
        name="todoInput"
        value={todoInput}
        onChange={onInputChange}

      />
      <button 
        type="submit" 
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
