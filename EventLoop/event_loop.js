setTimeout(() => console.log(2), 0);
 
new Promise((resolve, reject) => {
  console.log(3);
  resolve(1);
})
.then(i => {
  console.log(i);
  Promise.resolve().then(() => console.log(4))
});

console.log(5);