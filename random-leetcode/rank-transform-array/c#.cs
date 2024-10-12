    public int[] ArrayRankTransform(int[] arr) {
        var sortedArr = (int[])arr.Clone();
        Array.Sort(sortedArr);

        var dict = new Dictionary<int, int>();
        int rank = 1;

        for(int i = 0; i < sortedArr.Length; i++){
            if(!dict.ContainsKey(sortedArr[i])){
                dict[sortedArr[i]] = rank++;
            }
        }

        var res = new int[arr.Length];

        for(int i = 0; i < arr.Length; i++){
            res[i] = dict[arr[i]];
        }

        return res;
    }
