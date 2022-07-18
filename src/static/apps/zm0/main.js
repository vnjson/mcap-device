var scaling = "fit"; // this will resize to fit inside the screen dimensions
var width = 1000;
var height = 800;
var color = darker;
var outerColor = light;

var frame = new Frame(scaling, width, height, color, outerColor);
frame.on("ready", function() {
  zog("ready from ZIM Frame");

  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;

  // ZIM BITS - Icon Buttons and Toggle Buttons (2016 - updated 2020)

  // ZIM BUTTON
  // Button now has icon and rollIcon parameters
  // these accept any display object and will show instead of text
  // you can use then to go on top of the basic rectangle (or circle using corner:width/2)
  // or they can go on top of a custom backing that you supply the button with backing and rollbacking parameters

  // these examples (on three pages) show mostly buttons created with Pizzazz 2 icons
  // but there are three toggle buttons on the last page that use custom bitmaps as icons

  // Button now has toggle and rollToggle parameters
  // that toggle to these when pressed (or mousedowned depending on the toggleEvent parameter)
  // 1. if toggle is a string then the label is toggled (does not work if icon is set)
  // 2. if the toggle is a display object and the icon is set then toggle toggles with the icon
  // and rollToggle will toggle with the rollIcon
  // 3. if icon is not set then toggle will toggle with the backing
  // and rollToggle will toggle with the rollbacking

  // in these examples, the video play toggles with pause and sound toggles with mute
  // on the stylish page the 1, 2, 3 buttons toggle to look depressed
  // they control the alpha of the other buttons based on their toggle state

  // PIZZAZZ 2
  // pizzazz_02.js is similar to pizzazz_01.js (see the related ZIM Bit on Pizzazz Backings)
  // this Pizzazz set features standard interface icons
  // these are Shape objects that can be made with pizzazz.makeIcon
  // makeIcons adds a few tricks like skewing and making multiple copies
  // that can be scaled, alpha set and offset
  // the parameters are as follows followed by and example:

  // type, color, scale, multi, multiAlpha, multiScale, multiX, multiY, skewX, skewY, backing
  // var icon = pizzazz.makeIcon("play", green, 1, 6);
  // icon.center(stage);

  // most of the examples below use pizzazz icons and then pass them into buttons as the icon param
  // because the buttons are presented in sets, it is often easier to abstract the similar settings
  // so we are usually calling a function which sets the common properties
  // and then passing in to the function the properties that we want to change

  // STEPS

  // 0. A nice easy example - as the rest are put in loops for efficiency, etc.
  // 1. use loop() to loop through the pizzazz.icons object to get the types
  // 2. make an icon using pizzazz.makeIcon() which accepts ZIM DUO config object
  // 3. make icons for rollover too (optional)
  // 4. create a button for each icon and pass the icons in as icon and rollIcon
  // 5. note that we can rotate icons - eg. to change the direction of an arrow
  // 6. create a sample set of video controls
  // 7. create a container to hold the controls
  // 8. make the play button toggle between two icons: play and pause
  // 9. make the sound button toggle between two icons: sound and mute
  // 10. once the icons are made, add them to the Button with icon, rollIcon, toggle and rollToggle params
  // 11. add pizzazz to buttons with skewing and multiplying them
  // 12. you can also change the alpha and offset of the multi icons
  // 13. you can also apply a backing to the icon such as any pizzazz_01 backings or your own custom shapes
  // 14. you can make buttons with custom images
  // 15. create toggle buttons by passing in toggle and optional rollToggle
  // 16. use the toggled property of the button to find the toggled state of the button
  // 17. create a radio button navigation to traverse the pages
  // 18. create a Pages object to handle transitions between pages
  // 19. on the radioButtons change event change the pages with pages.go()
  // 20. get the new page to load
  // 21. get the direction for the slide transition

  /////////////////  STANDARD  //////////////////

  // 0. A nice easy example - as the rest are put in loops for efficiency, etc.

  var info = new Button({
    width:50,
    height:50,
    backgroundColor:blue, // or "red", "#666" etc.
    rollBackgroundColor:pink,
    corner:0,
    label:"",
    icon:pizzazz.makeIcon("info", "white").sca(.7) // scaling is optional
  })
    .pos(stageW - 100, 50)
  info.on("click", function(){zgo("../icons.html")});


  // 1. use loop() to loop through the pizzazz.icons object to get the types
  // or use a for (type in pizzazz.icons) {} but then we need a count variable too
  var standard = new Container();
  standard.name = "standard";
  var icon;
  var button;
  loop(pizzazz.icons, function(type, value, count) { // value not used in this case
    // 2. make an icon using pizzazz.makeIcon() which accepts ZIM DUO config object
    // try a skewX of 10 or 20 and see if you like that touch of pizzazz!
    icon =  pizzazz.makeIcon({
      type:type,
      color:dark,
      scale:1.2,
      multi:1,
      multiAlpha:.5,
      multiScale:0,
      multiX:2,
      multiY:2,
      skewX:0,
      skewY:0
    });
    // 3. make icons for rollover too (optional)
    rollIcon =  pizzazz.makeIcon({
      type:type,
      color:"white",
      scale:1.2,
    });
    // 4. create a button for each icon and pass the icons in as icon and rollIcon
    button = new Button({
      width:90,
      height:90,
      backgroundColor:lighter,
      rollBackgroundColor:green,
      gradient:.3,
      corner:45,
      icon:icon,
      rollIcon:rollIcon
    });

    // can access the icon and rollIcon once in the button like so
    button.icon.alpha = .9;
    button.rollIcon.alpha = .9;

    // 5. note that we can rotate icons - eg. to change the direction of an arrow
    if (icon.type == "arrowstick") {
      icon.rotation = 180; // or button.icon.rotation = 180;
      rollIcon.rotation = 180;
    }
    button.addTo(standard).loc(140 + 120 * (count%6), 140 + 110 * Math.floor(count/6));
  });

  ///////////////////// VIDEO /////////////////////

  // 6. create a sample set of video controls
  var video = new Container(stageW, stageH);
  video.name = "video";

  // just show a rect where video would be - see ZIM Bits video example for real
  var pretend = new Rectangle(600, 360, green)
    .addTo(video)
    .pos(200, 140);

  var spacing = 10;
  var iconScale = .6;
  var iconColor = light
  var buttonSize = 40;
  var buttonColor = grey;
  var buttonRoll = silver;
  var rollIconColor = dark;

  // 7. create a container to hold the controls
  var controls = new Container()
    .addTo(video)
    .pos(pretend.x, pretend.y + pretend.height + spacing);

  // 8. make the play button toggle between two icons: play and pause
  playButton = makeButton("play", "pause").addTo(controls);

  restartButton = makeButton("restart").addTo(controls);
  restartButton.x = playButton.x + restartButton.width + spacing;

  rwButton = makeButton("rewind");
  controls.addChild(rwButton);
  rwButton.x = restartButton.x + rwButton.width + spacing;

  ffButton = makeButton("fastforward").addTo(controls);
  ffButton.x = rwButton.x + ffButton.width + spacing;

  // 9. make the sound button toggle between two icons: sound and mute
  soundButton = makeButton("sound", "mute").addTo(controls);
  soundButton.x = ffButton.x + soundButton.width + spacing;


  function makeButton(type, toggle) {
    var icon =  pizzazz.makeIcon({
      type:type,
      color:iconColor,
      scale:iconScale
    });
    var rollIcon =  pizzazz.makeIcon({
      type:type,
      color:rollIconColor,
      scale:iconScale
    });

    var toggleIcon;
    if (toggle) {
      toggleIcon = pizzazz.makeIcon({
        type:toggle,
        color:iconColor,
        scale:iconScale
      });
      rollToggleIcon = pizzazz.makeIcon({
        type:toggle,
        color:rollIconColor,
        scale:iconScale
      });
    }
    // 10. once the icons are made, add them to the Button with icon, rollIcon, toggle and rollToggle params
    var button = new Button({
      width:buttonSize,
      height:buttonSize,
      backgroundColor:buttonColor,
      rollBackgroundColor:buttonRoll,
      gradient:.3,
      corner:4,
      icon:icon,
      rollIcon:rollIcon,
      toggleIcon:toggleIcon,
      rollToggleIcon:rollToggleIcon,
      shadowColor:-1
    });
    return button;
  }

  ///////////////////  FANCY  /////////////////////

  var stylish = new Container(stageW, stageH);
  stylish.name = "stylish";

  // 11. add pizzazz to buttons with skewing and multiplying them
  var settings = makeStylish({
    type:"settings",
    rotation:0,
    proportion:1.4,
    skew:20
  })
    .center(stylish)
    .mov(-200, -110);

  var heart = makeStylish({
    type:"heart",
    rotation:0,
    proportion:1.5,
    multi:3,
    multiScale:.6
  })
    .center(stylish)
    .mov(0, -110);

  var arrow = makeStylish({
    type:"arrow",
    rotation:0,
    proportion:1.7,
    multi:2,
    multiScale:.1,
    offset:2
  })
    .center(stylish)
    .mov(200, -110);

  // just keeping some things the same and changing others
  function makeStylish(type, rotation, proportion, multi, multiScale, offset, skew, backing) {
    var duo; if (duo = zob(makeStylish, arguments)) return duo;

    // 12. you can also change the alpha and offset of the multi icons
    // 13. you can also apply a backing to the icon such as any pizzazz_01 backings or your own custom shapes
    // type, color, scale, multi, multiAlpha, multiScale, multiX, multiY, skewX, skewY, backing
    var icon = pizzazz.makeIcon(type, blue, 1.5, multi, null, multiScale, offset, offset, skew, null, backing)
      .rot(rotation);
    var rollIcon = pizzazz.makeIcon(type, pink, 1.5, multi, null, multiScale, offset, offset, skew, null, backing)
      .rot(rotation);
    var button = new Button({
      width:icon.width*proportion, height:icon.width*proportion,
      icon:icon,
      rollIcon:rollIcon,
      corner:icon.width*proportion/2,
      backgroundColor:"#111",
      rollBackgroundColor:"#000",
      borderColor:"#333",
      borderWidth:3
    })
    return button;
  }

  // 14. you can make buttons with custom images

  // thanks - http://sharpfellows.com/post/WPFE-A-glass-button
  frame.loadAssets(["glass.png", "glass2.png", "glass3.png", "glass4.png"], "assets/");
  frame.on("complete", function() {
    var icon1 = frame.asset("glass.png").centerReg({add:false}).sca(.6); // up not rolled over
    var icon2 = frame.asset("glass2.png").centerReg({add:false}).sca(.6); // down not rolled over
    var icon3 = frame.asset("glass3.png").centerReg({add:false}).sca(.6); // up rolled over
    var icon4 = frame.asset("glass4.png").centerReg({add:false}).sca(.6); // down rolled over

    // 15. create toggle buttons by passing in toggle and optional rollToggle
    // if you pass in a string for toggle, the button toggles this with the label text
    // if you pass in a display object and icon is set, then the button toggles toggle with the icon
    // otherwise the button toggles toggle with the backing
    var glass1 = new Button({
      width:icon1.width*icon1.scaleX,
      height:icon1.height*icon1.scaleY,
      label:"1",
      backing:icon1, rollBacking:icon3,
      toggleIcon:icon2, rollToggleIcon:icon4,
      borderWidth:-1
    })
      .center(stylish)
      .mov(-100, 90);

    glass2 = glass1.clone()
      .addTo(stylish)
      .mov(100);
    glass2.text = 2;

    glass3 = glass1.clone()
      .addTo(stylish)
      .mov(200);
    glass3.text = 3;

    // 16. use the toggled property of the button to find the toggled state of the button
    glass1.on("click", function(e){settings.alpha = e.target.toggled?.2:1; stage.update();});
    glass2.on("click", function(e){heart.alpha = e.target.toggled?.2:1; stage.update();});
    glass3.on("click", function(e){arrow.alpha = e.target.toggled?.2:1; stage.update();});

  });


  /////////////////////  NAV  /////////////////////

  // 17. create a radio button navigation to traverse the pages
  var bar = new Rectangle(stageW, 70, "#444")
    .pos(null, 600);
  var options = new RadioButtons({
    size:35,
    buttons:["standard", "video", "stylish"],
    vertical:false,
    backgroundColor:silver,
    always:true

  })
    .center()
    .mov(0, 238);
  options.selectedIndex = 0;

  // 18. create a Pages object to handle transitions between pages
  var pages = new Pages({
    holder:stage,
    pages:[{page:standard}, {page:video}, {page:stylish}],
    transition:"slide",
    speed:.6
  }).addTo();

  // 19. on the radioButtons change event change the pages with pages.go()
  var content = [standard, video, stylish];
  options.on("change", function() {

    // 20. get the new page to load
    var newPage = content[options.selectedIndex];

    // 21. get the direction for the slide transition
    var direction = newPage==standard?"left":newPage==stylish?"right":pages.page==standard?"right":"left";

    // // same as above but with switch statement
    // var direction;
    // switch (newPage) {
    //  case standard:
    //    direction = "left";
    //    break;
    //  case stylish:
    //    direction = "right";
    //    break;
    //  default:
    //    switch (pages.page) {
    //      case standard:
    //        direction = "right";
    //        break;
    //      default:
    //        direction = "left";
    //    }
    // }

    // // same as above but with if statement
    // var direction;
    // if (newPage == standard) {
    //  direction = "left"
    // } else if (newPage == stylish) {
    //  direction = "right";
    // } else {
    //  if (pages.page == standard) {
    //    direction = "right";
    //  } else {
    //    direction = "left";
    //  }
    // }

    pages.go(newPage, direction);

    // // just swapping pages without animation
    // loop(content, function(c) {
    //  stage.removeChild(c);
    // });
    // stage.addChild(content[options.selectedIndex]);
    // stage.update();
  });


  var title = "Icon Buttons and Toggle Buttons";
  var label = new Label(title, 30, null, "#666")
    .pos(70, 70);

  var docItems = "Frame,Container,Rectangle,Label,Button,RadioButtons,loop,pos,mov,rot,sca,addTo,centerReg,center,Pages,loop,zog";
  makeFooter(stage, stageW, stageH, null, docItems); // ZIM BITS footer - you will not need this

  stage.update();

}); // end of ready