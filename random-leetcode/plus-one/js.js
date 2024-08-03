var plusOne = function(digits) {
    if(digits.length == 1 && digits[0] == 9){
        return [1,0]
    }

    let end = digits.length - 1;
    let remainder = 0
    digits[end] += 1

    while(end >= 0){
        console.log(digits, end, remainder)

        if(remainder == 1){
            digits[end] += 1
            remainder = 0
        }

        if(digits[end] > 9 && end == 0){
            digits[end] -= 10
            digits.unshift(1)
        } else if(digits[end] > 9){
            digits[end] -= 10
            remainder = 1
            end--
        } else {
            return digits
        }
    }
};
