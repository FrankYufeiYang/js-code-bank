function ConstructorExample() {
  console.log(this);
  this.value = 10;
  console.log(this);
  return this
}
let one = ConstructorExample.call(1);
console.log(one.value);

