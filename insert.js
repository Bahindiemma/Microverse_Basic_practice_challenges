function getIndexToIns(arr, num) {

    arr.push(num);

    arr.sort(function(x, y) {
        return x - y;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return ("The number at index position " + i + " is: " + arr[i]);
        }

    }

}
console.log(getIndexToIns([9, 7, 3, 1, 8, 11, 40], 30));