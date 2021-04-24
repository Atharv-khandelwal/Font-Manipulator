noseX=0
noseY=0
difference=0
rightWristX=0
leftWristX=0
function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)

canvas=createCanvas(470,470)
canvas.position(750,90)



posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)
}

function draw(){
    background('#808080')
    document.getElementById('squareSide').innerHTML="Width And Height Of Square will be="+difference+"px"
    fill('#F90093')
    stroke("#F90093")
    text(Atharv,noseX,noseY)
    text.size(difference)

}

function modelLoaded(){
    console.log('Posenet Is Intialized')
}

function gotPoses(results){
if (results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log('noseX=' + noseX+'noseY='+noseY)
    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    difference=floor(leftWristX-rightWristX)
}
}