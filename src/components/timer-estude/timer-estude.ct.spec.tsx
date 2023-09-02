import { test, expect } from "@playwright/experimental-ct-react";
import { TimerEstude } from "./timer-estude";

test.describe("timer-estude", () => {
  test.describe("when initialize", () => {
    test("renders correctly", async ({ mount }) => {
      const component = await mount(<TimerEstude />);
      await expect(component).toContainText("25");
    });
  });

  test.describe("when click on start button", () => {
    test("start the timer", async ({ mount }) => {
      const component = await mount(<TimerEstude />);

      await expect(component).toContainText("25");

      const startButton = component.getByRole("button", {
        name: "start",
        exact: true,
      });

      await startButton.click();
      await expect(component).not.toContainText("25");
    });

    test("start button hidden", async ({ mount }) => {
      const component = await mount(<TimerEstude />);

      await expect(component).toContainText("25");

      const startButton = component.getByRole("button", {
        name: "start",
        exact: true,
      });

      await startButton.click();
      await expect(startButton).toBeHidden();
    });

    test("shows stop button", async ({ mount }) => {
      const component = await mount(<TimerEstude />);

      await expect(component).toContainText("25");

      const startButton = component.getByRole("button", {
        name: "start",
        exact: true,
      });

      const stopButton = component.getByRole("button", {
        name: "stop",
      });

      await startButton.click();
      await expect(stopButton).toBeVisible();
    });
  });

  test.describe("when click on restart button", () => {
    test("restart the timer", async ({mount}) => {
      const component = await mount(<TimerEstude />);

      await expect(component).toContainText("25");

      const startButton = component.getByRole("button", {
        name: "start",
        exact: true,
      });
      
      const restartButton = component.getByRole("button", {
        name: "restart",
        exact: true,
      });

      await startButton.click();
      await expect(component).not.toContainText("25");
      await restartButton.click();
      await expect(component).toContainText("25");
    })
  })
});
