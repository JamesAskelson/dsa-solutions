var addTwoNumbers = function(l1, l2) {
    let stack1 = []
    let stack2 = []

    while(l1){
        stack1.push(l1.val)
        l1 = l1.next
    }

    while(l2){
        stack2.push(l2.val)
        l2 = l2.next
    }

    // [7,2,4,3]
    // [5,6,4]

    let carry = 0;
    let res = null;

    while(stack1.length || stack2.length){
        let val1 = stack1.pop() || 0;
        let val2 = stack2.pop() || 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10)
        let node = new ListNode(sum % 10)
        node.next = res
        res = node
    }
    return res
};
