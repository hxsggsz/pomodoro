import { test, expect } from "@playwright/experimental-ct-react";
import { Select } from "./select";

const mockOptions = [{ option: "select-test", value: "test" }];

test("open the select on click", async ({ mount }) => {
  let selectedOption: string | null = null;
  const select = await mount(
    <Select
      handleSelect={(option) => (selectedOption = option)}
      options={mockOptions}
    />
  );
  await select.getByText('lang-message').click()
  await select.getByText('select-test').click()
  expect(selectedOption).toBe('test')
});
