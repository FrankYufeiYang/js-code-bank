const debounce = (mainFunction, delay) => {
  // Declare a variable called 'timeoutID' to store the timer ID
  let timeoutID;

  // Return an anonymous function that takes in any number of arguments
  return function (...args) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    // Keep a reference to `this` so that
    // func.apply() can access it.
    const context = this;
    clearTimeout(timeoutID);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timeoutID = setTimeout(() => {
      mainFunction.apply(context, args);
    }, delay);
  };
};

// Define a function called 'searchData' that logs a message to the console
function searchData(a,b) {
  console.log(a,b);
}

// Create a new debounced version of the 'searchData' function with a delay of 3000 milliseconds (3 seconds)
const debouncedSearchData = debounce(searchData, 3000);

// Call the debounced version of 'searchData'
debouncedSearchData("1", "a");