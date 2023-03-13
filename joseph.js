const getJosephQueue = (n, m) => {
    const josephQueue = Array.from({ length: n * 2 });

    let index = 0,
        step = m - 1,
        count = 0;

    while (count < n) {
        if (step === 0) {
            josephQueue[index] = 'G';
            step = m - 1;
            count++;
        } else {
            step--;
        }

        index++;
        index = index % (2 * n);
        while (josephQueue[index]) {
            index++;
            index = index % (2 * n);
        }
    }

    for (let i = 0; i < n * 2; i++) {
        josephQueue[i] = josephQueue[i] || 'B';
    }

    return josephQueue.join('');
};

console.log(getJosephQueue(3, 2));
console.log(getJosephQueue(8, 3));
