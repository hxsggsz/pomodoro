import { render, screen } from "@testing-library/react";
import { FooterLinks } from "./footerLinks";
import { LinkedinLogo } from "phosphor-react";

describe("FooterLinks", () => {
  describe("when initialize", () => {
    it("render the component with correctly attributes", () => {
      render(
        <FooterLinks href="myLink" socialMedia="facebook" icon={LinkedinLogo} />
      );
      const component = screen.getByText(/facebook/i);
      expect(component).toBeInTheDocument();
    });
  });
});
