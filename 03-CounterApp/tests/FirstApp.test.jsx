import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  // no hacer la prueba del snapshot en desarrollo
  // test("Debe hacer match con el snapshot", () => {
  //   const title = "title";
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("Debe mostrar el titulo en un h1", () => {
    const title = "title";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // Pruebas deben ser flexibles, no tan extrictas como:
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title); // toContain
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe mostrar subtitulo enviado por props", () => {
    const title = "title";
    const subtitle = "Soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
