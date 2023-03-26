import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainAppLegacy } from "../../src/09-useContext/MainAppLegacy";

describe('Testing MainApp', () => {

  test('debe mostrar el HomePage', () => {
    render(
      <MemoryRouter >
        <MainAppLegacy />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeTruthy();

  });
  
  test('debe mostrar el LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainAppLegacy />
      </MemoryRouter>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();

  });

  test('debe mostrar el AboutPage', () => {
    render(
      <MemoryRouter>
        <MainAppLegacy />
      </MemoryRouter>
    );
    
    const aboutLink = screen.getByRole('link', {name: 'About'});
    fireEvent.click(aboutLink);
    screen.debug();
    
    expect(screen.getByText('AboutPage')).toBeTruthy();

  });

})