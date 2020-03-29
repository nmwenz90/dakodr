function setup() {
    createCanvas(1050, 700);
  }

  function draw() {
    background('#FFA900');
    stroke('rgba(112,255,350,0.8)');
    fill('rgba(255,224,164,0.4)');
    translate(width/2, height/2)
    
    let circleResolution = map(mouseY, 0, height, 2, 80);
    let radius = mouseX-width/2 + 0.5;
    let angle = TWO_PI / circleResolution;
    
    strokeWeight(mouseY/20);
    
    beginShape();
      for (let i = 0; i <= circleResolution; i++){
        let x = cos(angle * i) * radius;
        let y = sin(angle * i) * radius;
        line(0,0,x,y);
        vertex(x,y)
        vertex(x+random(20,50), y+random(20,50))
    }
    
      endShape(CLOSE)
    
  }

  document.getElementById('stream').addEventListener.click(() => console.log('clicked') )