let txt;
let order = 6;
let newArr = [];

let ngrams = {};

let button;
let genText;

let inp;

/*
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
*/


//function preload() {

//}



function textLoadingDone(result) {
    console.log("Text loading done!");

    newArr = result.join('\n');
    console.log(newArr.length);

    for (let i = 0; i <= newArr.length - order; i++) {
        let gram = newArr.substring(i, i+order);
        if (!ngrams[gram]) {
            ngrams[gram] = [];
        }
        ngrams[gram].push(newArr.charAt(i+order));
    }

    console.log(ngrams);


    button = createButton("Generate");
    //button.position(20, 20);
    button.mousePressed(markovIt);
}

function markovIt() {

    //let currentGram = newArr.substring(0, order);
    let currentGram = inp.value().substring(0, order);//inp.value().length-order, inp.value().length);
    let res = currentGram;

    for (let i = 0; i<1000; i++) {
        let possibilities = ngrams[currentGram];
        if (!possibilities) {
            break;
        }

        let next = random(possibilities);
        res += next;

        let len = res.length;
        currentGram = res.substring(len-order, len);
    }

    createP(res);
    //genText.html(res);
}
/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //centerCanvas();
}
*/

function myInputEvent () {
        //console.log("input: " + this.value());
}
function setup() {
  // Crude interface
  //lossP = createP('loss');
  noCanvas();

  createP("Markov text generator, based on the \"Wikipedia - Unicorn\" page.<br>Enter a 6 character phrase to begin. <br>If phrase doesn\'t exist, text not generated.");

  console.log("Loading text...");

  inp = createInput('unicorn');
  inp.input(myInputEvent);

  txt = loadStrings('data/textUnicorn.txt', textLoadingDone);


  genText = createP("");

  //genText.position(20, 40);

  //cnv = createCanvas(windowWidth, windowHeight);
  //background(0);

  //cnv.style('display', 'block');
  //centerCanvas();

  /*
  labelP = createDiv(' ');
  labelP.position(50, 50);
  labelP.class('text');

  rSlider = createSlider(0, 255, 80);
  gSlider = createSlider(0, 255, 150);
  bSlider = createSlider(0, 255, 255);

  rSlider.position(50, windowHeight-50);
  gSlider.position(250, windowHeight-50);
  bSlider.position(450, windowHeight-50);
  */

  //rSlider.changed(updateRGB);
  //gSlider.changed(updateRGB);
  //bSlider.changed(updateRGB);

  //rSlider.class('slider');
  //gSlider.class('slider');
  //bSlider.class('slider');

  //labelRGB = createDiv(' ');
  //labelRGB.position(50, windowHeight-125);
  //labelRGB.class('textRGB');
}

function updateRGB()
{
    //labelRGB.html(`RGB (R: ${rSlider.value()}, G: ${gSlider.value()}, B: ${bSlider.value()}`);
}
/*
function classify() {
    //if (rSlider.value() > 250 && gSlider.value() > 250 && bSlider.value() > 250) {
    //    labelP.html(`white-ish <br> confidence: pretty sure :)`);
    //} else {

  let inputs = {
    //  r: 100,
    //  g: 20,
    //  b: 200
    r: rSlider.value(),
    g: gSlider.value(),
    b: bSlider.value()
  }

      neuralNetwork.classify(inputs, gotResults);
  //}
}

function gotResults(error, results) {
  //let colorInfo = '${results[0].label}' + '\n' + 'confidence: ${results[0].confidence.toFixed(2)}';
  //console.log(results);
  if (error) {
    console.error(error);
  } else {
    //labelP.html(colorInfo);
    labelP.html(`${results[0].label} <br> confidence: ${results[0].confidence.toFixed(2)}`);
    classify();
  }
}
*/

function draw() {
  //background(/*rSlider, gSlider, bSlider*/rSlider.value(), gSlider.value(), bSlider.value());
  //labelRGB.html(`RGB (R: ${rSlider.value()} G: ${gSlider.value()} B: ${bSlider.value()})`);
}
