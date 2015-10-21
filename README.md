# string-helper

[![Build Status](https://travis-ci.org/stone-payments/string-helper.svg?branch=master)](https://travis-ci.org/stone-payments/string-helper)
[![Coverage Status](https://coveralls.io/repos/stone-payments/string-helper/badge.svg?branch=master&service=github)](https://coveralls.io/github/stone-payments/string-helper?branch=master)

Do things that lodash doesn't. 

# How to install

```bash
npm install string-helper
```

# Usage

## renameKeys(obj, [fn = lodash.snakeCase])

```js
import { renameKeys, pascalCase } from 'string-helper';

const obj = { camelCase: 'camelCase' };

console.log(renameKeys(obj));
// => { camel_case: 'cameCase' };

console.log(renameKeys(obj, pascalCase));
// => { PascalCase: 'cameCase' };
```

## pascalCase(str)

```js
import { pascalCase } from 'string-helper';

const str = 'snake_case'.

console.log(pascalCase(str));
// => 'SnakeCase';
```
