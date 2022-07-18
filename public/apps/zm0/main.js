var scaling = "fit"; // fit scales to fit the browser window while keeping the aspect ratio
var width = 1024; // can go higher...
var height = 768;
var frame = new Frame({scaling:scaling, width:width, height:height}); // see docs for more options and info
frame.on("ready", function() {
  zog("ready from ZIM Frame");

  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  frame.color = frame.green;


  var rect = new Rectangle(200,200,frame.pink).center(stage);
  rect.on("click", function(e) {
    rect.color = (rect.color==frame.pink?frame.blue:frame.pink);
    stage.update();
  });


  var radioButtons = new RadioButtons().addTo(stage).pos(100,100);

  var checkBox = new CheckBox({label:"hello"}).addTo(stage).pos(100,400);

  var output = new Label({text:"Debug message label"}).addTo(stage).pos(10,700)

  var accessibility = new Accessibility({
    alwaysHighlight:true,
    AHTime:0
  });
  accessibility.on("change", function(e) {
    output.text = e.title;
    stage.update();
  });
  frame.on("resize", function() {
    accessibility.resize();
    stage.update();
  });
  stage.update(); // update the stage to see any changes


});