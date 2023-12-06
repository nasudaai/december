function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
    
  }

  return total;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(total);
