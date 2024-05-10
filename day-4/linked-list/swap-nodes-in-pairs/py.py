    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        ans = ListNode(0)
        ans.next = head
        curr = ans
        while curr.next and curr.next.next:
            temp1 = curr.next
            temp2 = curr.next.next
            curr.next = temp2
            temp1.next = temp2.next
            temp2.next = temp1
            curr = curr.next.next
        return ans.next
