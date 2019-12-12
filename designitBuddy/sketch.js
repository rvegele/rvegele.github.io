let neuralNetwork;

let cnv;

let _1Slider, _2Slider, _3Slider, _4Slider, _5Slider, _6Slider, _7Slider, _8Slider;
let skillP1, skillP2, skillP3, skillP4, skillP5, skillP6, skillP7, skillP8;
let sliderInputs;
let labelResults;

let faces = [];
let face1, face2, face3;

let facesJSON;

let fitCalc = 0;

let name1Fit = 0;
let name2Fit = 0;
let name3Fit = 0;

let valSum = 0;
let valueDescriptor;
let matched;

function preload() {

    //img = loadImage('assets/laDefense.jpg');
    let faceURL = 'faces/peoples.json';
    facesJSON = loadJSON(faceURL);

    //for (let i = 0; i<39; i++) {
    //    faces[i] = loadImage('faces/face${i}.jpg');
    //}
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}

function setup() {
  // Crude interface
  //lossP = createP('loss');

  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  centerCanvas();

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

  labelRGB = createDiv(' ');
  labelRGB.position(50, windowHeight-125);
  labelRGB.class('textRGB');
  */

  labelResults = createP('Results:');
  //labelResults.position(25, 200);
  let hPos = windowHeight * 0.26;
  labelResults.position(25, hPos);

  _1Slider = createSlider(1, 100, 1);
  _2Slider = createSlider(1, 100, 1);
  _3Slider = createSlider(1, 100, 1);
  _4Slider = createSlider(1, 100, 1);
  _5Slider = createSlider(1, 100, 1);
  _6Slider = createSlider(1, 100, 1);
  _7Slider = createSlider(1, 100, 1);
  _8Slider = createSlider(1, 100, 1);

  _1Slider.class('range-slider__range');
  _2Slider.class('range-slider__range');
  _3Slider.class('range-slider__range');
  _4Slider.class('range-slider__range');
  _5Slider.class('range-slider__range');
  _6Slider.class('range-slider__range');
  _7Slider.class('range-slider__range');
  _8Slider.class('range-slider__range');



  _1Slider.changed(classify);
  _2Slider.changed(classify);
  _3Slider.changed(classify);
  _4Slider.changed(classify);
  _5Slider.changed(classify);
  _6Slider.changed(classify);
  _7Slider.changed(classify);
  _8Slider.changed(classify);

  /*
  _1Slider.changed(function ping() {
      console.log(_1Slider.value());
  });
  */




  skillP1 = createP('Research');
  skillP2 = createP('Concept Dev.');
  skillP3 = createP('Prototyping');
  skillP4 = createP('Business Dev.');
  skillP5 = createP('Proj. Management');
  skillP6 = createP('Design');
  skillP7 = createP('Storytelling');
  skillP8 = createP('Leadership');

  skillP1.class('skillClass');
  skillP2.class('skillClass');
  skillP3.class('skillClass');
  skillP4.class('skillClass');
  skillP5.class('skillClass');
  skillP6.class('skillClass');
  skillP7.class('skillClass');
  skillP8.class('skillClass');

  valueDescriptor = createP('Task Skill Requirement (Low - High)');
  valueDescriptor.class('skillDescriptor');
  valueDescriptor.position(25, windowHeight-325);

  skillP1.position(25, windowHeight-300);
  _1Slider.position(25, windowHeight-260);

   skillP2.position(25, windowHeight-230);
  _2Slider.position(25, windowHeight-190);

    skillP3.position(25, windowHeight-160);
  _3Slider.position(25, windowHeight-120);

  skillP4.position(25, windowHeight-90);
  _4Slider.position(25, windowHeight-50);



    skillP5.position(width/2, windowHeight-300);
  _5Slider.position(width/2, windowHeight-260);

    skillP6.position(width/2, windowHeight-230);
  _6Slider.position(width/2, windowHeight-190);

  skillP7.position(width/2, windowHeight-160);
  _7Slider.position(width/2, windowHeight-120);

    skillP8.position(width/2, windowHeight-90);
    _8Slider.position(width/2, windowHeight-50);



  let nnOptions = {
    inputs: 8,//['Research', 'ConceptDev', 'Prototyping', 'BusinessDev', 'ProjManagement', 'Design', 'Storytelling', 'Leadership'],
    outputs: 1,//['label'],
    task: 'classification',
    debug: true
  };

  neuralNetwork = ml5.neuralNetwork(nnOptions);

  // option 1: Load model explictly pointing to each file
  const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }

  neuralNetwork.load(modelDetails, modelReady);

  // styles
  // font-family: HelveticaNeueLTStd-Hv;
  //font-size: 12px;
  //color: #000000;
  //letter-spacing: 0;


