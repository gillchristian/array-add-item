import test from 'ava'
import deepFreeze from 'deep-freeze-strict'

import addItemInArray from '../'

const arr = ['a', 'c', 'd', 'e', 'f']
deepFreeze(arr)

test('returns a new array with the added value at the provided position', t => {
  let expected = ['a', 'b', 'c', 'd', 'e', 'f']
  let actual = addItemInArray(arr, 'b', 1)
  t.deepEqual(actual, expected)

  expected = ['a', 'c', 'd', 'e', 'b', 'f']
  actual = addItemInArray(arr, 'b', arr.length - 1)
  t.deepEqual(actual, expected)
})

test('when no position is provieded, the item is added at the end', t => {
  const expected = ['a', 'c', 'd', 'e', 'f', 'b']
  const actual = addItemInArray(arr, 'b')
  t.deepEqual(actual, expected)
})

test('adds an item at the begining of the array', t => {
  const expected = ['b', 'a', 'c', 'd', 'e', 'f']
  const actual = addItemInArray(arr, 'b', 0)
  t.deepEqual(actual, expected)
})

test('adds an item at the end of the array', t => {
  const expected = ['a', 'c', 'd', 'e', 'f', 'b']
  const actual = addItemInArray(arr, 'b', arr.length)
  t.deepEqual(actual, expected)
})

test(`returns the original array when index typeof !== "number"
      or it is a float number`, t => {
  const expected = arr
  let actual = addItemInArray(arr, 'b', 'a')
  t.deepEqual(actual, expected)

  actual = addItemInArray(arr, 'b', 1.23)
  t.deepEqual(actual, expected)
})

test('adds item at the end when index is out of range', t => {
  const expected = ['a', 'c', 'd', 'e', 'f', 'b']
  let actual = addItemInArray(arr, 'b', 10)
  t.deepEqual(actual, expected)

  actual = addItemInArray(arr, 'b', -2)
  t.deepEqual(actual, expected)
})
