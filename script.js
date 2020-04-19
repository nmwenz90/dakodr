//P5
let reverb, freqValue, w;
let pic;
// let context = new Tone.Context();

let playPauseButton = document.querySelector('#playPauseButton');
// let verb = new Tone.Reverb(1.5);
// let filter;
let freqAnalyser;
let musicPlayer;
function preload() {
	pic = loadImage('https://res.cloudinary.com/dvwvkt7iq/image/upload/v1587261034/Drawing_y4rtlx.png');
	// filter = new Tone.Filter(800, 'lowpass')
	freqAnalyser = new Tone.Analyser('fft').toMaster();
	musicPlayer = new Tone.Player(
		'https://res.cloudinary.com/dvwvkt7iq/video/upload/v1587255500/hypebeat_znjnhe.mp3'
	).connect(freqAnalyser);
	musicPlayer.autostart = true;
}

// musicPlayer.volume.value = -3;

// w = w / 64;
// if (screen.width <= 480) musicPlayer.autostart = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	image(pic, 0, 0, 1580, 800);
}

function draw() {
	// background('#FFA900');
	let x1 = floor(random(width));
	let y1 = 0;

	let x2 = round(x1 + random(-7, 7));
	let y2 = round(random(-5, 5));

	let wid = floor(random(10, 80));
	let h = height;

	set(x2, y2, get(x1, y1, wid, h));
	// translate(width / 2 - 200, height / 2);
	// let circleResolution = map(mouseY, 0, height, 2, 80);
	// let radius = mouseX - width / 2 + 0.5;
	freqValue = freqAnalyser.getValue();
	console.log(freqValue);
	// let angle = TWO_PI / circleResolution;
	//connect height with lower frequencies
	// strokeWeight(mouseY / 20);
}

//BUTTON
// playPauseButton.style.color = '#501DFF';

//Toggle between play and pause, clicking changes the symbol of the inner html of the play pause button
playPauseButton.addEventListener('click', () => {
	if (musicPlayer.state === 'started') {
		musicPlayer.stop();
		playPauseButton.innerHTML = '►';
		buttoncol();
	} else if (musicPlayer.state === 'stopped') {
		playPauseButton.innerHTML = '&#9724';
		buttoncol();
		musicPlayer.start();
	}
});

function buttoncol() {
	playPauseButton.style.color = '#B07DFF';
}
//if the song isnt playing the button text should be arrow
//else the button text should be two ||