/*
  font-family: "HelveticaNeueLTStd-Bd";
  src: url("HelveticaNeueLTStd-Bd.otf");
}
@font-face {
  font-family: "HelveticaNeueLTStd-Blk";
  src: url("HelveticaNeueLTStd-Blk.otf");
}
@font-face {
  font-family: "HelveticaNeueLTStd-Roman";
  src: url("HelveticaNeueLTStd-Roman.otf");
*/

  labelResults.style("color","#000000");

  labelResults.style("text-align", "initial");
  labelResults.style("width", "100%");
  labelResults.style("align-self", "flex-start");
  labelResults.style("white-space", "pre-wrap");
  labelResults.style("font-family", "HelveticaNeueLTStd-Blk");
  //labelResults.style("font-family", "Helvetica Neue LT Std");
  //labelResults.style("font-weight", "800");
  labelResults.style("font-size", "22px");
  labelResults.style("line-height", "1.3");
}

function modelReady() {
  console.log('model loaded!')

  //console.log(_1Slider.value());
  classify();
};

function updateRGB()
{
    labelRGB.html(`RGB (R: ${rSlider.value()}, G: ${gSlider.value()}, B: ${bSlider.value()}`);
}

function classify() {

    sliderInputs = {
        Research: _1Slider.value(),
        ConceptDev: _2Slider.value(),
        Prototyping: _3Slider.value(),
        BusinessDev: _4Slider.value(),
        ProjManagement: _5Slider.value(),
        Design: _6Slider.value(),
        Storytelling: _7Slider.value(),
        Leadership: _8Slider.value()
    }


    valSum = 0;

    valSum += sliderInputs.Research;
    valSum += sliderInputs.ConceptDev;
    valSum += sliderInputs.Prototyping;
    valSum += sliderInputs.BusinessDev;
    valSum += sliderInputs.ProjManagement;
    valSum += sliderInputs.Design;
    valSum += sliderInputs.Storytelling;
    valSum += sliderInputs.Leadership;

    if (valSum <= 8) {
        labelResults.html("Select task criteria.");
        // classify();
    } else if (valSum >= 800){
        labelResults.html("Adam | Match: 100.00");
    } else {
        neuralNetwork.classify([sliderInputs.Research, sliderInputs.ConceptDev, sliderInputs.Prototyping, sliderInputs.BusinessDev, sliderInputs.ProjManagement, sliderInputs.Design, sliderInputs.Storytelling, sliderInputs.Leadership], gotResults);
    }
}

function gotResults(error, results) {
  //let colorInfo = '${results[0].label}' + '\n' + 'confidence: ${results[0].confidence.toFixed(2)}';
  //console.log(results);
  if (error) {
    console.error(error);
  } else {
    //console.log(results);
    //labelP.html(colorInfo);
    //labelP.html(`${results[0].label} <br> confidence: ${results[0].confidence.toFixed(2)}`);

    let resString = "";

    //labelResults.html("Results:" + "<br>");

    //resString += "Best for the job: ";
    //resString += "<br>";
    //resString += "<br>";

    fitCalc = 0;

    name1Fit = 0;
    name2Fit = 0;
    name3Fit = 0;

    let name1 = results[0].label;
    let name2 = results[1].label;
    let name3 = results[2].label;

    for (let i = 0; i < 3; i++) {
        //resString += `${results[i].label} - fit: ${results[i].confidence.toFixed(2)}`;
        //resString += "<br>";
        fitCalc += results[i].confidence;
    }

    name1Fit = results[0].confidence * 100 / fitCalc;
    name2Fit = results[1].confidence * 100 / fitCalc;
    name3Fit = results[2].confidence * 100 / fitCalc;

    resString += "Person for the job:";
    resString += "<br>";
    resString += "<br>";
    resString += name1 + " | Match: " + name1Fit.toFixed(2);
    resString += "<br>";
    resString += name2 + " | Match " + name2Fit.toFixed(2);
    resString += "<br>";
    resString += name3 + " | Match " + name3Fit.toFixed(2);

    labelResults.html(resString);
    //classify();

  }
}

function draw() {

}
