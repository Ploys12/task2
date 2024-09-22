class StringUtils {
    static toUpperCase(str) {
      return str.toUpperCase();
    }
  
    static toLowerCase(str) {
      return str.toLowerCase();
    }
  
    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  
    static reverseString(str) {
      return str.split('').reverse().join('');
    }
  }
  
  module.exports = StringUtils;
  