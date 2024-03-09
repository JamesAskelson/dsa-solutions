class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        stack = [root]

        while len(stack) > 0:
            curr = stack.pop()

            if self.isSame(curr, subRoot):
                return True

            if curr.left:
                stack.append(curr.left)
            if curr.right:
                stack.append(curr.right)

        return False

    def isSame(self, p, q):
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False
        return self.isSame(p.left, q.left) and self.isSame(p.right, q.right)
