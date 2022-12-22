import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todo } from "./todo";

describe('<Todo/>', () => {
  it('should render the component', () => {
    render(<Todo />);

    const form = screen.getByTestId("form-add-todo");

    const input = screen.getByPlaceholderText(/ex: criar componente/i)

    userEvent.type(input, "aa");
    fireEvent.submit(form);

    //validando se o input é menor que 3 caracteres
    expect(screen.queryByText("a".repeat(1))).not.toBeInTheDocument();

    userEvent.type(input, "a".repeat(29));
    fireEvent.submit(form);

    //validando se o input é maior que 30 caracteres
    expect(screen.queryByText("aa")).not.toBeInTheDocument();
  });
});