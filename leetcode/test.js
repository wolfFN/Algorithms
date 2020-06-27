function test(result) {
    result.push(1);
}

function main() {
    console.log(
        [
            [1, 1, 2],
            [1, 2, 1],
            [1, 1, 2],
            [1, 2, 1],
            [2, 1, 1],
            [2, 1, 1],
        ].includes([1, 1, 2])
    );
}

main();
