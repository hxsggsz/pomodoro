import { render, screen, waitFor } from "@testing-library/react";
import { Items } from "./items";
import userEvent from "@testing-library/user-event";

describe("Items", () => {
  describe("when initialize", () => {
    it("renders the component correclty", () => {
      render(<Items item="task" deleteItem={() => {}} updateItem={() => {}} />);
      expect(screen.getByText(/task/i)).toBeInTheDocument();
    });
  });

  describe("when click on update button", () => {
    it("shows the edit input", async () => {
      render(<Items item="task" deleteItem={() => {}} updateItem={() => {}} />);

      expect(screen.queryByTestId(/input/i)).not.toBeInTheDocument();
      userEvent.click(screen.getByTestId(/update-button/i));
      await waitFor(() =>
        expect(screen.getByTestId(/input/i)).toBeInTheDocument()
      );
    });

    it("calls the updateItemMock funcion when write on input", async () => {
      const updateItemMock = jest.fn();
      render(
        <Items item="task" deleteItem={() => {}} updateItem={updateItemMock} />
      );

      expect(screen.queryByTestId(/input/i)).not.toBeInTheDocument();
      userEvent.click(screen.getByTestId(/update-button/i));
      await waitFor(() =>
        expect(screen.getByTestId(/input/i)).toBeInTheDocument()
      );
      userEvent.type(screen.getByTestId(/input/i), "update task");
      await waitFor(() => expect(updateItemMock).toHaveBeenCalledTimes(11));
    });
  });

  describe("when click on delete button", () => {
    it("calls the deleteItemMock function", async () => {
      const deleteItemMock = jest.fn();
      render(
        <Items item="task" deleteItem={deleteItemMock} updateItem={() => {}} />
      );

      userEvent.click(screen.getByTestId(/delete-button/i));
      await waitFor(() => expect(deleteItemMock).toHaveBeenCalledTimes(1));
    });
  });
});
