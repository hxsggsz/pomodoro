import { render, screen, fireEvent } from "@testing-library/react";

describe("NavBar", () => {
  const onClickMock = jest.fn();
  it("should render everything correctly", () => {
    render(
      <button onClick={onClickMock}>enviar</button>
    );

    const testButton = screen.getByText("enviar")
    fireEvent.click(testButton)

    expect(testButton).toBeDefined()
    expect(onClickMock).toHaveBeenCalled()
  });
});