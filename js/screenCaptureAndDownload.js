// ***************************
// This Is My capture Screen Method
// there i am storing image source in --> sourceOfDownloadingImage
// Last captureScreen handle taking Input
// ***************************
// Capture Image Functionality
let sourceOfDownloadingImage;

const captureScreen = async () => {
  try {
    // asking permission to use a media input to record current tab
    const stream = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
    });
    const video = document.createElement("video");

    video.addEventListener("loadedmetadata", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      // passing video width & height as canvas width & height
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      video.play(); // playing the video so the drawn image won't be black or blank
      // drawing an image of the captured video stream
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      stream.getVideoTracks()[0].stop(); // terminating first video track of the stream

      // passing canvas data url as screenshot preview src
      sourceOfDownloadingImage = canvas.toDataURL();
      // screenshotPreview.querySelector("img").src = canvas.toDataURL();
      // screenshotPreview.classList.add("show");
    });
    video.srcObject = stream; // passing capture stream data as video source object
  } catch (error) {
    // if image couldn't capture by any reason, then alert the msg
    alert("Failed to capture screenshot!");
  }
};

// ***************************
// This Is My for Downloading Imge
// This function takes what is my imageurl eg. --> sourceOfDownloadingImage
// and also i pass witch name i want to store in image
// ***************************
// functionality for Download Image
const downloadImage = (imageUrl, fileName) => {
  const a = document.createElement("a");
  a.href = imageUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
};

export { captureScreen, downloadImage, sourceOfDownloadingImage };
