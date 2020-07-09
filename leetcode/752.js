/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    let cur, temp;
    let queue = ['0000'],
        newQ = [],
        count = 0;
    const visited = new Set(deadends);

    if (visited.has('0000')) {
        return -1;
    }
    visited.add('0000');

    while (queue.length) {
        for (let j = 0; j < queue.length; j++) {
            cur = queue[j];
            if (cur === target) {
                return count;
            }
            for (let i = 0; i < 4; i++) {
                temp = plus(cur, i);
                if (!visited.has(temp)) {
                    visited.add(temp);
                    newQ.push(temp);
                }

                temp = minus(cur, i);
                if (!visited.has(temp)) {
                    visited.add(temp);
                    newQ.push(temp);
                }
            }
        }
        count++;
        queue = newQ;
        newQ = [];
    }
    return -1;
};

const plus = (str, i) => {
    const arr = str.split('').map(Number);
    arr[i] == 9 ? (arr[i] = 0) : (arr[i] = arr[i] + 1);
    return arr.join('');
};

const minus = (str, i) => {
    const arr = str.split('').map(Number);
    arr[i] == 0 ? (arr[i] = 9) : (arr[i] = arr[i] - 1);
    return arr.join('');
};
