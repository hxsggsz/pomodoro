import { test, expect } from "@playwright/experimental-ct-react";
import { Todo } from "./todo";

test.describe("todo", () => {
  test.describe("when initialize", () => {
    test("renders correctly", async ({ mount }) => {
      const component = await mount(<Todo />);
      await expect(
        component.getByRole("button", { name: "submit" })
      ).toBeVisible();
    });
  });
});
