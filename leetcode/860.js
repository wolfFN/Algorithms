/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fiveCount = 0,
        tenCount = 0;
    for (const bill of bills) {
        // console.log(bill, count);
        if (bill === 5) {
            fiveCount++;
        }
        if (bill === 10) {
            fiveCount--;
            tenCount++;
        }
        if (bill === 20) {
            if (tenCount > 0) {
                tenCount--;
                fiveCount--;
            } else {
                fiveCount -= 3;
            }
        }
        if (fiveCount < 0) {
            return false;
        }
    }
    return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
