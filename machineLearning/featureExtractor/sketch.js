// 1. Run this example to print to console all the sources.
// 2. Determine the ID of the video source you'd like to use.
// 3. Place the ID as a string where it says 'put_desired_source_id_here'.
// 4. Comment in lines 15-21 to set options for the capture.
// 5. (Optional) remove line 14 and lines 29-39 (the gotSources function).
//    They are no longer necessary.

var capture;
var options;

// Put variables in global scope to make them available to the browser console.
let video;
let cnv;

function setup() {
    video = document.querySelector('video');
    cnv = window.canvas = document.querySelector('canvas');
    cnv.width = 480;
    cnv.height = 360;
    // capture = createCapture(options);
    const button = document.querySelector('button');
    button.onclick = function() {
            cnv.width = video.videoWidth;
            cnv.height = video.videoHeight;
            cnv.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        };

    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
}

const constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}
