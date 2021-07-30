const { sum } = require("../operations/sum");

describe("Adds", () => {
  test("1 + 2 expected to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("-10 + 5 expected to equal -5", () => {
    expect(sum(-10, 5)).toBe(-5);
  });

  test("with one undefined expected to throw error", () => {
    try {
      expect(sum({}, 5)).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe("Parameter not valid");
    }
  });

  test("with one null parameter expected to throw error", () => {
    try {
      expect(sum(null, 5)).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe("Parameter not valid");
    }
  });

  test("with Not a Number parameter expected to throw error", () => {
    try {
      expect(sum("test", 4)).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe("Parameter not valid");
    }
  });
});
