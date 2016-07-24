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
function addItemInArray(arr, itemToAdd, index = -1) {
  if (typeof index !== 'number') {
    return arr
  }
  const inRange = index > -1 && index <= arr.length
  const i = inRange ? index : arr.length
  return [
    ...arr.slice(0, i),
    itemToAdd,
    ...arr.slice(i)
  ]
}

module.exports = addItemInArray
