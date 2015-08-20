/*
 * This file contains Javascript functions, prototypes, etc. which hopes to
 * help lessen some coding.
 *
 */


/*
 * Array Prototypes
 */

// Returns the first element of a given array
Array.prototype.first = function() {
  return this[0];
}

// Returns the last element of a given array
Array.prototype.last = function() {
  return this[this.length-1];
}

// Finds an object element in an array of objects with 
// the given 'id'
Array.prototype.find = function(id) {
  return this.filter(function(a) {
    if ( a.id == id ) {
      return a;
    }
  }).first();
}

// Removes null and empty string elements
Array.prototype.clean = function() {
  return this.filter(function(a) { 
    return a;
  }
}
