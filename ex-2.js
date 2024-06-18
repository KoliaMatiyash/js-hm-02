const numbers = [23, 1, 45, 87, 4, 55, 6];
let max_number = 0;
for (const number of numbers) {
  if (number > max_number) {
    max_number = number;
  }
}
console.log(max_number);
