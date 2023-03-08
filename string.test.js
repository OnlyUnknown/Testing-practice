const stringLength = require('./string');



test("Is 5", () => {
  expect(stringLength("asdfg")).toBe(5)  
}

)

test("More than 10 or Less than 1", () => {
  function moreOrLess() {
    stringLength("");
  }
 expect(moreOrLess).toThrow(Error)
  }
)

