import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Testing CounterApp", () => {
  const initialValue = 10;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("Debe incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("Debe decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("Debe funcionar el boton reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    screen.debug();
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    screen.debug();
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
