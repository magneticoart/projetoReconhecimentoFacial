const video = document.getElementById('video')

function startVideo(){
    navigator.mediaDevices.getUserMedia(
        {video: {} },
        stream => video.srcObjet = stream,
        err => console.error(err)
    )
}
startVideo()
