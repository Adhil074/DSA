/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // Create a map to store the frequency of each task
  let seen = new Map();
  // Loop through the tasks array to count each task's frequency
  for (let i = 0; i < tasks.length; i++) {
    // If the task is not yet in the map, set its count to 1
    if (!seen.has(tasks[i])) {
      seen.set(tasks[i], 1);
    } else {
      // If it already exists, increment its count by 1
      seen.set(tasks[i], seen.get(tasks[i]) + 1);
    }
  }
  // Initialize a max-heap to always get the task with the highest frequency first
  let maxHeap = new MaxPriorityQueue();
  // Loop through the map entries to push all frequencies into the max-heap
  for (let [task, freq] of seen.entries()) {
    maxHeap.enqueue(freq);
  }
  // Keep track of total time units taken to finish all tasks
  let time = 0;
  // Loop until the heap is completely empty (all tasks are finished)
  while (maxHeap.size() > 0) {
    // Temporary array to store frequencies that still need to be executed
    let temp = [];
    // Number of slots in a single cooldown window (n cooldown slots + 1 current task)
    let k = n + 1;
    // Process tasks within the current cooldown cycle
    while (k > 0 && maxHeap.size() > 0) {
      // Take out the task with the highest remaining frequency from the max-heap
      let freq = maxHeap.dequeue();
      // Decrease its frequency by 1 since we are running it right now
      freq--;
      // If it still has remaining frequency, save it temporarily
      if (freq > 0) {
        temp.push(freq);
      }
      // Increment the total time taken by 1 unit
      time++;
      // Decrease the available slots in this cycle
      k--;
    }
    // Push all remaining task frequencies back into the max-heap for the next round
    for (let i = 0; i < temp.length; i++) {
      maxHeap.enqueue(temp[i]);
    }
    // If there are still tasks left in the heap, add idle time for any unused slots in this cycle
    if (maxHeap.size() > 0) {
      time += k;
    }
  }
  // Return the total minimum time required
  return time;
};
