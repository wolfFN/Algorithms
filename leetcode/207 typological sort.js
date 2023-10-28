/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const order = [],
        queue = [],
        graph = new Map(),
        indegree = new Array(numCourses).fill(0);

    for (const [e, v] of prerequisites) {
        const edges = graph.get(v) || [];
        edges.push(e);
        graph.set(v, edges);
        indegree[e]++;
    }
    // console.log(indegree);
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // console.log(graph);
    // console.log(queue);

    while (queue.length) {
        const v = queue.shift();
        for (const e of graph.get(v) || []) {
            indegree[e]--;
            if (indegree[e] === 0) {
                queue.push(e);
            }
        }
        order.push(v);
    }
    return order.length === numCourses;
};

console.log(canFinish(2, [[1, 0]]));
console.log(
    canFinish(2, [
        [1, 0],
        [0, 1],
    ]),
);
