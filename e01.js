function bubble(newArray, fstIndex, sndIndex){

    let bub = newArray[fstIndex];
    newArray[fstIndex] = newArray[sndIndex];
    newArray[sndIndex] = bub;
}
function bubbleSorting(newArray){

    var len = newArray.length,
        i, z, final;

    for (i = 0; i < len; i++){
        for (z = 0, final = len-i; z < final; z++){
            if (newArray[z] > newArray[z + 1]){
                bubble(newArray, z, z + 1);
            }
        }
    }
    return newArray;
} console.log(bubbleSorting([9, 6, 4, 2, 8, -1, 5]));