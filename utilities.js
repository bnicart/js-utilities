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
// Prerequisite: Array.prototype.first
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
  });
}

// Flatten two arrays
Array.prototype.flatten = function() {
  return this.reduce(function(a,b) {
    return a.concat(b)
  }, [])
}

// Find an object in an array of objects using
// a property-value
// Prerequisite: Array.prototype.first

Array.prototype.find_by = function(prop, val) {
  return this.filter(function(obj) {
    return obj[prop] === val
  }).first()
}
