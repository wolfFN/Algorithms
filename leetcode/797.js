/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const result = [];
    backTrack(graph, [0], result);
    return result;
};

const backTrack = (graph, path, result) => {
    const curStep = path[path.length - 1];
    if (curStep === graph.length - 1) {
        result.push([...path]);
        return;
    }

    for (let i = 0; i < graph[curStep].length; i++) {
        path.push(graph[curStep][i]);
        backTrack(graph, path, result);
        path.pop();
    }
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
