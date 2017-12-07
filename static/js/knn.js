function CalcEuclidianDistance(arrayA, arrayB){
    var distance = 0;

    if(arrayA.length != arrayB.length)
        throw "Arrays doesn't have the same size!"
    
    $.each(arrayA, function(i, item) {
        distance += Math.pow(arrayA[i] - arrayB[i], 2);
    });

    return Math.sqrt(distance);
}

