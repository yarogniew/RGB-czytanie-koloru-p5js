/* P5JS CODE */
var img;
var c;
var d;
//var rgbValue;

function preload()
{
    img = loadImage("pencils.jpg");
}

function setup() {
    createCanvas(380, 480);
    c = color('white');
    d = -50;
}

function draw() {
    image(img, 0, 0);

    strokeWeight(1);
    noStroke();
    //stroke(255);
    fill(c);
    rect(width/4, 2, width/2, 20);
    var rgbV = c[0] + "," + c[1] + "," + c[2];
    fill(c[0]+d, c[1]+d, c[2]+d);
    textAlign(CENTER);
    if (c[0]<255)
      {
        text(rgbV , width/2, 32);
      }
}

function mousePressed()
{
    c = get(mouseX, mouseY);


    // var particle = new Particle();
    //particle.callFunction({
       //deviceId: 'YOURDEVICEID',
       //name: 'led',
       //argument: rgbValue,
       //auth: 'YOURAUTHVALUE'
    //});
}
