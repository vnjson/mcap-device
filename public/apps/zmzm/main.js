const frame = new Frame("fit", 1024, 768, yellow, dark);
frame.on("ready", ()=>{ // ES6 Arrow Function - similar to function(){}
  zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

  // often need below - so consider it part of the template
  const stage = frame.stage;
  const stageW = frame.width;
  const stageH = frame.height;

  // REFERENCES for ZIM at https://zimjs.com
  // see https://zimjs.com/intro.html for an intro example
  // see https://zimjs.com/learn.html for video and code tutorials
  // see https://zimjs.com/docs.html for documentation
  // see https://codepen.io/topic/zim/ for ZIM on CodePen
  
  // *** NOTE: ZIM Cat defaults to time in seconds
  // All previous versions, examples, videos, etc. have time in milliseconds
  // This can be set back with TIME = "milliseconds" but we suggest you give it a try!
  // There will be a warning in the conslole if your animation is not moving ;-)

  // CODE HERE
  STYLE = {
    color:blue.darken(.3), 
    backgroundColor:blue.lighten(.3), 
    toggleBackgroundColor:blue.lighten(.3),
    borderColor:blue.darken(.3),
    always:true, // to make radiobuttons always have one selected   
    Label:{backgroundColor:ignore}
  }

  new Label("ON/OFF Components Wired in ZIM", 45).center().mov(0,-200)

  const radio = new RadioButtons(50,["OFF","ON"]).center();
  const check = new CheckBox(50,"ON").center().mov(300);
  const toggle = new Toggle(100,50,"ON").center().mov(-300)
  Style.add({
    backgroundColor:blue.toAlpha(.3),
    Label:{size:40, centerReg:true}
  });
  // Selector often works with grids of objects
  // so it receives a Tile for its options
  // The objects in the tile should be centerReg - set in Style above...
  const selector = new Selector(new Tile({
    obj:[new Label("OFF"), new Label("ON")],
    cols:2,
    spacingH:30,
    spacingV:20,
    unique:true // otherwise ZIM VEE will randomly pick from obj array
  })).center().mov(0,200);

  // wire the components together - true means both ways 
  // convert any values needing converting in the filter parameter
  // also turn on and off the bulb in the call parameter
  radio
    .wire(selector, "selectedIndex", true)
    .wire(toggle, "toggled", true, null, convert)
    .wire(check, "checked", true, null, convert, ()=>{            
      bulb.color = check.checked?white:mist;
      end.color = check.checked?silver:tin;
      rings.alpha = check.checked?1:0;
    });

  // convert CheckBox and Toggle true/false 
  // to RadioButton and Selector 0/1 and visa versa
  function convert(data) {
    if (data===true) data = 1;
    else if (data===false) data = 0;
    else if (data===1) data = true;
    else if (data===0) data = false;
    return data; // filter receives data and must return data
  }

  STYLE = {}; // or Style.clear();


  // make a light 
  const light = new Container(140,140).pos(120,120,LEFT,BOTTOM).sca(.8).sha();
  const bulb = new Circle(70,mist).sca(.95,1).center(light);
  const end = new Rectangle(50,50,tin,null,null,[0,0,15,15]).pos(0,-30,CENTER,BOTTOM,light).bot();
  const nub = new Circle(12,tin).pos(0,-10,CENTER,BOTTOM,end,0);
  const rings = new Container(stageW, stageH).addTo().bot().alp(0);
  loop(5, i=>{
    // add each ring to back as they get bigger
    new Circle(i*200, yellow.lighten((5-i)*.1)).loc(bulb).addTo(rings, 0)
  });

  stage.update(); // this is needed to show any changes

  // DOCS FOR ITEMS USED
  // https://zimjs.com/docs.html?item=Frame
  // https://zimjs.com/docs.html?item=Container
  // https://zimjs.com/docs.html?item=Circle
  // https://zimjs.com/docs.html?item=Rectangle
  // https://zimjs.com/docs.html?item=Label
  // https://zimjs.com/docs.html?item=CheckBox
  // https://zimjs.com/docs.html?item=RadioButtons
  // https://zimjs.com/docs.html?item=Toggle
  // https://zimjs.com/docs.html?item=Selector
  // https://zimjs.com/docs.html?item=wire
  // https://zimjs.com/docs.html?item=loop
  // https://zimjs.com/docs.html?item=sha
  // https://zimjs.com/docs.html?item=pos
  // https://zimjs.com/docs.html?item=loc
  // https://zimjs.com/docs.html?item=mov
  // https://zimjs.com/docs.html?item=bot
  // https://zimjs.com/docs.html?item=alp
  // https://zimjs.com/docs.html?item=sca
  // https://zimjs.com/docs.html?item=addTo
  // https://zimjs.com/docs.html?item=center
  // https://zimjs.com/docs.html?item=Tile
  // https://zimjs.com/docs.html?item=lighten
  // https://zimjs.com/docs.html?item=darken
  // https://zimjs.com/docs.html?item=toAlpha
  // https://zimjs.com/docs.html?item=zog
  // https://zimjs.com/docs.html?item=STYLE

  // FOOTER
  // call remote script to make ZIM icon - you will not need this
  createIcon(); 

}); // end of ready