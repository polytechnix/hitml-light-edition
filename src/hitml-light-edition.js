function setup() {
	createCanvas(400, 250);
	background(255);
	fill(0);

	prevString = 0;
	prevFret = 0;
	quarter = 0;
	stemLength = 210;
	legato = 23;
	forward = 0;
	backward = 0;
	
	textFont("sans-serif");
	textSize(30);
	textAlign(center, center);
	textLeading(33);

  for (i = 1; i < 6; i = i + 1) {
		stroke(180);
		line(10, i * 33, 390, i * 33);
	}

	for (j = 0; j < 7; j = j + 1) {
		if (j != 3) {
			strokeWeight(3);
			stroke("#36483f");
			line(j * 48 + 36, stemLength, j * 48 + 82, stemLength);
		}
	}

	note();
}

function note() {

	for (i = 1; i < 9; i = i + 1) {
		
		pluckedString = random(strings);
		
		if (pluckedString < prevString){
		 forward = forward +1;
		}
		
		if (pluckedString > prevString){
		 backward = backward +1;
		}
		
		if (pluckedString < prevString && forward > 2){
			pluckedString = random(strings);
			forward = 1
		}
		
		if (pluckedString > prevString && backward > 2){
  		pluckedString = random(strings);
	  	backward = 1;
		}

		if (pluckedString < 5) {
			fingeredFret = random(frets);
		} else {
			fingeredFret = "0";
		}

    xpos = i * 48 - 25;
		ypos = pluckedString * 33 ;
		
		if (pluckedString == prevString && fingeredFret == prevFret && quarter != 1 && legato != 1) {
			stroke(255);
			strokeWeight(3);
			strokeCap(SQUARE);
			line(xpos - 83, stemLength, xpos + 60, stemLength);
			quarter = 1;

			if (i == 3 || i == 7) {
				stroke(255);
				line(xpos - 83, stemLength, xpos + 108, stemLength);
				stroke("#36483f");
				line(xpos - 83, stemLength, xpos - 70, stemLength - 20);
				line(xpos + 60, stemLength, xpos + 73, stemLength - 20);

			} else if (i == 8 || i==4) {
				stroke(255);
				line(xpos - 83, stemLength, xpos + 60, stemLength);
				stroke("#36483f");
				
			} else if (i == 5) {
				stroke(255);
				line(xpos - 132, stemLength, xpos + 108, stemLength);
				stroke("#36483f");
				line(xpos - 83, stemLength, xpos - 70, stemLength - 20);
				line(xpos + 60, stemLength, xpos + 73, stemLength - 20);
			}

		} else {
		
			if (pluckedString == prevString && fingeredFret != prevFret && quarter != 1) {
				i=i-1;
				xpos=xpos-24;
				strokeWeight(3);
		  	strokeCap(SQUARE);
				stroke("#36483f");
				line(xpos-12, stemLength, xpos+12, stemLength);
			  line(xpos-12, stemLength-6, xpos+12, stemLength-6);
				legato = 1;
			}

      noStroke();
			fill(255);
			rect(xpos, ypos - 20, 24, 40)

			stroke("#36483f");
			strokeWeight(1);
			line(xpos + 12, ypos + 20, xpos + 12, stemLength);

      fill("#36483f");
			noStroke();
			text(fingeredFret, xpos + 12, ypos);
			
			if (pluckedString == prevString && fingeredFret != prevFret && quarter != 1) {
				noFill();
				stroke("#36483f");
				strokeWeight(1);
				arc(xpos, ypos - 13, 24, 20, 3.5, 6);
			}
			
			prevString = pluckedString;
			prevFret = fingeredFret;
		}
	}
}

function main(){
  setup();
}
