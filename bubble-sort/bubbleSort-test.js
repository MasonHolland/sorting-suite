const assert = require('chai').assert
const bubbleSort = require('./bubbleSort')

describe("bubbleSort can sort an array", function() {
  context("when given an unorganized array", function() {
    it("returns it sorted", function() {
      assert.deepEqual(bubbleSort([1,5,4,2,3]), [1,2,3,4,5]);
    });
  });
});
