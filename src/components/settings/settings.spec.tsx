import { render, screen, waitFor } from "@testing-library/react";
import { Settings } from "./settings";
import userEvent from "@testing-library/user-event";

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

describe("settings", () => {
  describe("when initilize", () => {
    it("renders the component correctly", () => {
      render(<Settings handleTheme={() => {}} />);
      expect(screen.getByText(/lang-message/i)).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    it('calls the handleTheme function', async () => {
      const mockHandleTheme = jest.fn();
      render(<Settings handleTheme={mockHandleTheme} />);
      userEvent.click(screen.getByTestId('button-theme'))
      await waitFor(() => expect(mockHandleTheme).toHaveBeenCalledTimes(1));
    });
  });
});
