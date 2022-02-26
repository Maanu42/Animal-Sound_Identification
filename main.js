function identify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/g2fbDd-Le/model.json",modelReady);
}
function modelReady(){
    console.log("Ready");
    classifier.classify(gotResults);
}
function gotResults(error,result){
if(error){
    console.error(error);
}
if(result){
    console.log(result);
    document.getElementById("hear").innerHTML='I can hear- '+result[0].label;
}
bark="bark.gif"
meow="meow.gif"
img= document.getElementById("image_show");
if(result[0].label=="Meowing"){
document.getElementById("image_show").src=meow;
}
if(result[0].label=="Barking"){
    document.getElementById("image_show").src=bark;
    }
}