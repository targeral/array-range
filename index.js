const isNumber = require('is-number-g')

const range = (start, end) => {
  let n0 = isNumber(start)
  let n1 = isNumber(end)

  !n0 && (start = 0);
  (n0 && !n1) && (end = start, start = 0);
  (!n0 && !n1) && (start = 0, end = start);

  start = start | 0
  end = end | 0

  let len = end - start
  if (len < 0) {
    throw new Error('array length must be positive')
  }
  
  let arr = new Array(len)
  for (let i = 0, temp = start; i < len; i++, temp++) {
    arr[i] = temp
  }

  return arr
}

module.exports = range
