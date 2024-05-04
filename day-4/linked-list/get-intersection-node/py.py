    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        currA = headA
        currB = headB
        while currA != currB:
            if currA is None:
                currA = headB
            else:
                currA = currA.next
            if currB is None:
                currB = headA
            else:
                currB = currB.next
        return currA
