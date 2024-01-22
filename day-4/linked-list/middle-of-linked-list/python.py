def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        fast = head
        while fast != None and fast.next != None:
            fast = fast.next.next
            head = head.next
        return head
