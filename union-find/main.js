const { parseUFFile } = require('./util');
const QuickFind = require('./QuickFind');
const QuickUnion = require('./QuickUnion');
const WeightedQuickUnion = require('./WeightedQuickUnion');

const main = async () => {
    const { length, data } = await parseUFFile('./data/mediumUF.txt');
    // const uf = new QuickFind(length);
    // const uf = new QuickUnion(length);
    const uf = new WeightedQuickUnion(length);

    console.time('UF')
    for (const [p, q] of data) {
        uf.union(p, q);
    }
    console.timeEnd('UF')
    console.log(uf.count());
    // console.log(uf.find(5));
};

main();
