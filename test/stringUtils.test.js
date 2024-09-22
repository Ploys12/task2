const StringUtils = require('../src/stringUtils');
const assert = require('assert');

describe('StringUtils Tests', () => {
  it('should convert string to uppercase', () => {
    assert.strictEqual(StringUtils.toUpperCase('hello'), 'HELLO');
  });

  it('should convert string to lowercase', () => {
    assert.strictEqual(StringUtils.toLowerCase('HELLO'), 'hello');
  });

  it('should capitalize string', () => {
    assert.strictEqual(StringUtils.capitalize('hello'), 'Hello');
  });

  it('should reverse string', () => {
    assert.strictEqual(StringUtils.reverseString('hello'), 'olleh');
  });
});
