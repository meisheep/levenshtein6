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
l.get('same', 'same'); // 0
```
or use static method
```
const Levenshtein = require('levenshtein6');
Levenshtein.get('我愛你', '我愛我恨你'); // 2
```

# Testing
```
npm run test
```

# License
MIT
