const should = require('chai').should();
const levenshtein = require('../Levenshtein');

describe('# Levenshtein.get()', () => {
  it('same, same', () => {
    levenshtein.get('same', 'same').should.equal(0);
  });

  it('kitten, kitchen', () => {
    levenshtein.get('kitten', 'kitchen').should.equal(2);
  });

  it('king, queen', () => {
    levenshtein.get('king', 'queen').should.equal(5);
  });

  it('我愛你, 我愛我恨你', () => {
    levenshtein.get('我愛你', '我愛我恨你').should.equal(2);
  })
});
