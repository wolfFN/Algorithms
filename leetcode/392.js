/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let index = -1;

    for (const c of s) {
        const found = t.indexOf(c, index + 1);
        if (found === -1) {
            return false;
        }
        index = found;
    }
    return true;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));


function findSubsequence(s, w){
    let idx = -1
    for(const c of w){
      const found = s.indexOf(c, idx+1)
      if(found == -1) return false
      idx = found
    }
    return true
  }
