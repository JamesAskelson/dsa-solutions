    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = ListNode(0)
        node.next = head
        curr = node
        while curr.next and curr.next.next:
            if curr.next.val == curr.next.next.val:
                while curr.next and curr.next.next and curr.next.val == curr.next.next.val:
                    curr.next = curr.next.next
                curr.next = curr.next.next
            else:
                curr = curr.next
        return node.next
