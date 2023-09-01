import { render, screen, waitFor } from "@testing-library/react";
import { Select } from "./select";
import userEvent from "@testing-library/user-event";

const mockOptions = [{ option: "select-test", value: "test" }];

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe("Select", () => {
  describe("when initilize", () => {
    it("renders the component correctly", () => {
      render(<Select handleSelect={() => {}} options={[]} />);

      expect(screen.getByText(/lang-message/i)).toBeInTheDocument();
    });
  });

  describe("when open the select", () => {
    it("shows on screen the select option", async () => {
      render(<Select handleSelect={() => {}} options={mockOptions} />);

      expect(screen.queryByText(/select-test/i)).not.toBeInTheDocument();
      userEvent.click(screen.getByTestId(/button/i));
      await waitFor(() =>
        expect(screen.getByText(/select-test/i)).toBeInTheDocument()
      );
    });

    it("calls handleSelect function when select an option", async () => {
      const mockHandleSelect = jest.fn();
      render(<Select handleSelect={mockHandleSelect} options={mockOptions} />);

      userEvent.click(screen.getByTestId(/button/i));
      await waitFor(() =>
        expect(screen.getByText(/select-test/i)).toBeInTheDocument()
      );
      userEvent.click(screen.getByText(/select-test/i));
      await waitFor(() => expect(mockHandleSelect).toHaveBeenCalledTimes(1));
    });
  });
});
