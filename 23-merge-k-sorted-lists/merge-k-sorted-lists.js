/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) return null;
    let minHeap = new MinPriorityQueue((node) => node.val);
    for (let i = 0; i < lists.length; i++) {
        // If the list is not empty, push its head node into the min-heap
        if (lists[i] !== null) {
            minHeap.enqueue(lists[i]);
        }
    }
    let dummy = new ListNode(0);
    let curr = dummy;
    while (minHeap.size() > 0) {
        // Pop the node with the smallest value from the heap
        let currNode = minHeap.dequeue();
        // Attach this node to our result linked list
        curr.next = currNode;
        curr = curr.next;
        // If the popped node has a next node in its original list, push it into the heap
        if (currNode.next !== null) {
            minHeap.enqueue(currNode.next);
        }
    }
    // Return the head of the newly merged sorted linked list
    return dummy.next;
};