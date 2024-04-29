/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a new ListNode to store the merged result
    let res = new ListNode();
    // Create a pointer 'ptr' to keep track of the current node in 'res'
    let ptr = res;

    // Iterate while both 'list1' and 'list2' are not empty
    while (list1 && list2) {
        // Compare the values of the current nodes in 'list1' and 'list2'
        if (list1.val <= list2.val) {
            // If the value in 'list1' is smaller or equal, add it to 'res'
            res.next = new ListNode(list1.val);
            // Move to the next node in 'list1'
            list1 = list1.next;
        } else {
            res.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        res = res.next;
    }

    // Handle the case where 'list1' has remaining elements
    while (list1) {
        // Add the remaining elements from 'list1' to 'res'
        res.next = new ListNode(list1.val);
        // Move to the next node in 'list1'
        list1 = list1.next;
        // Move the 'res' pointer to the newly added node
        res = res.next;
    }

    while (list2) {
        res.next = new ListNode(list2.val);
        list2 = list2.next;
        res = res.next;
    }

    // 'ptr' initially points to an empty node, so return 'ptr.next' to get the merged list
    return ptr.next;
};

var mergeTwoLists = function(list1, list2) {
    let res = new ListNode()
    let curr = res

    while(list1 && list2){
        if(list1.val <= list2.val){
            res.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            res.next = new ListNode(list2.val)
            list2 = list2.next
        }
        res = res.next
    }

    while(list1){
        res.next = new ListNode(list1.val)
        list1 = list1.next
        res = res.next
    }

    while(list2) {
        res.next = new ListNode(list2.val)
        list2 = list2.next
        res = res.next
    }

    return curr.next
}
