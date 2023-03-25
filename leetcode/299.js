/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    secret = secret.toString().split('');
    guess = guess.toString().split('');
    let bulls = 0,
        cows = 0;
    const secretCount = new Array(10).fill(0);
    const guessCount = new Array(10).fill(0);

    for (let i = 0; i < secret.length; i++) {
        const secretChar = secret[i];
        const guessChar = guess[i];

        if (secretChar === guessChar) {
            bulls++;
        } else {
            secretCount[secretChar] += 1;
            guessCount[guessChar]++;
        }
    }

    for (let i = 0; i < secretCount.length; i++) {
        cows += Math.min(guessCount[i], secretCount[i]);
    }

    return `${bulls}A${cows}B`;
};

console.log(getHint(1807, 7810));
