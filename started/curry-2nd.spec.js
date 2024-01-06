import { it, expect, describe } from "vitest"
import { curryAdd } from "./curry-2nd"

describe("curry(1,2,3)", () => {
  it("should be 6", () => {
    const result = curryAdd(1, 2, 3)
    expect(result).toBe(6)
  })
})

describe("curry(1)(2,3)", () => {
  it("should be 6", () => {
    const result = curryAdd(1)(2, 3)
    expect(result).toBe(6)
  })
})

describe("curry(1)(2)(3)", () => {
  it("should be 6", () => {
    const result = curryAdd(1)(2)(3)
    expect(result).toBe(6)
  })
})
