function queueTime(customers, n) {
    // If there are no customers, total time is 0
    if (customers.length === 0) return 0;

    // Create an array to track the tills, initially all are empty
    const tills = Array(n).fill(0);

    // Iterate through each customer
    for (let time of customers) {
        // Assign the customer to the till which will be free the earliest
        tills[0] += time;

        // Re-sort the tills array to ensure the first till is always the next to become available
        tills.sort((a, b) => a - b);
    }

    // The total time will be the maximum time in the tills array
    return Math.max(...tills);
}

// Examples
console.log(queueTime([5, 3, 4], 1)); // Output: 12
console.log(queueTime([10, 2, 3, 3], 2)); // Output: 10
console.log(queueTime([2, 3, 10], 2)); // Output: 12
export default queueTime;