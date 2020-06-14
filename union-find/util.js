const path = require('path');
const fs = require('fs');
const { createInterface } = require('readline');

const parseUFFile = async filePath => {
    const inputFile = path.join(__dirname, filePath);
    const input = fs.createReadStream(inputFile);
    const result = {
        data: [],
    };

    const rl = createInterface({
        input,
        crlfDelay: Infinity,
    });

    for await (const l of rl) {
        const line = l.split(' ').map(i => parseInt(i));
        if (line.length === 2) {
            result.data.push(line);
        } else if (line.length === 1) {
            result.length = line[0];
        } else {
            console.log('error line: ', l);
        }
    }
    return result;
};

// test
// async function main() {
//     console.log(await parseUFFile('./data/tinyUF.txt'));
// }
// main();

module.exports = {
    parseUFFile,
};
