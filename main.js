function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JKG8RY5n_/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}

