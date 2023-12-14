var isIsomorphic = function(s, t) {
    let obj = {}

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if(!obj[charS]) {
            obj[charS] = charT
        } else if (obj[charS] !== charT) {
            return false;
        }
    }
    return true
};
