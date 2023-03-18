const { act, renderHook } = require("@testing-library/react")
import { useCounter } from '../../src/custom-hooks/useCounter';

describe('Testing custom-hooks/useCounter', () => { 
  test('debe retornar los valores por defecto', () => {

    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset} = result.current;

    expect(counter).toBe(0);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  })

  test('debe retornar el counter con el valor 100', () => {
    
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);

  })

  
  test('debe incrementar el contador', () => {

    const { result } = renderHook(() => useCounter());
    const { counter, increment} = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(3);
    
  });
  
  
  test('debe decrementar el contador', () => {
    
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;

    act(() => {
      decrement(3)
    })

    expect(result.current.counter).toBe(7);
  });
  
  test('debe decrementar el contador hasta 0', () => {
    const { result } = renderHook(() => useCounter(2));
    const { decrement } = result.current;

    act(() => {
      decrement(3);
    })

    expect(result.current.counter).toBe(0);
  });

  
  test('debe volver el contador al valor inicial', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;

    act(() => {
      decrement(30);
      reset();
    });

    expect(result.current.counter).toBe(100)
  });
  
  
 })
