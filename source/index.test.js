import source from "."

test("says ship it", () => (
  expect(source()).toBe("ship it!")
))
