def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root == None:
            return root

        left = self.invertTree(root.left)
        right = self.invertTree(root.right)

        tmp = root.left
        root.left = root.right
        root.right = tmp

        return root
