let r = 200; // the radius of the circle
let total = 0; // the total number of points
let inCircle = 0; // the number of points in the circle
let pi;
let end = 300_000; // the maximum number of dots

function truth(ch){
  while (true) {
    if ( (""+(Math.PI).toFixed(10)).indexOf(ch) == -1) {
      // console.log(ch)
      ch = ch.substring(0, ch.length -1)
    }
    else {
      return ch
    }
  }
}

function setup() {
  createCanvas(402, 402);
  background(255);
  translate(width / 2, height / 2);
  stroke(0);
  strokeWeight(1);
  ellipse(0, 0, r * 2, r * 2);
  noFill();
  rectMode(CENTER);
  rect(0, 0, r * 2, r * 2);
  strokeWeight(1);
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i < 1_000; i++) {
    total++;
    x = random(-r, r);
    y = random(-r, r);
    d = dist(0, 0, x, y); // distance between the center and the point

    if (d < r) {
      // that means the point is in the circle
      inCircle++;
      stroke(13, 59, 102)
    } else {
      stroke(54, 155, 249);
    }
    point(x, y);
    
  }
  
  pi = 4 * (inCircle / total);
  document.getElementById("pi").innerHTML = "<b>" + pi.toFixed(5);

  if (total > end - 100) {
    noLoop();
    pi = pi.toFixed(6)
    document.getElementById("pi").innerHTML =
     `<span class="green">${truth(""+pi)}</span>${(""+pi).substring((truth(""+pi)).length,(""+pi).length)}
      with ${total} points <div class="explain">circle area &#247;\
      total area = ${inCircle} 
      &#247; ${total} = ${(inCircle / total).toFixed(3)}
      &#928; = 4 &#215; ${(inCircle / total).toFixed(3) }
      `
  }
}
