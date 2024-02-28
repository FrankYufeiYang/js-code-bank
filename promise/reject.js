new Promise(function(resolve, reject) {
setTimeout(() => {
reject(new Error("Whoops!"))
}, 1000);
}).catch(()=> console.log("catch clause trigger"));

