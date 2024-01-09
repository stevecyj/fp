import { it, expect, describe } from "vitest"
import { transform } from "./upperCase"

describe("upper case", () => {
  it("should CLICK BUTTON", () => {
    const result = transform("click button")
    expect(result).toBe("CLICK_BUTTON")
  })
})
