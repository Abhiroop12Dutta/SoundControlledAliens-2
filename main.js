//https://teachablemachine.withgoogle.com/models/sdcM2wARd/

function startClassification()
{

navigator.mediaDevices.getUserMedia({audio : true});
classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sdcM2wARd/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}