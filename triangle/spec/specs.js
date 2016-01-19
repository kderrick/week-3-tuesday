describe("triangleType", function() {
  it("it is false for an input that is NaN", function() {
    expect(triangleType("x", "y", "z")).to.equal(false);
  });
});
