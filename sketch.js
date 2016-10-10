function preload()
{
  music = loadSound('sound/the_end_of_time.mp3');

  webSurfing = loadImage("img/web_surfing");
  nyanCat = loadImage("img/nyan_cat");

  canvasWidth = webSurfing.width;
  canvasHeight = weSurfing.height;
}

function setup()
{
  createCanvas(800,400);
  music.setVolume(0.1);
  music.play();

  image(webSurfing, 0,0, webSurfing.width, webSurfing.height);
}


function draw()
{
  background(50,50,150);
}
