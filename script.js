const average = (graph) => {
    const arr = rec(graph, [])
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;

};

const min = (graph) => {
    const arr = rec(graph, []);
    return arr.reduce((prev, cur) => cur < prev ? cur : prev);
};

const max = (graph) => {
    const arr = rec(graph, []);
    return arr.reduce((prev, cur) => cur > prev ? cur : prev);
};

console.log(average(graph));
console.log(min(graph));
console.log(max(graph));

function rec(elem, arr) {
    arr.push(elem.value);
    if (!elem.children) return
    for (var childIndex in elem.children) {
        rec(elem.children[childIndex], arr);
    }
    return arr;
}