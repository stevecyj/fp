import { it, expect, describe } from "vitest"
import { memorizeAdd } from "./cache"

describe("cache", () => {
  it("should ", () => {
    const result = memorizeAdd(1, 2)
    expect(result).toBe(3)
  })
})
