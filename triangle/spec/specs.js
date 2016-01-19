describe("triangleType", function() {
  it("it is not a triangle when length1 and length2 are <= to length3", function () {
    expect(triangleType(1,1,2)).to.equal('Not a triangle');
  });

  it("it is an equilateral triangle when length1, length2 and length 3 are equal", function () {
    expect(triangleType(1,1,1)).to.equal('Equilateral Triangle');
  });

  it("it is an isoceles triangle when the sum of two equal sides is greater in length than the remaining third side", function () {
    expect(triangleType(2,2,1)).to.equal('Isoceles Triangle');
  });

  it("it is a scalene triangle when the sum of two unequal sides is greater in length than the remaining third side", function () {
    expect(triangleType(2,3,4)).to.equal('Scalene Triangle');
  });

});












// it("it is false for an input that is NaN", function() {
//   expect(triangleType("a", "b", "c")).to.equal("Please input integers");
// });
