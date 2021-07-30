const { palindrome } = require("../palindrome");

describe("Palindrome", () => {
  test("of mindhub", () => {
    const result = palindrome("mindhub");
    expect(result).toBe("buhdnim");
  });

  test("of empty string", () => {
    const result = palindrome("");
    expect(result).toBe("");
  });

  test("of undefined", () => {
    const result = palindrome();
    expect(result).toBeUndefined();
  });
});
