import { it, expect, describe } from "vitest"
import { curryAdd } from "./r-curry"

describe("ramda curry", () => {
  it("should be 6", () => {
    expect(curryAdd(1, 2, 3)).toBe(6)
  })
})
