/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var bf = function (str, pat) {
    const N = str.length;
    const M = pat.length;
    for (let i = 0; i <= N - M; i++) {
        let j;
        for (j = 0; j < M; j++) {
            if (pat[j] !== str[i + j]) {
                break;
            }
        }
        if (j === M) {
            return i;
        }
    }
    return -1;
};

var bf2 = function (str, pat) {
    let i, j;
    const N = str.length;
    const M = pat.length;
    for (i = 0, j = 0; i < N && j < M; i++) {
        if (str[i] === pat[j]) {
            j++;
        } else {
            i = i - j;
            j = 0;
        }
    }
    if (j === M) {
        return i - M;
    }

    return -1;
};

var genDFA = pat => {
    const keys = Array.from(new Set(Object.values(pat)));
    const dfa = {};
    const M = pat.length;

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === pat[0]) {
            dfa[keys[i]] = [1];
        } else {
            dfa[keys[i]] = [0];
        }
    }

    for (let X = 0, j = 1; j < M; j++) {
        for (let i = 0; i < keys.length; i++) {
            if (!dfa[keys[i]]) {
                dfa[keys[i]] = [];
            }
            dfa[keys[i]][j] = dfa[keys[i]][X];
        }
        dfa[pat[j]][j] = j + 1;
        X = dfa[pat[j]][X];
    }
    return dfa;
};

var strStr = function (str, pat) {
    const dfa = genDFA(pat);
    let i, j;
    const N = str.length;
    const M = pat.length;

    for (i = 0, j = 0; i < N && j < M; i++) {
        j = dfa[str[i]] ? dfa[str[i]][j] || 0 : 0;
        // console.log(j);
    }
    if (j === M) {
        return i - M;
    }
    return -1;
};

// console.log(bf('a', 'a'));
// console.log(bf('', ''));
// console.log(strStr('a', 'a'));
// console.log(strStr('hello', 'll'));
// console.log(strStr('', ''));
console.log(strStr('mississippi', 'issip'));
