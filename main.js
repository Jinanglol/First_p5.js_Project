function preload(){
}

function setup(){
    canvas = createCanvas(700 , 500);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 150 , 90 , 400 , 300);
    circle(60, 40, 70);
    rect(95, 20, 495, 55, 20);
    circle(625, 40, 70);
    rect(605, 75, 55, 350, 20);
    circle(635, 460, 70);
    rect(35, 75, 55, 350, 20);
    circle(60, 460, 70);
    rect(95, 430, 505, 55, 20);
}

function take_snapshot(){
    save("student_name.png");
}