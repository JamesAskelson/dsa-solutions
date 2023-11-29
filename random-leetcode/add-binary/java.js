var addBinary = function(a, b) {
    let aBase = `0b${a}`
    let bBase = `0b${b}`
    let sum = BigInt(aBase) + BigInt(bBase)
    return sum.toString(2)
};
