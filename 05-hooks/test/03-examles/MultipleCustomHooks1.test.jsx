import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from '../../src/custom-hooks/useFetch';
import { useCounter } from '../../src/custom-hooks/useCounter'

jest.mock('../../src/custom-hooks/useFetch');
jest.mock('../../src/custom-hooks/useCounter');

describe('Testing MultipleCustomHooks', () => { 

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('debe mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })
    
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Multiple Custom Hooks'));
    expect(screen.getByText('loading...'));

    const nextButton = screen.getByRole('button', {name: 'Next quote'});
    expect(nextButton.disabled).toBeTruthy();

  });


  test('debe mostrar un quote', () => {

    const data = { name: 'Pablo', species: 'Pueden llevarse nuestras vidas, pero jamas nuestra libertad!!!!!!!1'};

    useFetch.mockReturnValue({
      data ,
      isLoading: false,
      hasError: null
    })

    render(<MultipleCustomHooks />);
    expect(screen.getByText(data.species));
    expect(screen.getByText(data.name));  
    
    const nextButton = screen.getByRole('button', { name: 'Next quote'});
    expect(nextButton.disbled).toBeFalsy();
  })


  test('debe llamar incrementar', () => {
      
      render(<MultipleCustomHooks />)
      
      const nextButton = screen.getByRole('button', {name: 'Next quote'});
      fireEvent.click(nextButton);
      
      expect(mockIncrement).toHaveBeenCalled();

    })

 })