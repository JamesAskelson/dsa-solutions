def isPalindrome(self, head: Optional[ListNode]) -> bool:
        res = []
        while head:
            res.append(head.val)
            head = head.next

        left = 0
        right = len(res) - 1
        while left <= right:
            if res[left] == res[right]:
                left = left+1
                right = right-1
            else:
                return False
        return True
