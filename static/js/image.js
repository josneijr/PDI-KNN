function CalcImageHistogram(imagePath){

    var histR = Array.apply(null,  Array(256)).map(Number.prototype.valueOf,0);
    var histG = Array.apply(null,  Array(256)).map(Number.prototype.valueOf,0);
    var histB = Array.apply(null,  Array(256)).map(Number.prototype.valueOf,0);

    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");

    var imageObj = new Image();
    imageObj.onload = function()
    {
        canvas.width = imageObj.width;
        canvas.height = imageObj.height;
        context.drawImage(imageObj, 0, 0);

        var imageData = context.getImageData(0,0,imageObj.width,imageObj.height);
        
        var pix = imageData.data;

        // Loop over each pixel
        for (var i=0; i < pix.length; i += 4) 
        {
            histR[pix[i]  -1]++; // red
            histG[pix[i+1]-1]++; // green
            histB[pix[i+2]-1]++; // blue
        }  
    };
    imageObj.src = imagePath;

    var histogram = [];

    histogram = histogram.concat(histR);
    histogram = histogram.concat(histG);
    histogram = histogram.concat(histB);

    return histogram;
}