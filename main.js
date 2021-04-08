Webcam.set ({
 width: 310,
 height:300,
 image_format: 'png',
 png_quality: 90,

 constraints: {
     facingMode : "environment"
 }
});

camera = document.getElementById("camera");

Webcam.attach=('#camera');

function take_snapshot() {
   Webcam.snap(function(data_uri) 
       document.getElementById("results").innerHTML = '<img = "image_captured"' src="'+data_uri+'"/>
    }



console.log('m15 version:' , m15.version);

function modelLoaded() {
  console.log('Model Loaded ! ');
}

function check() {
    img = document.getElementById('image_captured');
    classify=classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
      console.log(results);
      document.getElementById("object_name").innerHTML = results[0].label;
    }
}
