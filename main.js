
leftWristY = 0;
rightWristY = 0;
leftWristX = 0;
rightWristX = 0;
song1 = "";
song2 = "";
scoreleftWrist = 0;
scorerightWrist = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(450, 5350);
    canvas.center();

    video = createCapture(VIDEO);
    video.position(450 ,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        scoreleftWrist = results[0].pose.keypoints[9].score;
        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("leftWristX= " + leftWristX + " leftWristY= " + leftWristY);
        console.log("rightWristX= " + rightWristX + "rightWristY= " + rightWristY);
    }
}

leftWristY = 0;
rightWristY = 0;
leftWristX = 0;
rightWristX = 0;
song1 = "";
song2 = "";
scoreleftWrist = 0;
scorerightWrist = 0;

function preload(){
    song1 = loadSound('heatwaves.mp3');
    song2 = loadSound('peaches.mp3'); 
}
function setup(){
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.position(450, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        scoreleftWrist = results[0].pose.keypoints[9].score;
        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("leftWristX= " + leftWristX + " leftWristY= " + leftWristY);
        console.log("rightWristX= " + rightWristX + "rightWristY= " + rightWristY);
    }
}
function draw(){
    fill('#ff0000');
    stroke('#000000');
    if(song2.isPlaying() == true){
    if(scoreleftWrist > 0.2){
        song2.stop();
        song1.play();
        song1.setVolume(1);
        song1.rate(1);
        document.getElementById("song_name").innerHTML = "Harry Potter Theme Song";
    }
}
    if(scorerightWrist > 0.2){
        if(song1.isPlaying() == true){
            song1.stop();
            song2.play();
            song2.setVolume(1);
            song2.rate(1);
            document.getElementById("song_name").innerHTML = "Peter Pan Theme Song";
      }
    }
}