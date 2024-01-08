import { it, expect, describe } from "vitest"
import { add, pipeLine } from "./compose"

describe("compose add", () => {
  it("should be hello123", () => {
    const result = add("hello")
    expect(result).toEqual("hello123")
  })
})

describe("handle pipe", () => {
  it("should 31", () => {
    const result = pipeLine(10)
    expect(result).toEqual(31)
  })
})
