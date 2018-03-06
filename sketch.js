/* P5JS CODE */
var img;
var c;
var d;

function preload()
{
    img = loadImage("pencils.jpg");
}

function setup() {
    createCanvas(370, 510);
    background('white');
    c = color('white');
    d = -50;
}

function draw() {
    image(img, 2, 26);

    strokeWeight(2);
    stroke(255);
    fill(c);
    rect(1, 2, width-2, 20);
    var rgbV = c[0] + "," + c[1] + "," + c[2];
    fill(c[0]+d, c[1]+d, c[2]+d);
    textSize(26);
    textAlign(CENTER);
    if (c[0]<255)
      {
        text(rgbV , width/2, 50);
      }
}

function mousePressed()
{
    c = get(mouseX, mouseY);

}
