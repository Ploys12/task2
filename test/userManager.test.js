const UserManager = require('../src/userManager');
const assert = require('assert');

describe('UserManager Tests', () => {
  let userManager = new UserManager();

  it('should add a user', () => {
    const user = { id: 1, name: 'John' };
    userManager.addUser(user);
    assert.strictEqual(userManager.users.length, 1);
  });

  it('should remove a user', () => {
    userManager.removeUser(1);
    assert.strictEqual(userManager.users.length, 0);
  });

  it('should find a user by ID', () => {
    const user = { id: 2, name: 'Jane' };
    userManager.addUser(user);
    assert.strictEqual(userManager.findUserById(2).name, 'Jane');
  });

  it('should return all users', () => {
    assert.strictEqual(userManager.getAllUsers().length, 1);
  });
});
