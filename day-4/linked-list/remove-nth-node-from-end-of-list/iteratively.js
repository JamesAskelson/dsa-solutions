/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Initialize two pointers, fast and slow, both initially pointing to the head
    let fast = head;
    let slow = head;

    // Move the fast pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // If fast has reached the end (null), it means we need to remove the head node
    if (!fast) {
        return head.next; // Return the updated head (the second node)
    }

    // Move both fast and slow pointers until fast reaches the end
    // This will position the slow pointer at the node just before the one to be removed
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node by updating the next pointer of the node just before it
    slow.next = slow.next.next;

    // Return the original head of the modified linked list
    return head;
};


console.log(removeNthFromEnd([1,2,3,4,5], 2))

