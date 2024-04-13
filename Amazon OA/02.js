function getPrioritiesAfterExecution(priority) {
  while (true) {
    // Count the occurrences of each priority
    let counts = new Map();
    for (let p of priority) {
      if (p > 0) counts.set(p, (counts.get(p) || 0) + 1);
    }

    // Find the maximum priority shared by at least 2 processes
    let maxPriority = 0;
    for (let p of counts.keys()) {
      if (counts.get(p) >= 2 && p > maxPriority) {
        maxPriority = p;
      }
    }

    // If there is no such priority or p = 0, terminate the algorithm
    if (maxPriority === 0) break;

    // Find the first two processes with the maximum priority
    let firstIndex = priority.indexOf(maxPriority);
    let secondIndex = priority.indexOf(maxPriority, firstIndex + 1);

    // Remove the first process (by setting its priority to 0)
    priority[firstIndex] = null;

    // Update the priority of the second process to floor(p/2)
    priority[secondIndex] = Math.floor(maxPriority / 2);
  }

  // Filter out the removed processes (those set to 0)
  return priority.filter((p) => p !== null);
}
// Example usage
// const priorities = [6, 6, 6, 1, 2, 2];
const priorities = [4, 4, 2, 1];
// const priorities = [2, 1, 5, 10, 10, 1];
const finalPriorities = getPrioritiesAfterExecution(priorities);
console.log(finalPriorities);
