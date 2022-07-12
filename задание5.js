const x = 4;
const n = 3;

const stepen=(x, n)=> {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(stepen (x, n));