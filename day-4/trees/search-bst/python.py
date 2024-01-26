def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if root == None:
            return None
        if root.val == val:
            return root
        else:
            left_search = self.searchBST(root.left, val)
            right_search = self.searchBST(root.right, val)
            if left_search != None:
                return left_search
            else:
                return right_search
