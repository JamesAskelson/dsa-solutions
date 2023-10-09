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
    // Base case: If 'list1' is empty, return 'list2'
    if (!list1) return list2;

    // Base case: If 'list2' is empty, return 'list1'
    if (!list2) return list1;

    // Compare the values of the current nodes in 'list1' and 'list2'
    if (list1.val < list2.val) {
        // If the value in 'list1' is smaller, merge the remaining of 'list1' with 'list2'
        list1.next = mergeTwoLists(list1.next, list2);
        // Return 'list1' as the new head of the merged list
        return list1;
    } else {
        // If the value in 'list2' is smaller or equal, merge the remaining of 'list2' with 'list1'
        list2.next = mergeTwoLists(list1, list2.next);
        // Return 'list2' as the new head of the merged list
        return list2;
    }
}

console.log(mergeTwoLists([1,2,4], [1,3,4]))
