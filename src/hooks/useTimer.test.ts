import { useTimer } from './useTimer'
import { renderHook, act } from '@testing-library/react'

describe('useTimer hook', () => {
  it('should pause be true', () => {
    const { result } = renderHook(() => useTimer('test', 1))

    expect(result.current.pause).toBeTruthy()
  })

  it('should make pause be falsy', async () => {
    const { result } = renderHook(() => useTimer('test', 1))

    expect(result.current.pause).toBeTruthy()

    act(() => result.current.handlePause())

    expect(result.current.pause).toBeFalsy()
  })

  it('handleRestart should restart de minutes', () => {
    const { result } = renderHook(() => useTimer('test', 1))

    const minutes = result.current.minutes

    act(() => {
      result.current.handleRestart()
    })

    expect(minutes).toBe(1)
  })
})
