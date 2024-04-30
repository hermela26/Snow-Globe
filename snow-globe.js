const SNOWFLAKE_COUNT = 500;
const SIZE = 4;
const GRAVITY = 1.5;

const SNOWFLAKES = [];

function setup() {
  createCanvas(400, 400);
  
    noStroke();

  //Snowflakes with random positions
  for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
    SNOWFLAKES.push({
      x: random(width),
      y: random(height)
    });
  }
 }

function draw() {
  background(32);
  
   for (let i = 0; i < SNOWFLAKES.length; i++) {
    const snowflake = SNOWFLAKES[i];

    circle(snowflake.x, snowflake.y, SIZE);

    if (snowflake.y > height + SIZE) snowflake.y = -SIZE;
    else snowflake.y += GRAVITY;
     fill('white')
  }
  
//globe
  stroke('white')
  strokeWeight(5)
  fill(193, 209, 227, 80)
  circle(200,180,250)

  //base
  noStroke()
  fill('white')
  rect(125,290,150, 60)

  //gold decorations
  fill(235, 178, 45)
  circle(200,33, 30)
  rect(180,45,40,10,2)
  
  rect(120, 290, 160, 10, 2)
  rect(120, 350, 160, 10, 2)
  
  //tree and ornaments
  fill('brown');
  square(180, 250, 40)
  fill('green');
  triangle(150, 270, 200, 150, 250, 270);
  fill('blue');
  ellipse(200, 250, 10)
  fill('red');
  ellipse(190, 230, 10)
  fill('yellow');
  ellipse(210, 210, 10)
  fill('pink');
  ellipse(190, 200, 10)
  fill('brown');
  ellipse(175, 260, 10)
  fill('black');
  ellipse(224, 260, 10)
  fill('purple');
  ellipse(222, 234, 10)
  fill('gold');
  ellipse(200, 180, 10)
}
