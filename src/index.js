module.exports = function reverse (n) {
  const arr = Array.from(String(n));
  arr[0] === '-' ? arr.shift() : arr;
  let arrNum = arr.map(i => Number(i));
  console.log(arrNum);
  const newArr = arrNum.reverse();
  n = +newArr.join('');
  return n;
}
