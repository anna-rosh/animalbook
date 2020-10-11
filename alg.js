module.exports.shuffleArr = (arr) => {
    let temporaryVal, randomInd;
    let currInd = arr.length;

    while (currInd !== 0) {
        randomInd = Math.floor(Math.random() * currInd);
        currInd -= 1;

        temporaryVal = arr[currInd];
        arr[currInd] = arr[randomInd];
        arr[randomInd] = temporaryVal;
    }

    return arr;
};