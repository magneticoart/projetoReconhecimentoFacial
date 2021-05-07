const webcamElement = document.getElementById('webcam');
const webcam = new Webcam(webcamElement, 'user');

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(start)

Promisse.all([
  faceapi.nets.tinyFaceDetector.loadFromUri
])

webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
});

webcam.addEventListener('play', () =>{
  const canvas = faceapi.createCanvasFromMedia(webcam)document.body(canvas)
  const displaySize = {width: webcam.width, height: webcam.height}
  setInterval(async () =>{
    const detections = await faceapi.detectAllFaces(webcam,
      new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
  }, 100)
  console.log(detections)
  const resizedDetections = faceapi.resizeResult(detections,displaySize)
  faceapi.draw.drawDetections(canvas, resizedDetections)
})