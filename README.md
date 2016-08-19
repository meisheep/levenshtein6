# levenshtein6
A Levenshtein algorithm implementation written in ES6.

# Installation
```
npm install levenshtein6
```

# Examples
```
const Levenshtein = require('levenshtein6');
const l = new Levenshtein('kit', 'cat');
l.get();  // 2
```
or just
```
const levenshtein = require('levenshtein6');
levenshtein.get('我愛你', '我愛我恨你'); // 2
```

# Testing
```
npm run test
```

# License
MIT
