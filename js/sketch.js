

const SPEED  = 5;       // the game speed (how many pixels per iteration it shifts)
const POWER  = 50;      // the jump power of the bird (initial upwards velocity for jump)
const BOUNCE = 0.65;    // percentage of the jump energy to get inverted on impact with floor or ceiling

var WIDTH;
var HEIGHT;

var tiles;
var bird;

var bounced = 0;

function preload() {
    // TODO: load textures
}

function setup() {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    // keep aspect ratio at 4:3, such that always exactly 
    // 4 elements with width = width / 4 fit on screen
	// add start conditition 
    if(width > height)
        width = 4 * height / 3; 
    else
        height = 3 * width / 4;
    bird = new Bird();
    tiles = [];
    tiles.push(new Tile(0, bird, false));
    tiles.push(new Tile(1, bird, false));
    tiles.push(new Tile(2, bird));
    tiles.push(new Tile(3, bird)); 
    tiles.push(new Tile(4, bird));
    tiles.push(new Tile(5, bird));
    tiles.push(new Tile(6, bird));

    createCanvas(width, height);
}

function draw() {
    background(255);
    tiles.forEach(_tile => {
        _tile.update();
        _tile.draw();
		if(_tile.get_outofbounds()){
            tiles.push(new Tile(5, bird));
            tiles.shift();
		}
    });
    bird.update();
    bird.draw();
}

function keyPressed() {
    if(keyCode == 32){
        bird.jump();
		bounced = millis();
	}
}