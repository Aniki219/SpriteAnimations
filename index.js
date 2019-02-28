var player;
var flower;

function setup() {
    createCanvas(500, 500);
    player = new Player(200, 250);
    flower = new Flower(50, 50);
}

function draw() {
    background(200);
    player.update();
    flower.draw();
}