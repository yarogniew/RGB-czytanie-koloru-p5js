/* P5JS CODE */
var img;
var c;
//var rgbValue;

function preload()
{
    img = loadImage("pencils.jpg");
}

function setup() {
    createCanvas(380, 480);
    c = color('white');
}

function draw() {
    image(img, 0, 0);

    strokeWeight(1);
    noStroke();
    //stroke(255);
    fill(c);
    rect(width/4, 2, width/2, 20);
    //fill(255);
    //text(rgbValue, 10, 10);
}

function mousePressed()
{
    c = get(mouseX, mouseY);

    var rgbValue = c[0] + "," + c[1] + "," + c[2];
    print(rgbValue);
    //fill(255);
    //text(rgbValue, 10, 10, 70, 80);
    var particle = new Particle();
    particle.callFunction({
       deviceId: 'YOURDEVICEID',
       name: 'led',
       argument: rgbValue,
       auth: 'YOURAUTHVALUE'
    });
}
