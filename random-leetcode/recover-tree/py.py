    def recoverTree(self, root: Optional[TreeNode]) -> None:
        small = None
        big = None
        prev = None
        def helper(node):
            nonlocal small, big, prev
            if not node:
                return
            helper(node.left)
            if prev and prev.val > node.val:
                small = node
                if not big:
                    big = prev
            prev = node
            helper(node.right)
        helper(root)
        big.val, small.val = small.val, big.val
