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
    // Define a recursive function 'traversal' to traverse the linked list
    const traversal = (node) => {
        // Base case: If 'node' is null, we've reached the end of the list
        if (!node) {
            return;
        }

        // Recursively call 'traversal' on the next node
        traversal(node.next);

        // Decrement 'n' each time we visit a node

        if (--n === -1) {
            // When 'n' becomes -1, it means we've reached the node to be removed
            // Remove the node by bypassing it in the 'next' pointer
            node.next = node.next.next;
        }
    }

    // Start the traversal from the head of the linked list
    traversal(head);

    // If 'n' is 0, it means we need to remove the head node, so return the second node
    if(n === 0) {
        return head.next
    } else {
        return head
    }
};


console.log(removeNthFromEnd([1,2,3,4,5], 2))
