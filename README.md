# add item in array

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Just a simple function to add an item into an Array. Works well in both, the browser & node.

### install

```bash
npm i -S array-add-item
```

### and use it

```javascript
import addItemInArray from 'array-add-item'
// OR
const addItemInArray = require('array-add-item')

const abcde = addItemInArray(['a', 'c', 'd', 'e'], 'b', 1)
console.log(abcde) // ['a', 'b', 'c', 'd', 'e']
```

### behavior

- `addItemInArray` is a pure function, it does not mutate the provided array.
- item is added at the end if no position is provided or it is out of the range of the array (grater than `arr.length` or less than 0).
- returns the array if the position provided is not a number or is a float number.

### FAQ

- *Why such small module?*: [Sindre](https://github.com/sindresorhus/) gives a [good answer](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328) to this.
