const reversString = require('./reverseString');

test("It is equal to olleh", () => {
    expect(reversString("helloh")).toBe("holleh")
  });