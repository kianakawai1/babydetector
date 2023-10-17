objects = [];
statuss="";
alarm="";

function preload(){
}

function setup(){
    canvas = createCanvas(500, 460);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 460);
    video.hide();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}

function draw(){
    image(video, 0, 0, 500, 460);

    if(statuss != ""){
        objectDetector.detect(video, gotResult);
        for(i=0; i<objects.length; i++){
            if(objects.label = "person"){
                document.getElementById("status").innerHTML="Status: Baby Found";
            }
            percent = floor(objects[i].confidence * 100);
            fill("red");
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    


}

function modelLoaded(){
    console.log("Model loaded");
    statuss=true; 
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}