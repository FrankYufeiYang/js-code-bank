function sum(A){
  return function (B){
    return B === undefined ? A : sum(A+B);
  }
}
// const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;


console.log(sum()())