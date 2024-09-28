var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0)
    let curr = res;
    let remainder = 0;
    while(l1 != null && l2 != null){
        let val = l1.val + l2.val;
        if(remainder > 0){
            val += remainder
            remainder = 0
        }
        if(val > 9){
            val = val - 10;
            remainder = 1
        }
        curr.next = new ListNode(val)
        curr = curr.next
        l1 = l1.next
        l2 = l2.next
    }
    while(l1 != null){
        let val = l1.val;
        val += remainder;
        if(val > 9){
            val = val - 10;
            remainder = 1
        }
        curr.next = new ListNode(val)
        curr = curr.next
        l1 = l1.next;
    }
    while(l2 != null){
        let val = l2.val;
        val += remainder;
        if(val > 9){
            val = val - 10;
            remainder = 1
        }
        curr.next = new ListNode(val)
        curr = curr.next
        l2 = l2.next;
    }
    if(remainder > 0){
        curr.next = new ListNode(remainder)
        curr = curr.next
    }
    return res.next;
};
