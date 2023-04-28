Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function(dataUri){
       document.getElementById("result").innerHTML = '<img id="capturedImage" src="'+dataUri+'"></img>'
       
    })
}
console.log("ml5 version:", ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VpuG7cVA2/model.json',modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}

function identifyImage(){
    img= document.getElementById("capturedImage");
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if (error) {
       console.error(error) 
    } else {
        console.log(results)
        document.getElementById("resultPersonName").innerHTML =results[0].label;
        document.getElementById("resultAccuracy").innerHTML = (results[0].confidence*100).toFixed(2) + "%";
    }
}