function deepClone(obj) {
  // Check if the input is an object or an array, otherwise return the item
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // Initialize the cloned object or array
  let cloned;
  if (Array.isArray(obj)) {
    cloned = [];
  } else {
    cloned = {};
  }

  // Recursively copy properties or items
  for (const key in obj) {
    const value = obj[key];

    // If value is an object (but not null) or an array, recursively clone
    if (typeof value === 'object' && value !== null) {
      cloned[key] = deepClone(value);
    } else {
      // Copy value as is
      cloned[key] = value;
    }
  }

  return cloned;
}

Reflect
