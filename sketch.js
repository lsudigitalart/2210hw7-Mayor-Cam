function preload()
{
  music = loadSound('sound/the_end_of_time.mp3');
}

function setup()
{
  createCanvas(800,400);
  music.setVolume(0.1);
  music.play();
}


function draw()
{
  background(50,50,150);
}
