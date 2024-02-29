var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles)
    let best = max
    const time = (speed) => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed) , 0)

    while (min <= max){

        let mid = Math.floor((max + min) / 2)
        if(time(mid) <= h) {
            best = mid
            max = mid - 1
        } else {
            min = mid + 1
        }
    }

    return best
};
