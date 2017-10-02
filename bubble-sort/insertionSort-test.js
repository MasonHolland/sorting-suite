const assert = require('chai').assert
const insertionSort = require('./insertionSort')

describe("insertionSort can sort an array", function() {
  context("when given an unorganized array", function() {
    it("returns it sorted", function() {
      assert.deepEqual(insertionSort([5,2,1,3,4]), [1,2,3,4,5]);
    });
  });
});
