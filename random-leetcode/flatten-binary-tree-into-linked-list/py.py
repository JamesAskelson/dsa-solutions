def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        curr = root
        while curr:
            if(curr.left):
                tmp = curr.left
                while(tmp.right):
                    tmp = tmp.right
                tmp.right = curr.right
                curr.right = curr.left
                curr.left = None
            curr = curr.right
