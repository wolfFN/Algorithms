/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let low = 0,
        high = matrix.length - 1,
        mid;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (matrix[mid][0] === target) {
            return true;
        } else if (matrix[mid][0] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (high < 0) {
        return false;
    }
    const line = matrix[high];
    low = 0;
    high = line.length - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (line[mid] === target) {
            return true;
        } else if (line[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
};