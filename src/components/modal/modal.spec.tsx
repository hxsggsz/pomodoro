import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./modal";

describe("Modal", () => {
  it("should render everything correctly", () => {
    render(
      <Modal.Root>
        <Modal.Body>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Content>Modal Content</Modal.Content>
        </Modal.Body>
      </Modal.Root>
    );

    expect(screen.getByText(/Modal Title/i)).toBeInTheDocument()
    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument()
  });
});
