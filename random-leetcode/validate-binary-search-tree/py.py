    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        value = None
        def helper(node, prev):
            if node == None:
                return True
            if not helper(node.left, prev):
                return False
            if prev != None and prev.val >= node.val:
                return False
            prev = node
            return helper(node.right, prev)
        return helper(root, value)
