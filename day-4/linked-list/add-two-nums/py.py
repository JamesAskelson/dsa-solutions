    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        list1 = []
        list2 = []

        while l1:
            list1.append(l1.val)
            l1 = l1.next
        while l2:
            list2.append(l2.val)
            l2 = l2.next

        carry = 0
        res = None

        while len(list1) or len(list2):
            val1 = 0
            val2 = 0
            if len(list1):
                val1 = list1.pop()
            if len(list2):
                val2 = list2.pop()
            total = val1 + val2 + carry
            carry = math.floor(total / 10)
            new_node = ListNode(total % 10)
            new_node.next = res
            res = new_node
        return res
