/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const visiting = new Set();
    const visited = new Set();
    const coursePre = {};

    for (const [v, e] of prerequisites) {
        coursePre[v] = [...(coursePre[v] || []), e];
    }

    const dfs = v => {
        const edges = coursePre[v] || [];
        visiting.add(v);
        for (const e of edges) {
            if (visited.has(e)) {
                continue;
            }
            if (visiting.has(e) || !dfs(e)) {
                return false;
            }
        }
        visiting.delete(v);
        visited.add(v);
        return true;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};

console.log(canFinish(2, [[1, 0]]));
console.log(
    canFinish(2, [
        [1, 0],
        [0, 1],
    ]),
);
