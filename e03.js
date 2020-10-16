function selectSort(newArray) {

    for (var i = 0; i < newArray.length; i++) {

        let x = i;

        for (var n = i + 1; n < newArray.length; n++) {
            if (newArray[x] > newArray[n]) {
                x = n;
            }
        }
        if (i !== x) {
            [newArray[i],newArray[x]]= [newArray[x],newArray[i]];
        }
    }
    return newArray
    
} console.log(selectSort([9, 4, 3, 8, 2, 10]))