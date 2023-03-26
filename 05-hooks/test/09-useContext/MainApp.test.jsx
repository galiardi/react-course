import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Testing MainApp', () => {

  test('debe mostrar el home page', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', {name: 'Home'});
    fireEvent.click(homeLink);

    screen.debug();
  });
  

})