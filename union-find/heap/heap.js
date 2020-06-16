class Heap {
    constructor(arr) {
        this.arr = arr;
        for (let i = Math.floor(this.arr.length / 2); i >= 0; i--) {
            this.downAdjust(i, this.arr.length - 1);
        }
    }

    print() {
        console.log(this.arr);
    }

    upAdjust() {
        let childIndex = this.arr.length - 1;
        let parentIndex = parseInt((childIndex - 1) / 2);
        const temp = this.arr[childIndex];

        while (temp < this.arr[parentIndex] && childIndex > 0) {
            this.arr[childIndex] = this.arr[parentIndex];
            childIndex = parentIndex;
            parentIndex = parseInt((parentIndex - 1) / 2);
        }
        this.arr[childIndex] = temp;
    }

    downAdjust(parentIndex, lastIndex) {
        const temp = this.arr[parentIndex];
        let childIndex = 2 * parentIndex + 1;

        while (childIndex <= lastIndex) {
            if (
                childIndex < lastIndex &&
                // this.arr[childIndex] < this.arr[childIndex + 1]
                this.arr[childIndex] > this.arr[childIndex + 1]
            ) {
                childIndex++;
            }
            // if (temp >= this.arr[childIndex]) {
            if (temp <= this.arr[childIndex]) {
                break;
            }
            this.arr[parentIndex] = this.arr[childIndex];
            parentIndex = childIndex;
            childIndex = childIndex * 2 + 1;
        }
        this.arr[parentIndex] = temp;
    }

    popSmall() {
        const small = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.downAdjust(0, this.arr.length - 1);
        return small;
    }

    push(val) {
        this.arr.push(val);
        this.upAdjust();
    }

    sort() {
        for (let i = this.arr.length - 1; i > 0; i--) {
            [this.arr[i], this.arr[0]] = [this.arr[0], this.arr[i]];
            this.downAdjust(0, i - 1);
        }
    }
}


const heap = new Heap([7, 5, 3, 10, 1, 2, 8, 9]);
heap.print();
console.log(heap.popSmall());
heap.print();
heap.push(9);
heap.print();
heap.sort();
heap.print();
