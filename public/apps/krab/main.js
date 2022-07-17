const frame = new Frame("fit", 1024, 768, dark, darker);
frame.on("ready", ()=>{ // ES6 Arrow Function - similar to function(){}
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    // often need below - so consider it part of the template
    let stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    // REFERENCES for ZIM at http://zimjs.com
    // see http://zimjs.com/learn.html for video and code tutorials
    // see http://zimjs.com/docs.html for documentation
    // see https://www.youtube.com/watch?v=pUjHFptXspM for INTRO to ZIM
    // see https://www.youtube.com/watch?v=v7OT0YrDWiY for INTRO to CODE

    // CODE HERE
  
    new Label("PROGRESS",null,null,light).loc(30,35)
    
    const date = new Date();
    
    STYLE = {
        Label:{color:silver},
        Stepper:{backgroundColor:blue, color:white}
    }
    
    const year = new Stepper({min:1920,max:date.getFullYear(),currentValue:1980})
        .sca(.4)
        .change(calc);
    const yearText = new Label("birth year").sca(.5);
        
    const month = new Stepper({min:1,max:12})
        .sca(.4)
        .change(calc);
    const monthText = new Label("birth month").sca(.5);
            
    const day = new Stepper({min:1,max:31})
        .sca(.4)
        .change(calc);
    const dayText = new Label("birth day").sca(.5);
        
    STYLE = {align:CENTER};
    const interface = new Tile([year,month,day,yearText,monthText,dayText],3,2,10,8,true).pos(0,30,CENTER,TOP)
    STYLE = {}

    function calc() {
        let count=0;
        const birth = new Date(year.currentValue, month.currentValue-1, day.currentValue-1)
        let tot = Math.round((date.getTime()-birth.getTime())/(1000*60*60*24)/7);
        if (tot < 0) tot = 0;
        loop(tile.items2DCols, (rows,i)=>{
            loop(rows,dot=>{
                if (count <= tot) dot.color = green;
                else dot.color = black;
                count++;
            });
        });
    stage.update();
    }

    const tile = new Tile(new Circle(5), 88, 52,1,1).center().mov(0,10)
        
    calc();

    stage.update(); // this is needed to show any changes
  
    // DOCS FOR ITEMS USED
  // https://zimjs.com/docs.html?item=Frame
  // https://zimjs.com/docs.html?item=Circle
  // https://zimjs.com/docs.html?item=Label
  // https://zimjs.com/docs.html?item=Stepper
  // https://zimjs.com/docs.html?item=change
  // https://zimjs.com/docs.html?item=loop
  // https://zimjs.com/docs.html?item=pos
  // https://zimjs.com/docs.html?item=loc
  // https://zimjs.com/docs.html?item=mov
  // https://zimjs.com/docs.html?item=sca
  // https://zimjs.com/docs.html?item=center
  // https://zimjs.com/docs.html?item=Tile
  // https://zimjs.com/docs.html?item=getTime
  // https://zimjs.com/docs.html?item=zog
  // https://zimjs.com/docs.html?item=STYLE
  


}); // end of ready