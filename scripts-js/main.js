function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


const numDouble = numbers.map(n => {
  const num =  n * 2;
  return num;
});

console.log(numDouble);

//
function arrDoubleRe(numArr) {
  const numDoubleArr = numArr.map(num => {
    const doubleNum = num * 2;
    return doubleNum;
  });
  return numDoubleArr;
}

const a = arrDoubleRe([3, 4, 5]);
console.log(a);
