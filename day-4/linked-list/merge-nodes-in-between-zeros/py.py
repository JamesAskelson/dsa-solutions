    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head

        while curr:
            curr.val = curr.val + curr.next.val
            curr.next = curr.next.next

            if curr.next.next == None:
                curr.next = None
                return head

            if curr.next.val == 0:
                curr = curr.next
