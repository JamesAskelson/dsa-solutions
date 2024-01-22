def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode()
        ptr = res
        while list1 != None and list2 != None:
            print(list1, list2)
            if list1.val <= list2.val:
                res.next = ListNode(list1.val)
                list1 = list1.next
            else:
                res.next = ListNode(list2.val)
                list2 = list2.next
            res = res.next
        while list1 != None:
            res.next = ListNode(list1.val)
            list1 = list1.next
            res = res.next
        while list2 != None:
            res.next = ListNode(list2.val)
            list2 = list2.next
            res = res.next
        return ptr.next
        