import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/custom-hooks/useFetch';
import { useCounter } from '../../src/custom-hooks/useCounter';

jest.mock('../../src/custom-hooks/useFetch');
jest.mock('../../src/custom-hooks/useCounter');


describe('Testing 03-examples/MultipleCustomHooks', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
     })

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('debe mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });
    
    render( <MultipleCustomHooks />);
    expect(screen.getByText('loading...'));
    expect(screen.getByText('Multiple Custom Hooks'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeTruthy();

  })

   test('debe mostrar un quote', () => {

     useFetch.mockReturnValue({
      data: {name: 'Pablo', species: 'hola mundo'},
      isLoading: false,
      hasError: null
     })
     
     render( <MultipleCustomHooks />);
     screen.debug();
     expect(screen.getByText('hola mundo'));
     expect(screen.getByText('Pablo'));
     
     const button = screen.getByRole('button', {name: 'Next quote'});
     expect(button.disabled).toBeFalsy();

   })

   
   test('debe llamar incrementar', () => {

     useFetch.mockReturnValue({
      data: [{name: 'Pablo', species: 'hola mundo'}],
      isLoading: false,
      hasError: null
     })
     
     render( <MultipleCustomHooks />);
     
     const nextButton = screen.getByRole('button', { name: 'Next quote' });
     fireEvent.click( nextButton );

     expect(mockIncrement).toHaveBeenCalled();
     
   });
   
 })