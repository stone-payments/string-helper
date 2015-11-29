# string-helper

[![Build Status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev dependencies][dependencies-dev-image]][dependencies-dev-url]

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


[ci-url]: https://travis-ci.org/stone-pagamentos/string-helper
[ci-image]: https://travis-ci.org/stone-pagamentos/string-helper.svg?branch=master
[coverage-url]: https://coveralls.io/github/stone-pagamentos/string-helper?branch=master
[coverage-image]: https://coveralls.io/repos/stone-pagamentos/string-helper/badge.svg?branch=master&service=github
[dependencies-url]: https://david-dm.org/stone-pagamentos/string-helper
[dependencies-image]: https://david-dm.org/stone-pagamentos/string-helper.svg
[dependencies-dev-url]: https://david-dm.org/stone-pagamentos/string-helper#info=devDependencies&view=table
[dependencies-dev-image]: https://david-dm.org/stone-pagamentos/string-helper/dev-status.svg
