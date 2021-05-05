const webcamElement = document.getElementById('webcam');
const webcam = new Webcam(webcamElement, 'user');

webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
});
