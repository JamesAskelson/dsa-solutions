var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let left = 0;
    let max = 0;

    if(s.length === 0) return 0
    if(s.length === 1) return 1

    for(let right = 0; right < s.length; i++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        max = Math.max(max, right - left + 1)
    }

    return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))

// 3
