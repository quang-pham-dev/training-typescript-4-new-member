let oddNumbers: number[] = [];

oddNumbers.push(1);

oddNumbers = [1, 3, 5];

console.log(oddNumbers[0]);
console.log(oddNumbers[1]);
console.log(oddNumbers[2]);

for (let i in oddNumbers) {
  console.log('For in', oddNumbers[i]);
}

oddNumbers.forEach(function (num) {
  console.log('For each', num);
});
