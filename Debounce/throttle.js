function throttle(mainFunction, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      mainFunction.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}
// Define a function that fetches some data from an API
function fetchData() {
  console.log("Fetching data...");
  // Simulate an API call with a random delay
  setTimeout(() => {
    console.log("Data fetched!");
  }, Math.random() * 1000);
}

// Throttle the fetchData function with a delay of 5000 ms
const throttledFetchData = throttle(fetchData, 5000);

// Add an event listener to the window scroll event that calls the throttledFetchData function
window.addEventListener("scroll", throttledFetchData);