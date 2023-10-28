/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
    const ans = new Array(quiet.length).fill(-1);
    const graph = new Array(quiet.length).fill(0);
    for (let i = 0; i < quiet.length; i++) {
        graph[i] = [];
    }

    for (const [a, b] of richer) {
        graph[b].push(a);
    }


    for (let i = 0; i < quiet.length; i++) {
        dfs(i, quiet, graph, ans);
    }

    return ans;
};

const dfs = (x, quiet, graph, ans) => {
    if (ans[x] !== -1) {
        return;
    }
    ans[x] = x;
    for (const y of graph[x]) {
        dfs(y, quiet, graph, ans);
        if (quiet[ans[y]] < quiet[ans[x]]) {
            ans[x] = ans[y];
        }
    }
};

const richer = [
        [1, 0],
        [2, 1],
        [3, 1],
        [3, 7],
        [4, 3],
        [5, 3],
        [6, 3],
    ],
    quiet = [3, 2, 5, 4, 6, 1, 7, 0];

console.log(loudAndRich(richer, quiet));
