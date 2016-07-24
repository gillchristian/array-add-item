'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Adds an item at the Nth position on the array
 *
 * This is a pure function, does not mutate the provided array,
 * instead it returns a new one
 *
 * @param {Array<Any>}  array to update
 * @param {Any}   the new item
 * @param {Number?}  position
 * @returns {Array}  modified array
 */
function addItemInArray(arr, itemToAdd) {
  var index = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];

  if (typeof index !== 'number' || index % 1 !== 0) {
    return arr;
  }
  var inRange = index > -1 && index <= arr.length;
  var i = inRange ? index : arr.length;
  return [].concat(_toConsumableArray(arr.slice(0, i)), [itemToAdd], _toConsumableArray(arr.slice(i)));
}

module.exports = addItemInArray;
