/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses_withStack = function (s) {
    const stack = [-1];
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || !stack.length) {
            stack.push(i);
            continue;
        }

        stack.pop();

        if (stack.length) {
            result = Math.max(result, i - stack[stack.length - 1]);
        } else {
            stack.push(i);
        }
    }
    return result;
};

var longestValidParentheses = function (s) {
    let result = 0,
        left = 0,
        right = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            result = Math.max(result, right * 2);
        } else if (right > left) {
            left = 0;
            right = 0;
        }
    }
    left = 0;
    right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            result = Math.max(result, left * 2);
        } else if (left > right) {
            left = 0;
            right = 0;
        }
    }
    return result;
};

console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
