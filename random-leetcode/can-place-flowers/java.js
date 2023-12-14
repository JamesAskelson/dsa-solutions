var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++){
        let left = flowerbed[i-1]
        let right = flowerbed[i+1]
        if(flowerbed[i] === 0) {
            if((left === undefined || left === 0) && (right === undefined || right === 0)){
                count++;
                flowerbed[i] = 1;
            }
        }
    }
    return count >= n;
}
