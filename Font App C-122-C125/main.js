noseX = 0;
noseY = 0;
left_wristX = 0;
right_wristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(700,150)
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(100,100);
    classifier = ml5.poseNet(video,modelLoaded);
    classifier.on("pose",gotPoses);
}
function draw(){
    background("lightgreen");
    fill("black"); 
    stroke("grey");
    text('Peter', 100, 300);
    textSize(difference);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);
    }
}