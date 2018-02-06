function sumFor(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

function sumWhile(numbers) {
  let sum = 0;
  let i = 0;

  while (i < numbers.length) {
    sum += numbers[i++];
  }

  return sum;
}

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumRecursion(numbers.slice(1));
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, (memo, num) => memo + num, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
