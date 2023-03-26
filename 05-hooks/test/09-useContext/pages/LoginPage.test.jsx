import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../../src/09-useContext/pages/LoginPage";

describe('Testing LoginPage', () => {

  
  test('debe mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{user: null}} >
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    
  });
  

  test('debe ejecutar setUser al hacer click en el boton', () => {
  
    const mockSetUser = jest.fn();
  
    render(
    <UserContext.Provider value={{ setUser: mockSetUser}}>
      <LoginPage />
    </UserContext.Provider>);

    const button = screen.getByRole('button', {name: 'Set User'});
    fireEvent.click(button);

    expect(mockSetUser).toHaveBeenCalledWith({name: 'Jhon Doe'});

  })
});