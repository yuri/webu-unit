function isOdd(value) {
  return (value % 2 !== 0);
}

describe('isEven', function () {
  it('should handle positive ints', function () {    
    expect(isOdd(1)).to.be.true;
    expect(isOdd(2)).to.be.false;
    expect(isOdd(3)).to.be.true;
  });
  it('should handle negative ints', function () {    
    expect(isOdd(-1)).to.be.true;
  });
});