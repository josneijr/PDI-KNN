function CalcEuclidianDistance(arrayA, arrayB){
    var distance = 0;

    if(arrayA.length != arrayB.length)
        throw "Arrays doesn't have the same size!"
    
    $.each(arrayA, function(i, item) {
        distance += Math.pow(arrayA[i] - arrayB[i], 2);
    });

    return Math.sqrt(distance);
}

function DoKnn(k, db, imgHistogram){
    var finalKnn = [];
    
    db.forEach(element => {      
        var curr = {img: element.path, result: element.result, distance: CalcEuclidianDistance(element.histogram, imgHistogram)};

        finalKnn = finalKnn.concat(curr);
    });

    finalKnn.sort(function(a, b) {
        return ((a.distance < b.distance) ? -1 : ((a.distance == b.distance) ? 0 : 1));
    });

    var answer = [];

    for(var i=1; i<=k; i++)
    {
        answer = answer.concat(finalKnn[i].result);
    }

    console.log(answer);

    var answerConj = {
        allData: finalKnn,
        text: mode(answer)
    };

    return answerConj;
}

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}