    func reverseString(_ s: inout [Character]) {
        let reversed = s.reverse()
        let revstring = String(s)
        print(revstring)
        return reversed
    }

print(reverseString(["h", "e", "l", "l", "o"]))
