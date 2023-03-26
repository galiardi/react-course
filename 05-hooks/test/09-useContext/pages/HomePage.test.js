import { render, screen } from "@testing-library/react";
import { HomePage } from "../../../src/09-useContext/pages/HomePage";
import { UserContext } from '../../../src/09-useContext/context/UserContext';

describe("Testing HomePage (UserContext)", () => {

  const user = {
    id: 1,
    name: 'Pablo'
  }

  test("debe mostrar el componente sin el usuario", () => {

    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>);

    // expect(screen.getByText('Welcome'));
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null')

  });
  
  test('debe mostrar el componente con el nombre del usuario', () => {

    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
    // expect(screen.getByText('Welcome Pablo'));
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe(JSON.stringify(user,null,3));


  });
  
});
