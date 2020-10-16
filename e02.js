function insertSort(newArray) {
    let array = newArray.length;

        for (let i = 0; i < array; i++) {

            let init = newArray[i];
            let x = i - 1; 

            while (x >= 0 && newArray[x] > init) {
                newArray[x + 1] = newArray[x];
                x--;
            }
            newArray[x + 1] = init;
        }
    return newArray;
} console.log(insertSort([8, 4, 7, 1, 9, 3, -4, -2]));