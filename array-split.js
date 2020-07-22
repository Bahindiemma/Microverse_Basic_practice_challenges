function chunkArrayInGroups(arr, size) {

    let newArray = [];

    for (let i = 0; i < arr.length; i += size) {
        newArray.push(arr.slice(i, i + size));

        // console.log(arr.slice(i, i + size));
    }

    return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 2));