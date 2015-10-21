import lodash from 'lodash';

export function renameKeys(data, fn = lodash.snakeCase) {
  const finalData = typeof data !== 'object'
    || typeof data === 'undefined' || data === null;

  if (finalData) {
    return data;
  }

  const result = {};
  const keys = Object.keys(data);

  keys.forEach((key) => {
    result[fn(key)] = renameKeys(data[key]);
  });

  return result;
}

export function pascalCase(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return lodash.capitalize(lodash.camelCase(str));
}
