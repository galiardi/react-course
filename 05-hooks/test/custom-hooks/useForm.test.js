import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/custom-hooks/useForm";

describe('Testing useForm', () => {

  const initialForm = {
    name: 'Pablo',
    id: 123
  }
  
  test('debe regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      formState: initialForm,
      name: initialForm.name,
      id: initialForm.id,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  });

  
  test('debe cambiar el nombre del formulario', () => {

    const newValue = 'Juan';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue
        }
      });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
    
  });

  
  test('debe resetear el formulario', () => {
    const newValue = 'Juan';
    
    const { result } = renderHook(() => useForm(initialForm));
    const {formState, onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue
        }
      });
      onResetForm();
    });

    // const obj = {leters: {a: 1}}
    // const { leters } = obj;
    // leters.a = 2
    // console.log('leters.a = ' + leters.a);
    // console.log('object.leters.a = ' + obj.leters.a)
    // console.log(formState)
    // console.log(result.current.formState)

    expect(result.current.formState.name).toEqual(initialForm.name);
  });
  
  
  

})