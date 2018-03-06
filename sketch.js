/* P5JS CODE */
var img;
var c;

function preload()
{
    img = loadImage("pencils.jpg");
}

function setup() {
    createCanvas(640, 425);
    c = color(255);
}

function draw() {
    image(img, 0, 0);

    strokeWeight(3);
    stroke(255);
    fill(c);
    rect(25, 25, 25, 25);
}

function mousePressed()
{
    c = get(mouseX, mouseY);

    var rgbValue = c[0] + "," + c[1] + "," + c[2];
    print(rgbValue);

    var particle = new Particle();
    particle.callFunction({
       deviceId: 'YOURDEVICEID',
       name: 'led',
       argument: rgbValue,
       auth: 'YOURAUTHVALUE'
    });
}
