var kClosest = function(points, k) {
    // Define a custom comparator function to sort points by distance
    const compare = ([x1, y1], [x2, y2]) => x1 * x1 + y1 * y1 - (x2 * x2 + y2 * y2);

    // Sort points array based on distance from the origin
    points.sort(compare);

    // Return the first k points from the sorted array
    return points.slice(0, k);
};
