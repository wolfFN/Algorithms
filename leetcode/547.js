/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const visited = new Set();
    let count = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            count++;
            dfs(i, visited, isConnected);
        }
    }
    return count;
};

var dfs = (i, visited, isConnected) => {
    visited.add(i);
    for (let j = 1; j < isConnected.length; j++) {
        if (isConnected[i][j] && !visited.has(j)) {
            dfs(j, visited, isConnected);
        }
    }
};
