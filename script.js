let video;
let detector;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);

    detector = ml5.faceDetector(modelReady);
}

function modelReady() {
    console.log("Le modèle de détection de visage est prêt !");
    detector.detect(gotFaces);
}

function gotFaces(error, faces) {
    if (error) {
        console.log(error);
        return;
    }

    // Dessiner le visage détecté sur le canevas
    for (let i = 0; i < faces.length; i++) {
        let face = faces[i].alignedRect;
        rect(face.x, face.y, face.width, face.height);
    }

    // Continuer la détection
    detector.detect(gotFaces);
}
