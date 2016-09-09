class Levenshtein {
  constructor(str1 = '', str2 = '') {
    this.str1 = str1;
    this.str2 = str2;
  }

  static calc(str1, str2) {
    if (str1 === str2) return 0;
    if (!str1.length) return str2.length;
    if (!str2.length) return str1.length;

    let curCell;
    let leftCell;
    let diagCell;
    const prevRow = [...Array(str2.length + 1).keys()];
    for (let i = 0; i < str1.length; i++) {
      diagCell = i;
      leftCell = i + 1;
      for (let j = 0; j < str2.length; j++) {
        curCell = str1[i] === str2[j] ?
          diagCell : Math.min(...[diagCell, prevRow[j + 1], leftCell]) + 1;
        diagCell = prevRow[j + 1];
        prevRow[j] = leftCell;
        leftCell = curCell;
      }
      prevRow[prevRow.length - 1] = curCell;
    }
    return curCell;
  }

  get(str1 = this.str1, str2 = this.str2) {
    return Levenshtein.calc(str1, str2);
  }

  static get(str1 = '', str2 = '') {
    return this.calc(str1, str2);
  }
}

module.exports = Levenshtein;
