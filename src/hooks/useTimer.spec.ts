import { useTimer } from "./useTimer";
import { renderHook, act } from "@testing-library/react";

describe("useTimer hook", () => {
  it("should pause be true", () => {
    const { result } = renderHook(() => useTimer(1));

    expect(result.current.handlePause).toBeTruthy();
  });

  it("handleRestart should restart de minutes", () => {
    const { result } = renderHook(() => useTimer(1));

    const minutes = result.current.minutes;

    act(() => {
      result.current.handleRestart();
    });

    expect(minutes).toBe(1);
  });
});
