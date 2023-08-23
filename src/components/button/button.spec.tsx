import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("button", () => {
  describe("when initialize", () => {
    it("shows on screen the button text", () => {
      render(<Button>enviar</Button>);
 
      expect(screen.getByText(/enviar/i)).toBeInTheDocument();
    });
  });

  describe("when click", () => {
    it("calls the onClick function", async () => {
      const onClickMock = jest.fn();
      render(<Button onClick={onClickMock}>enviar</Button>);

      const testButton = screen.getByText("enviar");
      userEvent.click(testButton);

      expect(testButton).toBeDefined();

      await waitFor(() => expect(onClickMock).toHaveBeenCalledTimes(1));
    });
  });
});
