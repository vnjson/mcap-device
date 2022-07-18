// ZIM Foundation for Creative Coding icon
    function createIcon(x, y, frame, icon, rollIcon) {
        if (zot(x)) x = 30;
        if (zot(y)) y = 30;
        if (zot(frame)) frame = zimDefaultFrame;
        if (zot(icon)) icon = frame.makeIcon(null,darker).alp(.8).centerReg({add:false});
        if (zot(rollIcon)) rollIcon = frame.makeIcon(null,darker).alp(1).centerReg({add:false});
        return new Button({
            label:"",
            width:icon.width,
            height:icon.height,
            backing:icon,
            rollBacking:rollIcon,
            style:false
        }).sca(.5).pos(x, y, RIGHT, BOTTOM).alp(0).animate({alpha:1}, zim.TIME=="seconds"?.7:700).tap(()=>{zgo("https://zimjs.com", "_blank")});
    }

    function createGreet(x, y, frame) {
        if (zot(frame)) frame = zimDefaultFrame;
        if (zot(x)) x = 80;
        if (zot(y)) y = 40;
        const greet = new Button({
            width:400,
            label:"VIEW GREETING",
            backgroundColor:blue,
            rollBackgroundColor:green,
            corner:0
        }).centerReg({add:false}).sca(.5).pos(x,y,false,true).tap(go);
        const greetRings = greet.rings = frame.makeCircles(30, true).loc(greet).mov(-greet.width/2-20);
        greetRings.getChildAt(0).sha().tap(go);
        function go() {
            zgo("https://codepen.io/zimjs/details/QPeVRX", "_blank");
        }
        frame.stage.update();
        return greet;
    }

    function createCode(x, y, frame, wait) {
        if (zot(frame)) frame = zimDefaultFrame;
        if (zot(x)) x = 120;
        if (zot(y)) y = 110;
        if (zot(wait)) wait = 1000;
        const creative = new Container(100,70)
            .pos(x,y,LEFT,BOTTOM)
            .animate({props:{alpha:0}, from:true, wait:wait})
            .tap(()=>{
                zgo("https://www.youtube.com/watch?v=S6x0OgTEY5Q&list=PLCIzupgRt1pbzqc_M6kyajQ1XawfyaMq9", "_blank")
            });
        const rect = new Rectangle(65,40,"red",null,null,8)
            .pos(0,0,CENTER,TOP,creative)
            .sha("rgba(0,0,0,.2)",3,3,3)
            .alp(.6)
            .hov(1);
        new Triangle(20,20,20,white).rot(90).center(rect).mov(3).addTo(creative);
        new Label("CREATIVE CODING", 14, null, white).alp(.8).pos(0,0,CENTER,BOTTOM,creative)
        return creative;
    }
    
    function createNFT(url, backgroundColor) {
        
        if (zot(url)) url = "https://zimjs.com/nft";
        if (backgroundColor===true) backgroundColor = darker;
        // Make letters from Rectangle parts
        
        // each time colors is called it will get the next in this series (wraps too)
        const colors = series(blue, green, pink, orange, pink, yellow);
        
        // make the vertical stems with Tile just for convenience
        const letters = new Tile(new Rectangle(100,300,colors), 4, 1, 150);
        
        // add rectangles based on location of stems and adjust one of the stems
        new Rectangle(100,320,colors())
            .reg(100) // makes rotating from top right corner easier
            .rot(-44) // just eyeballed ;-)
            .loc(letters.items[0], null, letters) // using loc(obj,null) rather than loc(x,y)
            .mov(100); 
        letters.items[2].mov(-100); // move stem of F back
        new Rectangle(250,100,colors()) // F top
            .loc(letters.items[2], null, letters);    
        new Rectangle(100,100,colors())
            .loc(letters.items[2], null, letters)
            .mov(99.5,99.5);
        new Rectangle(125,100,colors())
            .loc(letters.items[3], null, letters)
            .mov(-75);
        new Rectangle(125,100,colors())
            .loc(letters.items[3], null, letters)
            .mov(50);
            
        letters.loop(letter => {
            letter.alp(0);
        });
        letters.items[2].mov(0,1);
        letters.items[3].mov(0,1);
        letters.items[3].color = blue
        letters.getChildAt(letters.numChildren-2).color = green;
        letters.getChildAt(letters.numChildren-1).color = orange;
        
        letters.resetBounds();
        letters.animate({
            wait:.75,
            props:{alpha:1},
            time:.3,
            sequence:.06
        });
        
        const holder = new Container();
        letters.sca(.12).addTo(holder);
        if (backgroundColor) {
            new Rectangle(holder.width+12, holder.height+12, backgroundColor)
                .addTo(holder)
                .bot()
                .alp(0)
                .animate({
                    wait:.75,
                    props:{alpha:1},
                    time:.8
                });
            letters.mov(6,6);
        }
        holder.expand().tap(()=>{
            zgo(url, "_blank")
        }); 
        
        return holder;
    }


/**
 * pizzazazz
 */

// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! http://zimjs.com/donate

// ZIM PIZZAZZ - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2016 (c) ZIM
// Pizzazz is a helper module for ZIM that adds a little design love!
// SEE also Pizzazz 2 for icons

// VERSION 1 - Shapes for Labels, Buttons and Panes
// See the ZIM Bit on Pizzazz for an example: https://zimjs.com/bits/view/pizzazz.html

// import this js file in the top of your code below where you import createjs
// you can get a custom zim.Shape (createjs.Shape with extra members)
// by using pizzazz.makeShape(type, color, width, height)
// and then pass this into the backing parameter in zim.Label, zim.Button or zim.Pane
// and rollBacking parameter in zim.Button
// pizzazz.listShapes() will list your shape options in the console

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See PIZZAZZ MODULE at bottom

var pizzazz = function(pizzazz) {
  pizzazz.shapes = pizzazz.types = { // types kept for legacy
    menu:[[1.2,1.2],[0,3],"AAJD5InKBGIiBp9IIwCgIJViMIg7Jpg", new createjs.Rectangle(-58,-31.9,116,64)],
    bat:[[1.6,1.7],[-1,2],"ACGCYIiKBVIh9g3ImkBaQgej8D/keICLBzIA3AuIA3haIBCBAIAghAIBMBPIBPg5IBlhiQELEjAHD8g", new createjs.Rectangle(-55.3,-27.2,110.8,54.5)],
    lips:[[1.6,1.6],[1,1],"AjpC+QhYgnhwhtIhvgKQAohMBZhNQBghTBWgRQBQgPBEAZQA6AWAgArQBnhgB+AfQBiAYBUBCQBBA0BABRIhMAUQh+B8huAnQhKAbiYAFIgeABQh7AAhXgmg", new createjs.Rectangle(-54.5,-22.8,109,45.7)],
    magnet:[[1.2,1.2],[0,0],"AE2E9IprAAQhrAAgZhSIgBgFQh0gDAAh5IAAjKQAAh3BygGIAAgDIAAAAQAWhcBxAAIJrAAQBwAAAWBcIABADQByAGAAB3IAADKQAAB4hzAEIgCAFIAAABQgaBRhqAAIAAAAgAk1EfIJrAAQBPAAAXg4Is2AAQAWA4BPAAgAmejdIM8AAQgThBhVAAIprAAQhVAAgUBBg", new createjs.Rectangle(-56,-31.7,112,63.5)],
    stash:[[1.6,1.4],[-2,-3],"AlQkKIFPBBIEMhGIEnILIlZhaImOAAIl8Bug", new createjs.Rectangle(-56.2,-27.2,112.5,54.5)],
    bolt:[[1.5,1.5],[-10,-1],"ApCiYIFZiqIDQClICwiOIGsIlIAAABIl9iPIiwClIidhcIjhCOg", new createjs.Rectangle(-57.9,-32.3,115.9,64.7)],
    cloud:[[1.2,1.2],[0,2],"AjwEzQg7gdgXgkQgyAahBAAQhNAAg3glQg2gkAAg0QAAg0A2glQASgMAVgIQgPgiAAgmQAAhXBFg/QBDg9BggBQAuAAAoAPQAMgfAWgbQA1g+BJAAQBJAAAzA+QAUAYAMAbQAugmA+AAQBCAAAuAoQAuAoABA3QAqgZA1AAQBIAAAzAtQAzAugBBBQABA/gzAuQgRAPgTAJQADAOAAAOQAAA7g2AqQg2AqhNAAQgpAAgjgMQgUAQgcANQhiAxiJAAQiLAAhigxg", new createjs.Rectangle(-62.5,-35.6,125,71.3)],
    pow:[[1.2,1.2],[4,3],"AA4EOIjACuIh9i5IkZBAIB/j6Ikoi3IFygnIihj9IGWC8ICPjlICvELIFojnIhQFJIDSBgIjNB4IBBDpIkYhwIgoC5g", new createjs.Rectangle(-71.2,-44.4,142.5,88.9)],
    drip:[[1.3,1.3],[0,0],"AmhEFQhPgxgrg6Qg0hHAAhTQAAhSA0hGQArg6BPgxQCuhuDzABQD1gBCtBuQCuBsAACXQAACZiuBsQitBtj1gBQjzABiuhtgAl0joQibBhAACHQAACJCbBgQCcBhDYAAQDaAACchhQCbhgAAiJQAAiHibhhQichgjaAAQjYAAicBggAkqC7Qh7hNAAhuQAAhrB7hNQB8hOCuAAQCvAAB7BOQB9BNAABrQAABuh9BNQh7BNivAAQiuAAh8hNg", new createjs.Rectangle(-59.2,-37,118.4,74)],
    drop:[[1.5,1.5],[0,0],"AkdEeQh3h3AAinQAAimB3h2QB3h4CmAAQCnAAB3B4QB3B2AACmQAACnh3B3Qh3B3inAAQimAAh3h3gAj+j+QhqBrAACTQAACVBqBqQBrBrCTgBQCVABBqhrQBrhqgBiVQABiThrhrQhqhqiVAAQiTAAhrBqgAjMDMQhThUAAh4QAAh2BThUQBWhVB2AAQB3AABVBVQBVBUAAB2QAAB4hVBUQhVBVh3AAQh2AAhWhVg", new createjs.Rectangle(-40.5,-40.5,81,81)],
    circle:[[1.3,1.3],[0,0],"Aj3D2QhlhlgBiRQABiQBlhlQBnhoCQAAQCRAABlBoQBoBlAACQQAACRhoBlQhlBoiRAAQiQAAhnhog", new createjs.Rectangle(-35,-35,70,70)],
    folds:[[1,1.2],[-1,0],"AiiDuIj9BMIjshMIAApBIDyBNIEIhNIEoBnID0hnIEBBAIAAJAIklg/IjnBmg", new createjs.Rectangle(-65.2,-34,130.5,68.1)],
    oval:[[1.15,1.15],[0,0],"AmTDTQhBgigogoQg/g+AAhLQAAhLA/g+QAogoBBgjQCnhWDsAAQDsAACnBWQCpBZAAB7QAAB7ipBYQinBZjsgBQjsABinhZg", new createjs.Rectangle(-57.2,-30,114.5,60)],
    kidney:[[1.4,1.4],[-2,-1],"ADGDjQiRhfh+BaQiBBbiRhZQiQhYA0inQA0ipC6gzQC6gzCqBIQCrBJBUCJQBTCHhMBoQgnA2g6AAQg1AAhFgug", new createjs.Rectangle(-45.4,-27.3,90.8,54.7)],
    boom:[[1.5,1.5],[-3,7],"Ai1ETQhyg9hFhpQhFhqgfjOQgfjQD+CpQD8CpCzgKQCzgKBMAfQBMAfivCeQivCgh4AYQgiAHggAAQhVAAhRgrg", new createjs.Rectangle(-46.9,-31.9,93.8,63.8)],
    roadside:[[1.1,1.1],[1,-1],"AHCEuQlCgjoggDQhGgLgpgeQg8gsgJhaIgGhGIgMiYQADhOAzghQAcgTBAgJQBggOFAgKQFggLC3ANQCBgEADCAIgSCgIgXC0QgHBIggAhQgcAbgwAAIgJAAg",new createjs.Rectangle(-61.6,-30.3,123.2,60.6)]
  }

  pizzazz.makeShape = function(type, color, width, height) {
    if (zot(type)) type = "cloud";
    type = type.toLowerCase();
    if (zot(color)) color = "black";
    var data = pizzazz.shapes[type];
    if (zot(data)) data = pizzazz.shapes["cloud"];
    var sX = data[0][0]; // scale adjust
    var sY = data[0][1];
    var rX = data[1][0]; // registration point adjust
    var rY = data[1][1];
    var rect = data[3];
    var scaleX = 1;
    var scaleY = 1;
    if (zot(width) && zot(height)) {
      width = rect.width*sX;
      height = rect.height*sY;
    } else if (zot(width)) {
      width = height / rect.height * rect.width;
      // height is what is provided
    } else if (zot(height)) {
      height = width / rect.width * rect.height;
      // width is what is provided
    }
    scaleX = width / rect.width;
    scaleY = height / rect.height;

    var shape = new zim.Shape();
    shape.setBounds(rect.x, rect.y, rect.width, rect.height);
    shape.regX = rX;
    shape.regY = rY;
    shape.graphics.f(color).p(data[2]);
    shape.scaleX = scaleX;
    shape.scaleY = scaleY;
    shape.type = type;
    return shape;
  }

  pizzazz.listShapes = function() {
    for (var p in pizzazz.shapes) {
      zog(p);
    }
  }
  return pizzazz;
}(pizzazz || {});

// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! http://zimjs.com/donate

// ZIM PIZZAZZ 2 - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2016 (c) ZIM
// Pizzazz 2 is a helper module for ZIM that adds a little design love!
// SEE also Pizzazz for background shapes

// VERSION 2 - Icons for Labels, Buttons and Panes
// See the ZIM Bit on Pizzazz for an example: https://zimjs.com/bits/view/icons.html

// import this js file in the top of your code below where you import createjs
// you can get a custom zim.Container with icon and backing shape
// by using pizzazz.makeIcon(type, color, backingColor, backingShape, size)
// and then pass this into the backing parameter in zim.Label, zim.Button or zim.Pane
// and rollBacking parameter in zim.Button
// pizzazz.listIcons() will list your icon options in the console

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See PIZZAZZ MODULE at bottom


var pizzazz = function(pizzazz) {
    pizzazz.icons = {
        play:[[1,1],[-4,0],"AiJieIETCeIkTCfg", new createjs.Rectangle(-13.8,-16,27.7,32)],
        stop:[[1,1],[0,0],"AhuBvIAAjdIDdAAIAADdg", new createjs.Rectangle(-11.2,-11.2,22.4,22.4)],
        pause:[[1,1],[0,0],"AAhCLIAAkVIBXAAIAAEVgAh3CLIAAkVIBXAAIAAEVg", new createjs.Rectangle(-12,-13.9,24.1,27.9)],
        restart:[[1,1],[-1,0],"AiFCLIAAkVIBXAAIAAEVgAgiAAICoiHIAAEQg", new createjs.Rectangle(-13.4,-13.9,26.9,27.9)],
        rewind:[[1,1],[3,0],"AAGAAICqiIIAAERgAivAAICqiIIAAERg", new createjs.Rectangle(-17.6,-13.7,35.3,27.5)],
        fastforward:[[1,1],[-3,0],"AAGiIICqCIIiqCJgAiviIICqCIIiqCJg", new createjs.Rectangle(-17.6,-13.7,35.3,27.5)],
        sound:[[1,1],[1,0],"AgXBTIhnAAIAAijIBmAAICXhbIAAFXg", new createjs.Rectangle(-12.7,-17.3,25.5,34.6)],
        mute:[[1,1],[1,0],"AgXBTIhnAAIAAijIBmAAICXhbIAAFXgABXA+IAUgVIgtgqIAtgtIgUgVIgtAsIgrgsIgVAVIArAtIgsArIAWAUIArgtg", new createjs.Rectangle(-12.7,-17.3,25.5,34.6)],
        close:[[1,1],[0,0],"AAAA4Ih6B8Ig5g4IB8h8Ih7h6IA4g5IB6B8IB7h8IA5A5Ih8B6IB8B7Ig5A5g", new createjs.Rectangle(-18,-18,36.1,36)],
        settings:[[1,1],[0,0],"AgoDhIAAg2QgbgHgWgOIgnAmIg8g7IAngnQgOgXgGgZIg3AAIAAhSIA2AAQAGgaAPgXIgngnIA7g8IAnAnQAXgPAbgGIAAg2IBSAAIAAA2QAaAGAXAPIAmgnIA8A8IgmAnQAOAWAGAbIA2gBIAABTIg2AAQgHAagOAXIAmAmIg7A7IgmglQgXANgaAHIAAA2gAg8g7QgYAYAAAjQAAAjAYAZQAaAYAiAAQAiAAAZgYQAZgZAAgjQAAgjgZgYQgZgZgiAAQgiAAgaAZg", new createjs.Rectangle(-22.5,-22.5,45.2,45.1)],
        menu:[[1,1],[0,0],"AixClIAAhGIFjAAIAABGgAixAiIAAhEIFjAAIAABEgAixheIAAhGIFjAAIAABGg", new createjs.Rectangle(-17.8,-16.6,35.7,33.2)],
        maximize:[[1,1],[0,0],"AA3DGIAAgyIBeAAIAAhdIAyAAIAACPgAjGDGIAAiPIAyAAIAABdIBiAAIAAAygAhMBOIAAicICcAAIAACcgACVgyIAAhhIheAAIAAgyICQAAIAACTgAjGgyIAAiTICUAAIAAAyIhiAAIAABhg", new createjs.Rectangle(-19.9,-19.9,39.8,39.8)],
        arrow:[[1,1],[-3,0],"AhFBdIiWAAIAAi4ICWAAIAAh7IEhDWIkhDXg", new createjs.Rectangle(-22,-21.5,44.1,43)],
        arrowthin:[[1,1],[-1,0],"AgKAqIi9AAIAAhSIC9AAIAAh0IDSCcIjSCdg", new createjs.Rectangle(-20,-15.7,40.1,31.5)],
        arrowstick:[[1,1],[-1,0],"AhBCIIBZhbIjWAAIAAhVIDaAAIhdhfIA9g+IDDDFIAAAAIAAAAIjDDGg", new createjs.Rectangle(-19.2,-19.8,38.4,39.7)],
        arrowhollow:[[1,1],[-2,0],"Ag/BhIivAAIAAjBICvAAIAAiDIEuDjIkuDkgAjGA4ICvAAIAABdIDDiVIjDiTIAABcIivAAg", new createjs.Rectangle(-23.9,-22.9,47.9,45.8)],
        arrowline:[[1,1],[2,0],"AhQAqIiOAAIAAhSICOAAIAAh0IDSCcIjSCdgACICLIAAkVIBXAAIAAEVg",new createjs.Rectangle(-22.3,-15.7,44.8,31.5)],
        rotate:[[1,1],[0,2],"AhfC7Qg+gogRhJIAAAAQgQhJAog9QAkg3A9gSQAJgFAJgBQAMgDAMAAIACAjIAAhrICcB0IicB0IAAhaIgOACIAAAAIgIADQgmALgWAiQgYAkAJAtIAAgBQAKAtAnAZQAmAYAqgKIABAAQAsgJAYgnIABgBQAGgJAEgJIAAAAQAGgRABgRIBGADQgBAcgLAcQgGAQgKAPQgoBAhKAQQgUAEgSAAQgyAAgtgcg", new createjs.Rectangle(-18,-21.5,36.1,43.2)],
        heart:[[1,1],[0,-3],"AgCC2QgRgTgogmQgmgjgSgVQgcgfgPgZQgSgcgIglQgIgnALggQAJgdAagPQAfgVArAKQAmAIAhAdQAggdAmgJQAqgKAfAWQAhAXAJAhQAKAhgPAmQgNAigPAXQgPAZgZAcQgSAVgmAjQgpAlgPATIAAABIgBAAg", new createjs.Rectangle(-18.9,-18.3,37.8,36.7)],
        marker:[[1,1],[0,-1],"AAADtIAAAAIAAgBQhdiJgcgyQgthMAEhDQAEhDAxgnQAugkA/AAIAAAAQBAAAAuAkQAyAnADBDQAEBDgsBMQgdAyheCJIAAABIAAAAgAg6iUQgZAZAAAkQAAAkAZAZQAaAaAiAAQAkAAAYgaQAagZAAgkQAAgkgagZQgYgZgkAAQgiAAgaAZg", new createjs.Rectangle(-16.4,-23.7,32.8,47.6)],
        info:[[.7,.7],[0,1],"Ag/DRIAAjbIB/AAIAADbgAg0hQQgWgWABgfQgBgfAWgWQAXgWAdAAQAeAAAXAWQAWAWgBAfQABAfgWAWQgXAWgeAAQgdAAgXgWg", new createjs.Rectangle(-7.5,-20.9,15,42)],
        home:[[1,1],[0,1],"AAtDPIAAh4QgCgQgLgMQgNgNgTAAQgRAAgNANQgMAMgBAQIAAAAIAAB4Ih3AAIAAjPIg+AAIDgjOIDhDOIg/AAIAADPg", new createjs.Rectangle(-22.5,-20.7,45.2,41.6)],
        edit:[[1,1],[0,0],"AigA2IBqBqIiOAmgAiPAmICxiwIBoBoIiwCxgAAzibIApgqIBpBpIgqApg", new createjs.Rectangle(-19.7,-19.8,39.5,39.7)],
        magnify:[[1,1],[0,0],"AAnBcQgnAagxAAIgBAAQhDgBgvgwQgxgwgBhCIAAAAQAAhFAwgwQAxgwBEAAQBDgBAwAxQAwAwAABFQAAAtgVAiIB6B5Ig4A4gAh0hwQgcAbAAAoQAAAnAcAZIABAAQAcAcAmABIABAAQAnAAAZgcIABAAQAbgaAAgnQAAgogbgbIgBgBQgZgcgoABIAAAAQgoAAgbAcg", new createjs.Rectangle(-21.5,-21.1,43.1,42.3)],

    }

    pizzazz.makeIcon = function(type, color, scale, multi, multiAlpha, multiScale, multiX, multiY, skewX, skewY, backing) {
        var duo; if (duo = zob(pizzazz.makeIcon, arguments)) return duo;
        if (zot(type)) type = "play";
        type = type.toLowerCase();
        if (zot(color)) color = "black";
        if (zot(scale)) scale = 1;
        if (zot(multi)) multi = 1; // one icon
        if (zot(multiAlpha)) multiAlpha = .5; // for second icon
        if (zot(multiScale)) multiScale = .3; // for each subsequent icons
        if (zot(multiX)) multiX = 0; // for each subsequent icons
        if (zot(multiY)) multiY = 0; // for each subsequent icons
        if (zot(skewX)) skewX = 0;
        if (zot(skewY)) skewY = 0;
        var data = pizzazz.icons[type];
        if (zot(data)) data = pizzazz.icons["play"];
        var sX = data[0][0]; // scale adjust - not used for icons
        var sY = data[0][1];
        var rX = data[1][0]; // registration point adjust
        var rY = data[1][1];
        var rect = data[3];

        var shape = new zim.Shape();
        shape.setBounds(rect.x, rect.y, rect.width, rect.height);
        shape.regX = rX;
        shape.regY = rY;
        shape.skewX = skewX;
        shape.skewY = skewY;
        shape.graphics.f(color).p(data[2]);
        shape.scaleX = scale;
        shape.scaleY = scale;

        var container = new zim.Container();
        container.type = type;
        container.shape = shape; // original icon shape
        container.addChild(shape);
        if (multi > 1) {
            var copy;
            for (var i=1; i<multi; i++) {
                copy = shape.clone();
                copy.scaleX = copy.scaleY = scale*(1+i*multiScale);
                copy.alpha = multiAlpha / i;
                copy.x = multiX * i;
                copy.y = multiY * i;
                container.addChild(copy);
            }
        }
        if (!zot(backing)) {
            backing.centerReg();
            container.addChildAt(backing);
        }
        return container;
    }

    pizzazz.listIcons = function() {
        for (var i in pizzazz.icons) {
            zog(i);
        }
    }
    return pizzazz;
}(pizzazz || {});

/**
 * pizzazazz 3
 */
// ZIM - http://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! http://zimjs.com/donate

// ZIM PIZZAZZ 3 - see http://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2018 (c) Inventor Dan Zen http://danzen.com
// Pizzazz 3 is a helper module for ZIM that adds patterns!
// SEE also Pizzazz for background shapes and Pizzazz 2 for icons

// VERSION 3 - Patterns for ProgressBar, Buttons, Panes, etc.
// See the ZIM Explore on Pizzazz 3 for an example: http://zimjs.com/explore/patterns.html

// import this js file in the top of your code below where you import createjs and zim
// you can get a custom pattern with pizzazz.makePattern() - this returns a Container with type "Pattern"
// Use this on its own or pass it into the backing parameter in zim.ProgressBar, zim.Button, zim.Pane, etc.
// pizzazz.listPatterns() will list your pattern options in the console

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DOCS

/*--
pizzazz.makePattern = function(type, colors, size, cols, rows, spacingH, spacingV, interval, startPaused, backgroundColor, gradient, cache)

A function stored on pizzazz namespace
PIZZAZZ provides a quick way to get access to some common patterns
You can add your own here or make your own library in a similar way!
To see the patterns available use:
pizzazz.listPatterns();
// pixels, noise, dots, stripes, slants, hatch, plaid, bling

Note: cloning hatch and plaid currently does not seem to work properly

EXAMPLE
// 1. Simple pattern
var pixels = pizzazz.makePattern().center(); // adds a pixel pattern to the stage

// 2. Pattern for ProgressBar (use the backing parameter)
var pattern = pizzazz.makePattern({type:"slants", colors:makeSeries([frame.brown, frame.grey]), size:5, rows:20, cols:60, interval:500})
var bar = new ProgressBar({barType:"Rectangle", color:"#333", backing:pattern}).show();
bar.percent = 40; // or use with loadAssets() or Frame() progress parameter

// 3. Pattern for Button wait state (use the waitBacking parameter)
new Button({
    wait:"STOP!",
    waitTime:2000,
    waitBacking:pizzazz.makePattern({type:"stripes", backgroundColor:red, colors:black, size:30})
}).center();
END EXAMPLE

PARAMETERS supports DUO - parameters or single object with properties below
** some parameters below support ZIM VEE values that use zik() to pick a random option
The ZIM VEE value can be the following:
1. an Array of values to pick from randomly - eg. ["red", "green", "blue"]
2. a Function that returns a value - eg. function(){return Date.now();}
    see also the makeSeries() function which returns a function that will execute a series in order
    pass makeSeries(["red", "green", "blue"]) into a ZIM VEE parameter to select these in order then repeat, etc.
3. a ZIM RAND object literal for a range - eg. {min:10, max:20, integer:true, negative:true} max is required
4. any combination of the above - eg. ["red", function(){x>100?["green", "blue"]:"yellow"}] zik is recursive
5. a single value such as a Number, String, zim.Rectangle(), etc. this just passes through unchanged
6. an object literal with a property of noZik having a value such as an Array or Function that zik will not process

type (default "pixels") the pattern name - see list below:
    // pixels, noise, dots, stripes, slants, hatch, plaid, bling, check
colors - |ZIM VEE| (default "black") CSS colors for the pattern
    // this uses ZIM VEE to apply multiple, random, or a series of colors, etc.
size (default 10) the size of the shape used for the pattern
cols - (default 30) the columns to tile
rows - (default 10) the rows to tile
spacingH - (default 0) a spacing between columns
spacingV - (default 0) a spacing between rows
interval - (default 0) the time to animate in ms
    for pixels, noise, dots and bling this is the time between showing different patterns
    for stripes, slants, hatch, plaid this is the time to move the pattern to the right
    different patterns may seem to move at different speeds due to the pattern repeat distance
startPaused - (default false) set to true to start the interval for animation to paused
backgroundColor - (default 0) a CSS color for the background of the pattern
gradient - (default 0) 0-1 for how much gradient to show - try .2 for a decent looking gradient
cache - (default true except for dots) if the pattern is cached - dots look better not cached

METHODS
The pattern will receive:
pauseInterval(boolean default true) - true pauses and false unpauses the animation
clearInterval() - stops the animation permanently

PROPERTIES
The pattern will receive:
intervalPaused - boolean read-only as to whether the animation is paused or not
    this will be null if an interval has not been set or has been cleared

RETURNS:
a zim.Tile with a type of "Pattern"
*/

var pizzazz = function(pizzazz) {

    // pixels, noise, dots, stripes, slants, hatch, plaid, bling
    pizzazz.makePattern = function(type, colors, size, cols, rows, spacingH, spacingV, interval, startPaused, backgroundColor, gradient, cache) {
        var duo; if (duo = zob(pizzazz.makePattern, arguments)) return duo;
        if (zot(type)) type = "pixels";
        type = type.toLowerCase();
        if (zot(colors)) colors = "black";
        if (zot(size)) size = 10;
        if (zot(cols)) cols = 30;
        if (zot(rows)) rows = 10;
        if (zot(spacingH)) spacingH = 0;
        if (zot(spacingV)) spacingV = 0;
        if (zot(interval)) interval = 0;
        if (zot(startPaused)) startPaused = false;
        if (zot(cache)) cache = type=="dots"?false:true;
        if (zot(gradient)) gradient = 0;

        var stage = (typeof zimDefaultFrame != "undefined" && zimDefaultFrame)?zimDefaultFrame.stage:null;

        if (Array.isArray(colors)) {
           var patternLength = colors.length;
        } else if (colors.array) {
           var patternLength = colors.array.length;
        } else {
           var patternLength = 2;
        }

        // animations need extra tiling so keep the original bounds for masking
        var bounds = {x:0, y:0, width:size*cols, height:size*rows}

        obj = function() { // "pixels"
            return new zim.Rectangle({width:size,height:size,color:zik(colors),style:false}).alp(zim.rand());
        };
        if (type == "noise") {
            var obj = function() {
                return new zim.Rectangle({width:size,height:size,color:zik(colors),style:false});
            }
        } else if (type == "dots") {
            var obj = function() {
                return new Circle({radius:size,color:zik(colors),style:false});
            }
        } else if (type == "stripes") {
            obj = function() {
                var count = 0;
                return function() {

                    var s = zik(size);
                    if (typeof colors == "string") {
                        count++;
                        if (count%2==1) {
                            return new zim.Rectangle({width:s,height:s*rows,color:zik(colors),style:false});
                        } else {
                            return new zim.Rectangle({width:s,height:s*rows,color:"rgba(0,0,0,.01)",style:false});
                        }
                    } else {
                        return new zim.Rectangle({width:s,height:s*rows,color:zik(colors),style:false});
                    }

                }
            }();
        } else if (type == "slants") {
            var extraCols = Math.ceil(Math.sqrt(rows*rows+cols*cols)); // not quite but good enough
            obj = function() {
                var count = 0;
                return function() {
                    var s = zik(size);
                    if (typeof colors == "string") {
                        count++;
                        if (count%2==1) {
                            return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                        } else {
                            return new zim.Rectangle({width:s,height:s*extraCols,color:"rgba(0,0,0,.01)",style:false});
                        }
                    } else {
                        return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                    }

                }
            }();
        } else if (type == "hatch" || type == "plaid") {
            var extraCols = Math.ceil(Math.sqrt(rows*rows+cols*cols)); // not quite but good enough
            obj = function() {
                var count = 0;
                return function() {
                    var s = zik(size);
                    if (typeof colors == "string") {
                        count++;
                        if (count%2==1) {
                            return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                        } else {
                            return new zim.Rectangle({width:s,height:s*extraCols,color:"rgba(0,0,0,.01)",style:false});
                        }
                    } else {
                        return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                    }

                }
            }();
        } else if (type == "bling") {
            var obj = function() {
                var s = new zim.Shape(-size/2, -size/2, size, size, null, false);
                s.graphics.f(zik(colors)).dp(0,0,size/2,8,.5,360/8/2);
                return s;
            }
        }

        var special = (type=="stripes"||type=="slants"||type=="hatch"||type=="plaid");
        var colsStart = cols;
        if (type=="plaid") cols = Math.max(cols, rows);
        if (interval > 0 && special) {
            if (type=="slants"||type=="hatch") {
                extraCols += patternLength*2; // extra for animating
            } else {
                cols += patternLength; // extra for animating
            }
        }

        var container = new zim.Tile(obj, (type=="slants" || type=="hatch")?extraCols:cols, special?1:rows, spacingH, spacingV);
        if (!zot(backgroundColor)) var background = container.background = new Rectangle({width:container.width,height:container.height,color:backgroundColor,style:false}).center(container, 0);

        if (type == "slants" || type == "hatch" || type == "plaid") {
            var outer = new zim.Container(size*(interval>0&&extraCols?extraCols:cols), size*rows, null, null, false);
            var inner = new zim.Container(size*(interval>0&&extraCols?extraCols:cols), size*rows, null, null, false).centerReg(outer);
            var mask = new zim.Rectangle({width:size*(interval>0&&extraCols?extraCols:cols),height:size*rows,color:"rgba(0,0,0,0)",style:false}).addTo(outer);
            container.centerReg(inner);
            if (type == "plaid" || type == "hatch") {
                var copy = container.clone().centerReg(inner).rot(90);
                copy.blendMode = "overlay";
            }
            if (type != "plaid") inner.rotation = 45;
            inner.setMask(mask);
            container = outer;
            if (interval > 0 && (type=="slants" || type=="hatch")) {
                inner.x -= (container.width - bounds.width)/2;
            }
        }
        setGradient();
        if (cache || type=="hatch" || type=="plaid") container.cache();

        if (special && interval > 0) {
            var mask = new zim.Rectangle({width:bounds.width, height:bounds.height, color:"rgba(0,0,0,0)", style:false});
            container.addTo(mask);
            mask.pattern = container;
            container = mask;
            mask.pattern.setMask(mask.shape);
            var num = (type=="stripes" || type=="plaid")?size*patternLength:Math.ceil(size/5)*patternLength*7;
            container.added(function() {
                container.pattern.animate({
                    props:{x:"-"+String(num)},
                    time:interval,
                    loop:true,
                    ease:"linear"
                });
                if (startPaused) {
                    container.pattern.pauseAnimate();
                    container.intervalPaused = true;
                } else {
                    container.intervalPaused = false;
                }
            });
        } else if (interval > 0) {
            var outer = new zim.Container({style:false});
            container.addTo(outer);
            container = outer;
            container.zimInterval = zim.interval(interval, function() {
                container.removeAllChildren();
                var newTile = new zim.Tile(obj, (type=="slants" || type=="hatch")?extraCols:cols, special?1:rows, spacingH, spacingV).addTo(container);
                setGradient()
                if (!zot(backgroundColor)) var background = container.background = new Rectangle(container.width, container.height, backgroundColor).center(container, 0);
                if (cache) container.cache();
                if (container.stage) container.stage.update();
            });
            if (startPaused) {
                container.zimInterval.pause();
                container.intervalPaused = true;
            } else {
                container.intervalPaused = false;
            }
        }

        container.mouseChildren = false;
        container.type = "Pattern";
        container.patternType = type;
        container.patternInterval = interval;

        setGradient();
        if (gradient > 0 && container.cacheCanvas) container.updateCache();

        container.pauseInterval = function(type) {
            if (zot(type)) type = true;
            container.intervalPaused = type;
            if (container.patternInterval > 0) {
                if (container.zimInterval) {
                    container.zimInterval.pause(type);
                } else if (container.pattern && container.pattern.pauseAnimate) {
                    container.pattern.pauseAnimate(type);
                }
            }
        }
        container.clearInterval = function() {
            if (container.patternInterval > 0) {
                if (container.zimInterval) {
                    container.zimInterval.clear();
                } else if (container.pattern && container.pattern.pauseAnimate) {
                    container.pattern.stopAnimate();
                }
            }
            container.intervalPaused = null;
        }

        function setGradient() {
            if (gradient > 0) { // add an overlay
                var gr = new createjs.Shape();
                gr.graphics.lf(["rgba(255,255,255,"+gradient+")","rgba(0,0,0,"+gradient+")"], [0, 1], 0, 0, 0, container.height);
                gr.graphics.dr(0, 0, container.width, container.height);
                container.addChild(gr);
            }
        }
        container.centerReg(null,null,false);
        return container;
    }

    pizzazz.listPatterns = function() {
        zog("pixels", "noise", "dots", "stripes", "slants", "hatch", "plaid", "bling");
    }
    return pizzazz;
}(pizzazz || {});


/**
 * CAM
 */

// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! https://zimjs.com/donate

// ZIM CAM - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - Cam was coded in 2021 (c) ZIM
// Captures a video cam and tracks motion to create effects and a cursor.
// Can capture motion in different regions specified by a DisplayObect
// or the default is the whole stage. 

// The Cam Module has Cam(), CamMotion(), CamCursor(), CamAsk(), CamAlpha() and CamControls()

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See CAM MODULE at bottom
// ~~~~~~~~~~~~~~~~~~~~~~~~

var zim = function(zim) {

    zim.Cam = function(width, height, flip) {
        var duo; if (duo = zob(zim.Cam, arguments, null, this)) return duo;
        
        if (zot(width)) width = 640;
        if (zot(height)) height = 480;
        if (zot(flip)) flip = true;
                        
        this.zimContainer_constructor(width, height);
        this.type = "Cam";        
        var that = this;   
        that.noMouse();  
        this.ready = false;   
        
        var video = this.tag = document.createElement("video");
        video.setAttribute("autoplay", true);
                
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({video:true})
                .then(function (stream) {
                    video.srcObject = stream; 
                    var count = 0;
                    getVideo();
                    function getVideo() {
                        if (count++ > 5) {
                            that.dispatchEvent("error");
                            return;
                        }
                        video.addEventListener("stalled", getVideo);
                        video.addEventListener("error", getVideo);
                        video.addEventListener("canplay", init);
                    }               
                    function init() {
                        video.removeEventListener("stalled", getVideo);
                        video.removeEventListener("error", getVideo);
                        video.removeEventListener("canplay", init);
                        var w = video.videoWidth?video.videoWidth:width;
                        var h = video.videoHeight?video.videoHeight:height;
                        var display = that.display = new Container(w,h).scaleTo(that,100/that.scaleX,100/that.scaleY,FULL).addTo(that);
                        var cam = that.bitmap = new Bitmap(video, w, h).addTo(display); 
                        if (flip) {
                            cam.scaleX *= -1;  
                            cam.regX = -cam.width/(cam.scaleX?cam.scaleX:1);
                        }                                                 
                        that.resetSize = function() {
                            that.setBounds(0,0,w,h);
                            cam.sca(1,1);
                            return that;
                        } 
                        that.snapshot = function() {
                            return new Bitmap(that.display.clone());
                        }   
                        var _paused = false;
                        that.pause = function(state) {
                            if (zot(state)) state = true;
                            state = state?true:false;
                            if (state != _paused) {
                                var stream = video.srcObject;
                                var tracks = stream.getTracks();
                                if (state == true) that.pausePic = that.snapshot().scaleTo(that,100/that.scaleX,100/that.scaleY,FULL).addTo(that);
                                else if (that.pausePic) {
                                    that.pausePic.dispose();
                                    that.pausePic = null;
                                }
                                for (var i = 0; i < tracks.length; i++) {
                                    var track = tracks[i];
                                    track.enabled = !state;
                                }
                                _paused = state;
                            }      
                            return that;                      
                        }
                        that.toggle = function() {
                            that.pause(!_paused);
                            return that;
                        }
                        that.keyOut = function(color, tolerance, replacement) {
                            if (that.ticker) zim.Ticker.remove(that.ticker);
                            that.ticker = zim.Ticker.add(function () {
                                that.bitmap.keyOut(color, tolerance, replacement);
                            }); 
                            return that;
                        }
                        Object.defineProperty(that, 'paused', {
                            get: function() {
                                return _paused;
                            },
                            set: function(value) {
                                value = value?true:false;
                                if (value != _paused) that.pause(value);
                            }
                        });
                        var _flipped = flip?true:false;
                        that.flip = function(state) {
                            if (zot(state)) state == true; 
                            state = state?true:false;
                            if (_flipped != state) {
                                cam.scaleX *= -1;  
                                if (cam.regX==0) cam.regX = -cam.width/(cam.scaleX?cam.scaleX:1);
                                else cam.regX = 0;
                                _flipped = state;
                            }                            
                        }
                        Object.defineProperty(that, 'flipped', {
                            get: function() {
                                return _flipped;
                            },
                            set: function(value) {
                                value = value?true:false;
                                if (value != _flipped) that.flip(value);
                            }
                        });
                        that.dispose = function(a,b,disposing) {
                            var stream = video.srcObject;
                            var tracks = stream.getTracks();
                            for (var i = 0; i < tracks.length; i++) {
                                var track = tracks[i];
                                track.stop();
                            }
                            video.srcObject = null;
                            that.bitmap.dispose();
                            if (that.pausePic) {
                                that.pausePic.dispose();
                                that.pausePic = null;
                            }
                            Ticker.alwaysOff();
                            if (!disposing) that.zimContainer_dispose(true);
                            return true;
                        }                  
                        
                        that.ready = true;  
                        that.dispatchEvent("ready");                        
                        Ticker.always();                            
                    }                   
                })
                .catch(function (error) {
                    that.dispatchEvent("error");    
                });
        } else {
            zim.timeout(.05, function() {
                that.dispatchEvent("error");
            });
        } 
             
    }
    zim.extend(zim.Cam, zim.Container, ["clone", "dispose"], "zimContainer", false);
    
    zim.CamMotion = function(obj, preview, smooth, damp, sensitivity, precision, period, mode, visualizerObj, visualizerColor, visualizerBaseColor, visualizerScale, visualizerBaseScale, guideH, guideV, randomize, cam, frame) {
        var duo; if (duo = zob(zim.CamMotion, arguments, null, this)) return duo;
        if (zot(cam)) cam = new zim.Cam();
        if (zot(frame)) frame = zdf;
        var stage = frame.stage;
        var stageW = stage.width;
        var stageH = stage.height;
        this.zimContainer_constructor(stageW, stageH);
        this.type = "CamMotion";
        var that = this;    
        that.noMouse(); 
        that.cam = cam;  
        cam.on("error", function() {
            that.dispatchEvent("error"); 
        });        
        if (zot(preview)) preview = .1;
        if (isNaN(preview)) preview = 0;
        if (zot(smooth)) smooth = 1;
        if (zot(damp)) damp = .05;
        if (zot(sensitivity)) sensitivity = .5;
        if (zot(precision)) precision = .5;
        if (zot(period)) period = .05;
        sensitivity = zim.constrain(sensitivity, 0, 1); 
        precision = zim.constrain(precision, 0, 1); 
        if (zot(mode)) mode = 0; // 0 red, 1 green, 2 blue 
        if (mode != 0 && mode != 1 && mode != 2) mode = 0;
        if (!zot(visualizerObj) && !visualizerObj.type) visualizerObj = "circle";
        if (zot(visualizerColor)) visualizerColor = zim.red;  
        if (zot(visualizerBaseColor)) visualizerBaseColor = zim.dark; 
        if (zot(visualizerScale)) visualizerScale = 1;  
        if (zot(visualizerBaseScale)) visualizerBaseScale = 0;  
        if (zot(guideH)) guideH = "auto"; // LEFT, CENTER, RIGHT, AUTO, AVE
        if (zot(guideV)) guideV = "top"; // TOP, CENTER, BOTTOM, AUTO, AVE  
        if (zot(randomize)) randomize = true;  
                
        if (zot(obj)) obj = stage;  
        that.obj = obj;              
        if (!cam.parent) cam.scaleTo(this).addTo(this); // will be FILL   
        cam.alpha = preview; 
        
        that.rawX = that.motionX = stageW/2;
        that.rawY = that.motionY = stageH/2;   
        
        that.dampX = new zim.Damp(stageW/2, damp);     
        that.dampY = new zim.Damp(stageH/2, damp);        
                
        var numX, numY, startX, startY, spacing, last;
        var bounds = obj.getBounds();
        if (!bounds) {zogy("ZIM CamMotion - please provide obj with bounds set"); return;} 
        var tL = obj.localToGlobal(bounds.x,bounds.y);
        var bR = obj.localToGlobal(bounds.x+bounds.width,bounds.y+bounds.height);        
        function setup() {
            spacing = 10+(1-precision) * 90;
            numX = Math.floor(obj.width / spacing);
            numY = Math.floor(obj.height / spacing);
            startX = (obj.width-spacing*(numX-1))/2;
            startY = (obj.height-spacing*(numY-1))/2;
            if (spacing > obj.width) {startX = obj.width/2; numX = 1;}
            if (spacing > obj.height) {startY = obj.height/2; numY = 1;}
            if (cam.ready) init();
            else cam.on("ready", init, null, true);
        }      
        setup();
        
        function init() {  
            that.camPoints = [];  
            that.points = [];  
            that.data = [];
            zim.loop(numY, function(y) {
                zim.loop(numX, function(x) {
                    var rX = randomize?rand(-spacing/3,spacing/3):0;
                    var rY = randomize?rand(-spacing/3,spacing/3):0;
                    var camPoint = obj.localToLocal(startX+spacing*x+rX, startY+spacing*y+rY, cam.display); 
                    that.camPoints.push(camPoint);           
                    var point = obj.localToLocal(startX+spacing*x+rX, startY+spacing*y+rY, that); 
                    that.points.push(point);          
                    that.data.push(0);   
                });
            });       
            smooth = zim.constrain(smooth, 0, .999); 
            var buffer = Math.floor(1+smooth*10); 
            var bufferArrayX = [];
            var bufferArrayY = [];
            if (that.interval) that.interval.clear();         
            that.interval = zim.interval(period, function() { 
                cam.display.cache();
                var myContext = cam.display.cacheCanvas.getContext('2d');
                var temp = [];
                var countX = 0;
                var countY = 0;
                var totX = 0;
                var totY = 0;
                var minX = 10000;
                var minY = 10000;
                var maxX = 0;
                var maxY = 0;
                that.active = false;
                zim.loop(that.camPoints, function(camPoint, i) {
                    var d = myContext.getImageData(camPoint.x, camPoint.y, 1, 1).data; 
                    // color at mode (red/green/blue) within += sensitivity
                    if (last && (d[mode]>last[i]+10+90*(1-sensitivity) || d[mode]<last[i]-10-90*(1-sensitivity))) {
                        that.data[i] = 1;
                        totX += that.points[i].x;
                        totY += that.points[i].y;
                        countX++;
                        countY+=1;
                        maxX = Math.max(maxX, that.points[i].x);
                        maxY = Math.max(maxY, that.points[i].y);
                        minX = Math.min(minX, that.points[i].x);
                        minY = Math.min(minY, that.points[i].y);
                        that.active = true;
                    } else {
                        that.data[i] = 0;
                    }    
                    temp[i] = d[mode];
                }); 
                last = temp;                
                cam.display.uncache();
                if (totX > 0 && totY > 0) {
                    bufferArrayX.push((guideH=="left")?minX:(guideH=="right")?maxX:(guideH=="center")?minX+(maxX-minX)/2:(guideH=="auto")?minX+(maxX-minX)*((totX/countX)-tL.x)/(bR.x-tL.x):(totX/countX));                    
                    bufferArrayY.push((guideV=="top")?minY:(guideV=="bottom")?maxY:(guideV=="center")?minY+(maxY-minY)/2:(guideV=="auto")?minY+(maxY-minY)*((totY/countY)-tL.y)/(bR.y-tL.y):(totY/countY));                    
                } else {
                    bufferArrayX.shift(); // so buffer reduces to last motion position
                    bufferArrayY.shift();
                }
                var ll = bufferArrayX.length;
                if (ll > 0) {
                    if (ll>buffer) {
                        bufferArrayX.shift();
                        bufferArrayY.shift();
                        ll = bufferArrayX.length;
                    }
                    // if dynamically reduce smooth will need to move towards new smooth
                    if (ll>buffer) {
                        bufferArrayX.shift();
                        bufferArrayY.shift();
                        ll = bufferArrayX.length;
                    }
                    var tX = 0;
                    var tY = 0;
                    for (var i=0; i<bufferArrayX.length; i++) {
                        tX+=bufferArrayX[i];
                        tY+=bufferArrayY[i];
                    }
                    that.rawX = tX/bufferArrayX.length;
                    that.rawY = tY/bufferArrayY.length;
                }
                if (that.visualizer) {                                     
                    that.visualizer.loop(function(ob,i) {
                        ob.color = that.data[i]?ob.blush:ob.bass;
                        if (ob.oomp!=ob.orig) ob.animate({scale:that.data[i]?ob.oomp:ob.orig}, period*2);
                    });                     
                }      
                that.dispatchEvent("data");
                if (that.active) that.dispatchEvent("active");
                else that.dispatchEvent("inactive");
            });
            zim.timeout(.05, function() {                
                if (visualizerObj) {
                    that.visualizer = new zim.Container(stageW, stageH).addTo(that);
                    zim.loop(that.points, function(point) {
                        var si = zik(visualizerScale);
                        var siB = zik(visualizerBaseScale);
                        var co = zik(visualizerColor);
                        var coB = zik(visualizerBaseColor);
                        if (!zot(visualizerObj) && (visualizerObj=="circle" || !visualizerObj.clone)) {
                            var c = new zim.Circle(40,coB).sca(siB).loc(point,null,that.visualizer);                            
                        } else {
                            var c = visualizerObj.clone().centerReg({add:false}).loc(point,null,that.visualizer);
                            c.color = coB;
                        }
                        c.orig = siB;
                        c.oomp = si;
                        c.bass = coB;
                        c.blush = co;
                    });                   
                }
                if (!that.ready) that.dispatchEvent("ready");
                that.ready = true;
            });            
        }  
        
        that.ticker = zim.Ticker.add(function() {
            that.motionX = that.dampX.convert(that.rawX)
            that.motionY = that.dampY.convert(that.rawY)
            that.dispatchEvent("cursor");
        }, stage)
        
        Object.defineProperty(that, 'smooth', {
            get: function() {
                return smooth;
            },
            set: function(value) {
                smooth = zim.constrain(value, 0, .999); 
                buffer = Math.floor(1+smooth*10);
            }
        });
        
        Object.defineProperty(that, 'sensitivity', {
            get: function() {
                return sensitivity;
            },
            set: function(value) {
                sensitivity = zim.constrain(value, 0, 1); 
                setup();
            }
        });
        
        Object.defineProperty(that, 'precision', {
            get: function() {
                return precision;
            },
            set: function(value) {
                precision = zim.constrain(value, 0, 1); 
                setup();
            }
        });
        
        this.dispose = function(a,b,disposing) {
            that.cam.dispose();
            if (that.interval) that.interval.clear();
            if (that.visualizer) that.visualizer.dispose();
            if (!disposing) this.zimContainer_dispose(true);
            return true;
        }        
    };
    zim.extend(zim.CamMotion, zim.Container, ["clone", "dispose"], "zimContainer", false);
    
    zim.CamCursor = function(cursor, preview, camMotion, radius, color, borderColor, borderWidth, stillColor, stillBorderColor, stillTime, cam) {
        var duo; if (duo = zob(zim.CamCursor, arguments, null, this)) return duo;
        if (zot(preview)) preview = .1;
        if (zot(radius)) radius = 10;
        if (zot(color)) color = zim.blue;
        if (zot(borderColor)) borderColor = zim.purple;
        if (zot(stillColor)) stillColor = borderColor;
        if (zot(stillBorderColor)) stillBorderColor = color;
        if (zot(borderWidth)) borderWidth = 5;
        if (zot(cursor)) {
            cursor = new Circle(radius, color, borderColor, borderWidth);
        }   
        if (zot(camMotion)) camMotion = new zim.CamMotion({preview:preview, cam:cam}).addTo();    
        if (zot(stillTime)) stillTime = 1;
        
        this.zimContainer_constructor(cursor.width, cursor.height);
        this.type = "CamCursor"; 
        var that = this;               
        that.cursor = cursor.addTo(this);
        that.camMotion = camMotion;
        that.cam = camMotion.cam;
        that.noMouse();        
        
        var lastMoveTime = Date.now();
        that.motion = false;
        var lastX = 0;
        var lastY = 0;
        cursor.originalAlpha = cursor.alpha;
        cursor.alp(0);
        camMotion.on("cursor", function() {
            // use raw position not damped position
            if (Math.round(camMotion.rawX) != lastX || Math.round(camMotion.rawY) != lastY) {  
                if (!that.motion) {
                    that.dispatchEvent("motion");  
                    that.cursor.color = color;
                    that.cursor.borderColor = borderColor;
                }              
                that.motion = true;                
                lastMoveTime = Date.now();
                lastX = Math.round(camMotion.rawX);
                lastY = Math.round(camMotion.rawY);
            } else {
                if (that.motion && Date.now()-lastMoveTime>stillTime*1000) {
                    that.dispatchEvent("still");
                    that.motion = false;
                    that.cursor.color = stillColor;
                    that.cursor.borderColor = stillBorderColor;
                }                
            }
            // use damped position
            that.loc(camMotion.motionX, camMotion.motionY);              
            that.dispatchEvent("cursor");      
        });    
        
        camMotion.on("ready", function() {
            that.dispatchEvent("ready");
            that.cursor.animate({alpha:that.cursor.originalAlpha});
        });        
        camMotion.on("error", function() {
            that.dispatchEvent("error");
        });                
    }
        
    zim.extend(zim.CamCursor, zim.Container, "clone", "zimContainer", false);
    
    zim.CamAsk = function(color, backgroundColor) {
        
        if (zot(color)) color = zim.dark;
        if (zot(backgroundColor)) backgroundColor = zim.lighter;
        
        this.zimPane_constructor(200,200,"",backgroundColor,color,false,null,true,100,black.toAlpha(.3), null, null, null, false, false);
        this.type = "CamAsk";
        var that = this;
        
        Style.addGroup("camAsk", {            
            width:100,
            color:color,
            rollColor:backgroundColor,
            corner:10,
            backgroundColor:zim.faint,
            rollBackgroundColor:color,
            borderColor:color,
            borderWidth:2         
        });
        that.yes = new zim.Button({label:"YES", group:"camAsk"}).sca(.65).pos(0,30,CENTER,TOP,this).tap(function() {
            that.hide(true);
            that.dispatchEvent("yes");
        });
        that.label = new zim.Label("Use cam?", null, null, color, null, null, null, "center").sca(.9).centerReg(this);
        that.no = new zim.Button({label:"NO", group:"camAsk"}).sca(.65).pos(0,30,CENTER,BOTTOM,this).tap(function() {
            that.hide(false);
            that.dispatchEvent("no");
        });
        
        new zim.Circle(110, zim.clear, color, 1).center(this).alp(.8);
        new zim.Circle(120, zim.clear, color, 1).center(this).alp(.5);
        new zim.Circle(130, zim.clear, color, 1).center(this).alp(.2);        
    
    }
    zim.extend(zim.CamAsk, zim.Pane, null, "zimPane", false);
        
    zim.CamAlpha = function(cam, color) {
        if (zot(cam)) return;
        if (cam.cam) cam = cam.cam; // passing in a camMotion or camCursor rather than a cam
        if (zot(color)) color = "white";
        this.zimContainer_constructor(120,60);
        this.type = "CamAlpha";
        var that = this;
        this.cam = cam;
        var backing = this.backing = new Rectangle(120,60,zim.faint,color.toAlpha(.4),1,10).addTo(this);
        var title = this.title = new zim.Label("cam alpha",16,null,color.toAlpha(.8),null,null,null,null,null,null,true).pos(0,8,CENTER,TOP,this);       
        var slider = this.slider = new zim.Slider({
            button:new Button({width:30, height:30, corner:15, label:"", backgroundColor:color, rollBackgroundColor:color}),
            barColor:color, 
            barLength:110,
            min:0, max:1, 
            currentValue:cam.alpha
        })            
            .alp(.5)
            .siz(100)
            .pos(0,8,CENTER,BOTTOM,this)
            .change(function() {
                that.cam.alp(slider.currentValue);
            });
        this.alp(.8);    
    }
    zim.extend(zim.CamAlpha, zim.Container, null, "zimContainer", false);
    
    zim.CamControls = function(camMotion, close, collapse) {
        if (zot(camMotion)) return;
        if (zot(close)) close = false;
        if (zot(collapse)) collapse = true;
        
        var camCursor;            
        if (camMotion.type == "CamCursor") {
            camCursor = camMotion;
            camMotion = camCursor.camMotion;
        }
        var cam = camMotion.cam; 
                
        function smoothen(num) {
            camMotion.smooth = num/100;
        }
        function sense(num) {
            camMotion.sensitivity = num/100;
        }
        function precise(num) {
            camMotion.precision = num/100;
        }
        function damping(num) {
            camMotion.dampX.damp = num/1000;
            camMotion.dampY.damp = num/1000;
        }
        var smoothS = Math.round(camMotion.smooth*100);
        var sensitivityS = Math.round(camMotion.sensitivity*100);
        var precisionS = Math.round(camMotion.precision*100);
        var dampS = Math.round(camMotion.dampX.damp*1000);
        var flippedS = cam.flipped;
        
        var list = [
            List.slider("smooth", 0, 100, smoothS, smoothen),
            List.slider("sensitivity", 0, 100, sensitivityS, sense),
            List.slider("precision", 0, 100, precisionS, precise),
            List.slider("damp", 0, 100, dampS, damping),
            List.checkBox("flipped", flippedS, null, cam, "flipped"),
        ];        
        
        this.zimList_constructor(180, 200, list, null, null, false, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 10, false, false, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "cam", zim.lighter, null, null, true, null, null, close, zim.lighter, collapse, zim.lighter);
        this.type = "CamControls";
        var that = this;
        this.cam = cam;
        this.camMotion = camMotion;
        this.camCursor = camCursor;
        
        var reset = this.reset = new zim.Button({
            width:140,
            height:60,
            label:"RESET",
            corner:0,
            backgroundColor:zim.blue,
            rollBackgroundColor:zim.pink            
        }).sca(.3).pos(28,7,RIGHT,BOTTOM,this.content).tap(function () {
            that.items[0].slider.currentValue = smoothS;
            that.items[0].stepper.currentValue = smoothS;
            that.items[1].slider.currentValue = sensitivityS;
            that.items[1].stepper.currentValue = sensitivityS;
            that.items[2].slider.currentValue = precisionS;
            that.items[2].stepper.currentValue = precisionS;
            that.items[3].slider.currentValue = dampS;
            that.items[3].stepper.currentValue = dampS;
            that.items[4].checkBox.checked = flippedS;
            smoothen(smoothS);
            sense(sensitivityS);
            precise(precisionS);
            damping(dampS);
            cam.flipped = flippedS;
        });
                          
    }
    zim.extend(zim.CamControls, zim.List, null, "zimList", false);
        
    return zim;
}(zim || {});

var W = window||{};
if (!W.zns) {
    W.Cam = zim.Cam;
    W.CamMotion = zim.CamMotion;
    W.CamCursor = zim.CamCursor;
    W.CamAsk = zim.CamAsk;
    W.CamAlpha = zim.CamAlpha;
    W.CamControls = zim.CamControls;
}


/**
 * PHYSICS
 */

// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! https://zimjs.com/donate

// ZIM PHYSICS - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2016 (c) ZIM
// physics.js is an add-on ZIM module to help with Box2D
// (17K) currently only providing a non-minified file - minify to save 10K
// built for and requires Box2dWeb-2.1.a.3.min.js (220K)
// available here: https://zimjs.org/cdn/2.1.3/box2d.js

// physics.js abstracts the world creation
// makes border around the world
// makes rectangles, circles and triangles and adds x, y and rotation
// maps these to ZIM assets like shapes and bitmaps
// wraps mouse control code
// abstracts the debug mode
// abstracts the update function and provides Ticker access before and after stepping
// provides movement controls and world following

// the Physics Module has Physics(), addPhysics() and removePhysics()
// as well as lots of methods on Physics() and added to ZIM objects

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See PHYSICS MODULE at bottom
// ~~~~~~~~~~~~~~~~~~~~~~~~

var W = window||{};

var zim = function(zim) {
    
    W.b2Vec2 = Box2D.Common.Math.b2Vec2;
    W.b2BodyDef = Box2D.Dynamics.b2BodyDef;
    W.b2Body = Box2D.Dynamics.b2Body;
    W.b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    W.b2Fixture = Box2D.Dynamics.b2Fixture;
    W.b2World = Box2D.Dynamics.b2World;
    W.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    W.b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    W.b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
    W.b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
    W.b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
    W.b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef;
    W.b2AABB = Box2D.Collision.b2AABB;
    W.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
    W.b2BuoyancyController = Box2D.Dynamics.Controllers.b2BuoyancyController;
    W.b2ContactListener = Box2D.Dynamics.b2ContactListener;
    W.zimPhysics = true;

    zim.Physics = function(gravity, borders, scroll, frame) {       
        var sig = "gravity, borders, scroll, frame";
        var duo; if (duo = zob(zim.Physics, arguments, sig, this)) return duo;
    
        var that = this;
    
        if (zim.zon) zog("ZIM PHYSICS");
    
        if (zot(frame)) {
            if (W.zdf) frame = W.zdf;
            else if (W.zimDefaultFrame) frame = W.zimDefaultFrame;
            else {console.log("zim.Physics() - please provide a zim Frame object"); return;}
        }
        that.frame = frame;
        if (zot(borders)) borders = {x:0, y:0, width:that.frame.width, height:that.frame.height};
        borders = {x:borders.x, y:borders.y, width:borders.width, height:borders.height};
        if (zot(gravity)) gravity = 10;
        if (zot(scroll)) scroll = false;
        this.scroll = scroll;
    
        if (zot(W.zimDefaultPhysics)) W.zimDefaultPhysics = this;
        var stage = that.frame.stage;
    
        // adjust for ZIM 10.9.0 and CreateJS 1.3.0
        // also turned all stage.scaleX to zim.scaX, etc.
        if (zot(zim.scaX)) {
            createjs.stageTransformable = false;
            zim.scaX = stage.scaleX;
            zim.scaY = stage.scaleY;
        }
    
        var scale = this.scale = 30;
        var step = this.step = 20;
        this.timeStep = 1/step;
        var isMouseDown = false;
    
        var world = this.world = new b2World(new b2Vec2(0, gravity), true); // gravity, allow sleep
        // each of these return a b2Body with x, y, and rotation properties added
    
        this.makeRectangle = function(width, height, dynamic, friction, angular, density, restitution, maskBits, categoryBits, linear) {
            var duo; if (duo = zob(that.makeRectangle, arguments)) return duo;
            return makeShape(["rectangle", width, height], dynamic, friction, angular, density, restitution, maskBits, categoryBits, linear);
        }
        this.makeCircle = function(radius, dynamic, friction, angular, density, restitution, maskBits, categoryBits, linear) {
            var duo; if (duo = zob(that.makeCircle, arguments)) return duo;
            return makeShape(["circle", radius], dynamic, friction, angular, density, restitution, maskBits, categoryBits, linear);
        }
        this.makeTriangle = function(a, b, c, dynamic, friction, angular, density, restitution, maskBits, categoryBits, linear) {
            var duo; if (duo = zob(that.makeTriangle, arguments)) return duo;
            return makeShape(["triangle", a, b, c], dynamic, friction, angular, density, restitution, maskBits, categoryBits, linear);
        }
    
        function makeShape(shape, dynamic, friction, angular, density, restitution, maskBits, categoryBits, linear) {
            var type = shape[0];
            if (zot(dynamic)) dynamic = true;
            if (zot(friction)) friction = .8;
            if (zot(angular)) angular = .5; // rotational damping
            if (zot(linear)) linear = .5; // linear damping
            if (zot(density)) density = 1;
            if (zot(restitution)) restitution = 0;
    
            var definition = new b2BodyDef();
    
            if (dynamic == "kinematic") {
                definition.type = b2Body.b2_kinematicBody;
            } else if (dynamic) {
                definition.type = b2Body.b2_dynamicBody;
            } else {
                definition.type = b2Body.b2_staticBody;
            }
            definition.angularDamping = angular;
            definition.linearDamping = linear;
            var body = world.CreateBody(definition);
            var s;
            if (type=="rectangle") {
                s = new b2PolygonShape();
                if (zot(shape[1])) shape[1] = 100;
                if (zot(shape[2])) shape[2] = 100;
                s.width = shape[1];
                s.height = shape[2];
                s.SetAsBox(s.width/scale/2, s.height/scale/2);
    
            } else if (type=="triangle") {
                if (!zim) return;
                s = new b2PolygonShape();
                if (zot(shape[1])) shape[1] = 100;
                if (zot(shape[2])) shape[2] = 100;
                if (zot(shape[3])) shape[3] = 100;
                // uses zim Triangle to match Box2D shape
                var tri = new zim.Triangle(shape[1], shape[2], shape[3]);
                s.width = tri.width;
                s.height = tri.height;
                var points = [];
                // outside is right of line - so needed to reverse order
                points[2] = new b2Vec2((tri.one.x-tri.regX)/scale, (tri.one.y+tri.regY)/scale);
                points[1] = new b2Vec2((tri.two.x-tri.regX)/scale, (tri.two.y+tri.regY)/scale);
                points[0] = new b2Vec2((tri.three.x-tri.regX)/scale, (tri.three.y+tri.regY)/scale);
                s.SetAsArray(points, points.length);
            } else { // circle
                if (zot(shape[1])) shape[1] = 50;
                s = new b2CircleShape(shape[1]/scale);
                s.width = s.height = shape[1]*2;
            }
            var fixture = new b2FixtureDef();
            if (!zot(categoryBits)) fixture.filter.categoryBits = categoryBits;
            if (!zot(maskBits)) fixture.filter.maskBits = maskBits;
            fixture.shape = s;
            fixture.density = density;
            fixture.friction = friction;
            fixture.restitution = restitution;
            body.CreateFixture(fixture);
            body.width = s.width;
            body.height = s.height;
    
            // these hold x, y and rotation local values
            body.zimX = 0;
            body.zimY = 0;
            body.zimR = 0;
            setBasicProperties(body);
            return body;
        }
    
        function setBasicProperties(body) {
            Object.defineProperty(body, 'x', {
                get: function() {
                    return body.GetWorldCenter().x*that.scale;
                },
                set: function(x) {
                    body.zimX = x;
                    body.SetPosition(new b2Vec2(body.zimX/scale, body.zimY/scale));
                }
            });
            Object.defineProperty(body, 'y', {
                get: function() {
                    return body.GetWorldCenter().y*that.scale;
                },
                set: function(y) {
                    body.zimY = y;
                    body.SetPosition(new b2Vec2(body.zimX/scale, body.zimY/scale));
                }
            });
            Object.defineProperty(body, 'rotation', {
                get: function() {
                    return body.GetAngle()*180/Math.PI;
                },
                set: function(rotation) {
                    body.zimR = rotation;
                    body.SetAngle(rotation*Math.PI/180);
                }
            });
        }
    
        Object.defineProperty(this, 'gravity', {
            get: function() {
                return this.world.GetGravity();
            },
            set: function(val) {
                this.world.SetGravity(new b2Vec2(0, val));
            }
        });
    
        this.join = function(body1, body2, point1, point2, minAngle, maxAngle, type) {
            var duo; if (duo = zob(that.join, arguments)) return duo;
            if (zot(body1) || zot(body2)) return;
            if (body1.body) body1 = body1.body;
            if (body2.body) body2 = body2.body;
            if (zot(point1)) point1 = new zim.Point(body1.GetWorldCenter().x*that.scale, body1.GetWorldCenter().y*that.scale);
            if (zot(point2)) point2 = new zim.Point(body2.GetWorldCenter().x*that.scale, body2.GetWorldCenter().y*that.scale);
            if (zot(type)) type = "weld";
            var def;
            if (type=="distance") def = new b2DistanceJointDef();
            if (type=="revolute") def = new b2RevoluteJointDef();
            if (type=="weld") def = new b2WeldJointDef();
            def.Initialize(body1, body2, new b2Vec2(point1.x/that.scale, point1.y/that.scale), new b2Vec2(point2.x/that.scale, point2.y/that.scale));
            if (!zot(minAngle) || !zot(maxAngle)) {
                def.enableLimit = true;
                def.lowerAngle = minAngle*Math.PI/180;
                def.upperAngle = maxAngle*Math.PI/180;
            }
            return that.world.CreateJoint(def);
        }
        this.break = function(joint) {
            that.world.DestroyJoint(joint);
        }
    
        // for backwards compatibility - use join() now...
        this.makeJoint = function(body1, body2, pointX, pointY, minAngle, maxAngle, type) {
            var def = (!zot(type) && type=="distance") ? new b2DistanceJointDef() : new b2RevoluteJointDef();
            def.Initialize(body1, body2, body1.GetWorldPoint(new b2Vec2(pointX/that.scale, pointY/that.scale)));
            if (!zot(minAngle) || !zot(maxAngle)) {
                def.enableLimit = true;
                def.lowerAngle = minAngle*Math.PI/180;
                def.upperAngle = maxAngle*Math.PI/180;
            }
            return that.world.CreateJoint(def);
        }
    
        var debug;
        this.debug = function() {
            if (debug) {
                debug.debugCanvas.style.display = "block";
            } else {
                // make the Debug object with its canvas only once
                debug = new this.Debug();
            }
            debug.active = true;
            that.updateDebug();
            return that;
        }
        this.Debug = function() {
            var debugCanvas = this.debugCanvas = document.createElement("canvas");
            debugCanvas.setAttribute("id", "debugCanvas");
            if (that.frame.scale != 1) {
                debugCanvas.setAttribute("width", that.frame.width);
                debugCanvas.setAttribute("height", that.frame.height);
            } else {
                var largest = Math.max(W.innerWidth, screen.width, W.innerHeight, screen.height);
                debugCanvas.setAttribute("width", largest);
                debugCanvas.setAttribute("height", largest);
            }
            that.frame.canvas.parentElement.appendChild(debugCanvas);
            debugCanvas.style.pointerEvents = "none";
    
            var debugDraw = new b2DebugDraw();
            debugDraw.SetSprite(debugCanvas.getContext('2d'));
            debugDraw.SetDrawScale(scale);
            debugDraw.SetFillAlpha(0.7);
            debugDraw.SetLineThickness(1.0);
            debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
            world.SetDebugDraw(debugDraw);
            this.update = function() {
                world.m_debugDraw.m_sprite.graphics.clear();
                world.DrawDebugData();
            }
        }
        this.updateDebug = function() {
            if (zot(debug)) return;
            var canvasPosition = getElementPosition(that.frame.canvas);
            var c = debug.debugCanvas;
            c.style.position = "absolute";
            c.style.zIndex = 2;
            c.style.left = that.frame.canvas.style.left;
            c.style.top = that.frame.canvas.style.top;
            c.style.width = that.frame.canvas.style.width;
            c.style.height = that.frame.canvas.style.height;
            return this;
        }
        this.removeDebug = function() {
            if (!debug) return;
            debug.active = false;
            debug.debugCanvas.style.display = "none";
            return this;
        }
    
        // keep a remove list and remove in update function
        // at the correct time so world does not get confused
        var removeList = [];
        this.remove = function(body) {
            removeList.push(body);
        }
        function doRemove() {
            var len = removeList.length;
            if (len==0) return;
            var body;
            for (var i=len-1; i>=0; i--) {
                body = removeList[i];               
                mappings.remove(body);
                world.DestroyBody(body);
                body = null;
                removeList.pop();
            }
        }
    
        this.follow = function(obj, damp, dampY, leftOffset, rightOffset, upOffset, downOffset, offsetDamp, offsetDampY, horizontal, vertical, borderLock, borderOriginal) {
            var duo; if (duo = zob(that.follow, arguments)) return duo;
            that.followObj = null;
            if (zot(obj)) return;
            if (obj.zimObj) obj = obj.zimObj; // passed in a box2DBody instead
            // Ticker uses these if controls are used so just set them to 0 here
            obj.controlX = obj.controlDirX = obj.controlY = obj.controlDirY = 0;
            that.followObj = obj;
            obj.followDampX = null;
            obj.followDampY = null;
            if (zot(damp)) damp = .05;
            if (zot(dampY)) dampY = damp;
            if (zot(leftOffset)) leftOffset = 0;
            if (zot(rightOffset)) rightOffset = that.frame.stage.width;
            if (zot(upOffset)) upOffset = 0;
            if (zot(downOffset)) downOffset = that.frame.stage.height;
            if (zot(offsetDamp)) offsetDamp = .02;
            if (zot(offsetDampY)) offsetDampY = offsetDamp;
            if (zot(horizontal)) horizontal = true;
            if (zot(vertical)) vertical = true;
            if (zot(borderLock)) borderLock = borders.constructor === {}.constructor;
            if (zot(borderOriginal)) borderOriginal = false;
            obj.frameBorderLock = borderLock;
            obj.frameBorderOriginal = borderOriginal;
            if (horizontal) {               
                obj.followDampX = new Damp(0,damp);
                obj.offsetDampX = new Damp((leftOffset+rightOffset)/2,offsetDamp);
                obj.followOffsetX = [(leftOffset+rightOffset)/2, leftOffset, rightOffset];
            }
            if (vertical) {
                obj.followDampY = new Damp(0,dampY);
                obj.offsetDampY = new Damp((upOffset+downOffset)/2,offsetDampY);
                obj.followOffsetY = [(upOffset+downOffset)/2, upOffset, downOffset];
            }
            that.followSpeed = 0;
            var lastPos = stage.x;
            var lastTime = Date.now();
            obj.followTicker = that.Ticker.add(function() {
                var t = Date.now();
                var dT = t-lastTime;
                if (dT==0) return;
                var dP = lastPos-stage.x;
                that.followSpeed = dP/dT*1000;
                lastTime = t;
                lastPos = stage.x;
            });
        }
    
        this.control = function(obj, type, speed, speedY, horizontal, vertical) {
            obj.ground = true; // default assumes on ground
            var duo; if (duo = zob(that.control, arguments)) return duo;
            if (zot(obj)) return;
            if (obj.zimObj) zimObj = obj.zimObj; // passed in a box2DBody instead
            that.controlObj = obj;
            obj.controlX = 0;
            obj.controlY = 0;
            if (zot(type)) type = "both";
            if (zot(speed)) speed = 200;
            if (zot(speedY)) {
                speedLock = true;
                speedY = speed;
            }
            if (zot(horizontal)) horizontal = true;
            if (zot(vertical)) vertical = true;
                    
            Object.defineProperty(obj, 'speed', {
                get: function() {
                    return speed;
                },
                set: function(s) {
                    speed = s;
                    if (speedLock) speedY = s;
                }
            }); 
            Object.defineProperty(obj, 'speedY', {
                get: function() {
                    return speedY;
                },
                set: function(s) {
                    speedY = s;
                    speedLock = false;
                }
            });     
    
            var k = [0,0,0,0,0,0,0,0,0,0,0,0]; // keep track of wasd 87, 65, 83, 68 and arrows down and custom four directions
            obj.controlKeydown = that.frame.on("keydown", function(e) {
                if (!obj.ground) return;
                checkCodes(e.keyCode, speed, speedY);
            });
            obj.controlKeyup = that.frame.on("keyup", function(e) {checkCodes(e.keyCode, 0, 0);});
    
            that.customControl = function(code, desiredSpeed, desiredSpeedY) {
                checkCodes(code, !zot(desiredSpeed)?desiredSpeed:speed, !zot(desiredSpeedY)?desiredSpeedY:speedY);
            }
            function checkCodes(code, speed, speedY) {
                if (code == 37 && horizontal && (type == "both" || type == "arrows")) k[0] = -speed;
                if (code == 38 && vertical && (type == "both" || type == "arrows")) k[1] = -speedY;
                if (code == 39 && horizontal && (type == "both" || type == "arrows")) k[2] = speed;
                if (code == 40 && vertical && (type == "both" || type == "arrows")) k[3] = speedY;
                if (code == 65 && horizontal && (type == "both" || type == "wasd")) k[4] = -speed;
                if (code == 87 && vertical && (type == "both" || type == "wasd")) k[5] = -speedY;
                if (code == 68 && horizontal && (type == "both" || type == "wasd")) k[6] = speed;
                if (code == 83 && vertical && (type == "both" || type == "wasd")) k[7] = speedY;
    
                // custom
                if (code == "left" && horizontal) k[8] = -speed;
                if (code == "up" && vertical) k[9] = -speed;
                if (code == "right" && horizontal) k[10] = speed;
                if (code == "down" && vertical) k[11] = speed;
    
                obj.controlDirX = k[0]+k[2]+k[4]+k[6]+k[8]+k[10]==0?0:(k[0]+k[2]+k[4]+k[6]+k[8]+k[10]>0?1:-1); // 0,-1,1
                obj.controlDirY = k[1]+k[3]+k[5]+k[7]+k[9]+k[11]==0?0:(k[1]+k[3]+k[5]+k[7]+k[9]+k[11]>0?1:-1);
                obj.controlX = k[0]+k[2]+k[4]+k[6]+k[8]+k[10]==0?0:(k[0]+k[2]+k[4]+k[6]+k[8]+k[10]>0?1:2); // 0,1,2
                obj.controlY = k[1]+k[3]+k[5]+k[7]+k[9]+k[11]==0?0:(k[1]+k[3]+k[5]+k[7]+k[9]+k[11]>0?1:2);
            }
            var body = obj.body;
            obj.controlTicker = that.Ticker.add(function() {
                // k[0]+k[2] is the total x speed, for instance
                if (Math.abs(k[0]+k[2]+k[4]+k[6]+k[8]+k[10]) + Math.abs(k[1]+k[3]+k[5]+k[7]+k[9]+k[11]) == 0) return;
                body.ApplyForce(new b2Vec2(
                    k[0]+k[2]+k[4]+k[6]+k[8]+k[10]>0?speed:(k[0]+k[2]+k[4]+k[6]+k[8]+k[10]<0?-speed:0),
                    k[1]+k[3]+k[5]+k[7]+k[9]+k[11]>0?speedY:(k[1]+k[3]+k[5]+k[7]+k[9]+k[11]<0?-speedY:0)
                ), body.GetWorldCenter());
            });
        }
    
        this.noControl = function(obj) {
            if (!zot(obj) && obj.controlTicker) {
                that.controlObj = null;
                that.Ticker.remove(obj.controlTicker);
                that.frame.off("keydown", obj.controlKeydown);
                that.frame.off("keyup", obj.controlKeyup);
                obj.controlX = obj.controlDirX = obj.controlY = obj.controlDirY = 0;
            }
        }
    
        // Drag wraps the demo example mouse code
        var drag;
        this.dragList = [];
        this.noDragList = [];
        this.drag = function(list) {
            if (zot(list)) list = [];
            if (!Array.isArray(list)) list = [list];
            if (list.length==0) that.noDragList = []; // overwrite the no drags
            for (var i=0; i<list.length; i++) {
                if (list[i].body) list[i] = list[i].body;
                var index = this.noDragList.indexOf(list[i]);
                if (index>=0) this.noDragList.splice(index, 1); // overwrite a specific no drag
            }
            if (drag) this.dragList = this.dragList.concat(list);
            else drag = new that.Drag(list);
            return this;
        }
        this.noDrag = function(list) {
            if (!this.dragList) return this;
            if (!zot(list)) {
                if (!Array.isArray(list)) list = [list];
                var lastLength = that.dragList.length;
                for (var i=0; i<list.length; i++) {
                    if (list[i].body) list[i] = list[i].body;
                    var index = that.dragList.indexOf(list[i]);
                    if (index>=0) that.dragList.splice(index, 1);
                    else that.noDragList.push(list[i]);
                }
                if (that.dragList.length==0 && lastLength>0) {
                    drag.removeListeners();
                    drag = null;
                }
            } else {
                drag.removeListeners();
                drag = null;
            }
        }
        this.Drag = function(list) {
            if (zot(frame)) frame = {scale:1};
            if (typeof that == "undefined") { // not using ZIM 10 Physics
                for (var i=0; i<list.length; i++) {
                    if (list[i].body) list[i] = list[i].body;
                }
                that = this;
            }
            var that2 = this;
            this.removeListeners = function() {
                isMouseDown = false;
                if (that2.mousedownEvent) stage.off("stagemousedown", that2.mousedownEvent);
                if (that2.mousemoveEvent) stage.off("stagemousemove", that2.mousemoveEvent);
                if (that2.mouseupEvent) stage.off("stagemouseup", that2.mouseupEvent);
                if (mouseJoint) world.DestroyJoint(mouseJoint);
                mouseJoint = null;
                that.dragList = null;
            };
            this.removeListeners();
            that.dragList = list;
    
            var stage = that.frame.stage;
    
            // modified demo.html code at https://code.google.com/p/box2dweb/
            var canvasPosition, mouseX, mouseY, mousePVec, selectedBody, mouseJoint;
    
            // that2.mousedownEvent = stage.on("stagemousedown", function(e) {
            //  isMouseDown = true;
            //  mouseX = (e.stageX/zim.scaX-(that.scroll?stage.x:0))/scale;
            //  mouseY = (e.stageY/zim.scaY-(that.scroll?stage.y:0))/scale;
            //  that2.mousemoveEvent = stage.on("stagemousemove", function(e) {
            //      mouseX = (e.stageX/zim.scaX-(that.scroll?stage.x:0))/scale;
            //      mouseY = (e.stageY/zim.scaY-(that.scroll?stage.y:0))/scale;
            //      // zog(Math.round(e.stageY))
            //  });
            // });
    
            // that2.mouseupEvent = stage.on("stagemouseup", function(e) {
            //  isMouseDown = false;
            //  stage.off("stagemousemove", that2.mousemoveEvent);
            //  mouseX = (e.stageX/zim.scaX-(that.scroll?stage.x:0))/scale;
            //  mouseY = (e.stageY/zim.scaY-(that.scroll?stage.y:0))/scale;
            // });
    
            that2.mousedownEvent = stage.on("stagemousedown", function(e) {
                isMouseDown = true;
                mouseX = (e.stageX/zim.scaX)/scale;
                mouseY = (e.stageY/zim.scaY)/scale;
                that2.mousemoveEvent = stage.on("stagemousemove", function(e) {
                    mouseX = (e.stageX/zim.scaX)/scale;
                    mouseY = (e.stageY/zim.scaY)/scale;
                    // zog(Math.round(e.stageY))
                });
            });
    
            that2.mouseupEvent = stage.on("stagemouseup", function(e) {
                isMouseDown = false;
                stage.off("stagemousemove", that2.mousemoveEvent);
                mouseX = (e.stageX/zim.scaX)/scale;
                mouseY = (e.stageY/zim.scaY)/scale;
            });
    
            function getBodyAtMouse() {
                mousePVec = new b2Vec2(mouseX, mouseY);
                var aabb = new b2AABB();
                aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
                aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
    
                // Query the world for overlapping shapes.
                selectedBody = null;
                world.QueryAABB(getBodyCB, aabb);
                return selectedBody;
            }
    
            function getBodyCB(fixture) {
                if(fixture.GetBody().GetType() != b2Body.b2_staticBody) {
                    if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
                      selectedBody = fixture.GetBody();
                      return false;
                    }
                }
                return true;
            }
            this.update = function() {
    
                if(isMouseDown && (!mouseJoint)) {
                    var body = getBodyAtMouse();
                    if(body) {
                        if (that.noDragList.indexOf(body) >= 0 || (that.dragList.length > 0 && that.dragList.indexOf(body) < 0)) return;
                        var md = new b2MouseJointDef();
                        md.bodyA = world.GetGroundBody();
                        md.bodyB = body;
                        md.target.Set(mouseX, mouseY);
                        md.collideConnected = true;
                        md.maxForce = 300.0 * body.GetMass();
                        mouseJoint = world.CreateJoint(md);
                        body.SetAwake(true);
                    }
                }
    
                if (mouseJoint) {
                    if (isMouseDown) {
                        mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
                    } else {
                        world.DestroyJoint(mouseJoint);
                        mouseJoint = null;
                    }
                }
            }
        }
        //http://js-tut.aardon.de/js-tut/tutorial/position.html
        function getElementPosition(element) {
            var elem=element, tagname="", x=0, y=0;
            while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
                y += elem.offsetTop;
                x += elem.offsetLeft;
                tagname = elem.tagName.toUpperCase();
                if(tagname == "BODY") elem=0;
                if(typeof(elem) == "object") {
                    if(typeof(elem.offsetParent) == "object") elem = elem.offsetParent;
                }
            }
            return {x:x-zim.scrollX(), y:y-zim.scrollY()};
        }
    
        // mappings put zim assets to the x, y and rotation of Box2D bodies
        // a dictionary is used for easy adding and removing
    
        var mappings = new zim.Dictionary(true);
        function updateMap() {
            for (var i=0; i<mappings.length; i++) {
                var zimObj = mappings.values[i];
                var box2DBody = mappings.objects[i];
                var p = box2DBody.GetWorldPoint(new b2Vec2(0, 0));
                if (!that.scroll) {
                    var point = zimObj.parent.globalToLocal(p.x * scale, p.y * scale);
                    zimObj.x = point.x;
                    zimObj.y = point.y;
                } else {
                    zimObj.x = p.x * scale;
                    zimObj.y = p.y * scale;
                    //if (that.followObj && that.followObj==zimObj && zimObj.followDampX) that.frame.stage.x = zimObj.followDampX.convert(zimObj.offsetDampX.convert(zimObj.followOffsetX[zimObj.controlX])-zimObj.x);
                    //if (that.followObj && that.followObj==zimObj && zimObj.followDampY) that.frame.stage.y = zimObj.followDampY.convert(zimObj.offsetDampY.convert(zimObj.followOffsetY[zimObj.controlY])-zimObj.y);
    
                    var stage = that.frame.stage;
    
                    if (!isMouseDown) {
                        var sX = (frame.retina?frame.scale:1)*zim.scaX;
                        var sY = (frame.retina?frame.scale:1)*zim.scaY;
    
                        if (that.followObj && that.followObj==zimObj && zimObj.followDampX) {
                            stage.x = sX*zimObj.followDampX.convert(zimObj.offsetDampX.convert(zimObj.followOffsetX[zimObj.controlX])-zimObj.x);                            
                        }
                        if (that.followObj && that.followObj==zimObj && zimObj.followDampY) {
                            stage.y = sY*zimObj.followDampY.convert(zimObj.offsetDampY.convert(zimObj.followOffsetY[zimObj.controlY])-zimObj.y);
                        }
    
                        if (zimObj.frameBorderLock) {
                            if (stage.x < sX*(stage.width-that._borders.x-that._borders.width) && ((zimObj.frameBorderOriginal && that.borderRight.m_fixtureCount == 0) || that.borderRight.m_fixtureCount == 1)) stage.x = sX*(stage.width-that._borders.x-that._borders.width);
                            if (stage.y < sY*(stage.height-that._borders.y-that._borders.height) && ((zimObj.frameBorderOriginal && that.borderBottom.m_fixtureCount == 0) || that.borderBottom.m_fixtureCount == 1)) stage.y = sY*(stage.height-that._borders.y-that._borders.height);
                            if (stage.x > -sX*that._borders.x && ((zimObj.frameBorderOriginal && that.borderLeft.m_fixtureCount == 0) || that.borderLeft.m_fixtureCount == 1)) stage.x = -sX*that._borders.x;
                            if (stage.y > -sY*that._borders.y && ((zimObj.frameBorderOriginal && that.borderTop.m_fixtureCount == 0) || that.borderTop.m_fixtureCount == 1)) stage.y = -sY*that._borders.y;
    
                            // if (that.frame.stage.x < that.frame.zim.scaX*borders.x && ((zimObj.frameBorderOriginal && that.borderRight.m_fixtureCount == 0) || that.borderRight.m_fixtureCount == 1)) that.frame.stage.x = that.frame.zim.scaX*borders.x;
                            // if (that.frame.stage.y < that.frame.zim.scaY*borders.y && ((zimObj.frameBorderOriginal && that.borderBottom.m_fixtureCount == 0) || that.borderBottom.m_fixtureCount == 1)) that.frame.stage.y = that.frame.zim.scaY*borders.y;
                            // if (that.frame.stage.x > that.frame.zim.scaX*(borders.x + borders.width - that.frame.stage.width) && ((zimObj.frameBorderOriginal && that.borderLeft.m_fixtureCount == 0) || that.borderLeft.m_fixtureCount == 1)) that.frame.stage.x = that.frame.zim.scaX*(borders.x + borders.width - that.frame.stage.width);
                            // if (that.frame.stage.y > that.frame.zim.scaY*(borders.y + borders.height - that.frame.stage.height) && ((zimObj.frameBorderOriginal && that.borderTop.m_fixtureCount == 0) || that.borderTop.m_fixtureCount == 1)) that.frame.stage.y = that.frame.zim.scaY*(borders.y + borders.height - that.frame.stage.height);
                        }
                    }
                }
                zimObj.rotation = box2DBody.GetAngle() * (180 / Math.PI);
            }
            that.frame.stage.update();
        }
        this.addMap = function(box2DBody, zimObj) {
            if (zot(box2DBody) || zot(zimObj)) {
                console.log("physics.Map() - please provide a box2DBody and zimObj");
                return;
            }
            zimObj.body =  box2DBody;
            box2DBody.zimObj = zimObj;
            mappings.add(box2DBody, zimObj);
        }
        this.removeMap = function(box2DBody) {
            mappings.remove(box2DBody);
        }
    
    
        this.borders = function(rect) {
            if (zot(rect.x) || zot(rect.y) || zot(rect.width) || zot(rect.height)) return;
    
            if (that.borderTop) that.remove(that.borderTop);
            if (that.borderBottom) that.remove(that.borderBottom);
            if (that.borderLeft) that.remove(that.borderLeft);
            if (that.borderRight) that.remove(that.borderRight);
            
            var w = 2000;   // width of wall
            // Create border of boxes
            var wall = new b2PolygonShape();
            var wallBd = new b2BodyDef();
            var wallB;
            // Left
            // wallBd.position.Set((rect.x-w)/scale, (rect.y+rect.height/2)/scale);
            // wall.SetAsBox(w/scale, rect.height/2/scale);
            // wallB = that.borderLeft = world.CreateBody(wallBd);
            // wallB.CreateFixture2(wall);
            that.borderLeft = that.makeRectangle(w*2, rect.height, false);
            that.borderLeft.x = rect.x-w;
            that.borderLeft.y = rect.y+rect.height/2;
            that.borderLeft.zimObj = {type:"Border", side:"left"};
    
            // Right
            // wallBd.position.Set((rect.x+rect.width+w)/scale, (rect.y+rect.height/2)/scale);
            // wallB = that.borderRight = world.CreateBody(wallBd);
            // wallB.CreateFixture2(wall);
            that.borderRight = that.makeRectangle(w*2, rect.height, false);
            that.borderRight.x = rect.x+rect.width+w;
            that.borderRight.y = rect.y+rect.height/2;
            that.borderRight.zimObj = {type:"Border", side:"right"};
    
            // Top
            // wallBd.position.Set((rect.x + rect.width/2)/scale, (rect.y-w)/scale);
            // wall.SetAsBox(rect.width/2/scale, w/scale);
            // wallB = that.borderTop = world.CreateBody(wallBd);
            // wallB.CreateFixture2(wall);
            that.borderTop = that.makeRectangle(rect.width, w*2, false);
            that.borderTop.x = rect.x + rect.width/2;
            that.borderTop.y = rect.y-w;
            that.borderTop.zimObj = {type:"Border", side:"top"};
    
            // Bottom
            // wallBd.position.Set((rect.x + rect.width/2)/scale, (rect.y+rect.height+w)/scale);
            // wallB = that.borderBottom =  world.CreateBody(wallBd);
            // wallB.CreateFixture2(wall);
            that.borderBottom = that.makeRectangle(rect.width, w*2, false);
            that.borderBottom.x = rect.x + rect.width/2;
            that.borderBottom.y = rect.y+rect.height+w;
            that.borderBottom.zimObj = {type:"Border", side:"bottom"};
    
            that._borders = rect;
        }
        this.borders(borders);
    
        this.paused = false;
        this.pause = function(type) {
            if (zot(type)) type = true;
            if (type) {
                this.timeStep = 0;
            } else {
                this.timeStep = 1/this.step;
            }
            this.paused = type;
        }
    
        // the Ticker keeps add and remove methods
        // to add and remove functions to the update function
        // either before the world step or after the word step
        // these can be used for adding forces
        var beforeList = new zim.Dictionary();
        var afterList = new zim.Dictionary();
        this.Ticker = {
            add:function(f, after) {
                if (zot(after)) after = true;
                if (after) afterList.add(f, 1);
                else beforeList.add(f, 1);
                return f;
            },
            remove:function(f) {
                afterList.remove(f);
                beforeList.remove(f);
            }
        };
    
        // update world
        var request;
        function update() {
            request = requestAnimationFrame(update);
            if (drag) drag.update();
            for (var i=0; i<beforeList.objects.length; i++) beforeList.objects[i]();
            world.Step(that.timeStep, 10, 10); // last two are velocity iterations, position iterations
            doRemove();
            world.ClearForces();
            for (i=0; i<afterList.objects.length; i++) afterList.objects[i]();
            if (debug && debug.active) debug.update();
            updateMap();
        }
        update();
    
        this.dispose = function() {
            // this does not seem to let us make a world again properly?
            if (drag) drag.removeListeners();
            if (this == W.zimDefaultPhysics) W.zimDefaultPhysics = null;
            W.zimContactListener = null;        
            for (var i=0; i<mappings.length; i++) {
                var zimObj = mappings.values[i];
                zimObj.removePhysics();             
            }
            doRemove();         
            var node = that.world.GetBodyList();
            while(node) {
                var b = node;
                node = node.GetNext();
                that.world.DestroyBody(b);
                b = null;
            }
            that.removeDebug();
            cancelAnimationFrame(request);
            that.world = null;
        }
    
    };
    return zim;
}(zim || {});

if (!W.zns) W.Physics = zim.Physics;



/**
 * GAME
 */
// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! https://zimjs.com/donate

// ZIM GAME - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - LeaderBoard coded in 2017, Board in 2019 (c) ZIM
// Helper code for making games on the HTML Canvas with JavaScript
// ZIM already has a number of functions and classes that can help with games for example:
// well... just about everthing in ZIM ;-)  Okay, here are a list of common ones:
// hitTestPoint, hitTestReg, hitTestRect, hitTestCircle, hitTestGrid
// Sprite, Dynamo, Scroller, Accelerator, loadAssets and asset
// animate, move, Ticker, GamePad, MotionController
// Label, Button, Slider, Dial, Tabs, Pane, ColorPicker, Swipe, Swiper, Indicator
// scale, scaleTo, center, centerReg, addTo, removeFrom
// Circle, Rectangle, Triangle
// constrain, Damp, ProportionDamp

// The Game Module has LeaderBoard(), Meter(), Board(), Person(), Orb(), Tree(), Timer(), Scorer(), and Dialog()

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See GAME MODULE at bottom
// ~~~~~~~~~~~~~~~~~~~~~~~~

var zim = function(zim) {

    zim.LeaderBoard = function(data, title, width, height, corner, backgroundColor, titleColor, colors, total, scoreWidth, scorePlaces, scoreZeros, spacing, arrows, borderColor, borderWidth, shadowColor, shadowBlur, reverse, allowZero, font, fontSize, nameShift, scoreShift, rankShift) {
        var duo; if (duo = zob(zim.LeaderBoard, arguments, null, this)) return duo;
        this.arguments = arguments;

        if (zot(data)) data = "localStorage";
        if (zot(width)) width = 400;
        if (zot(height)) height = 600;
        this.super_constructor(width, height);
        if (zot(corner)) corner = 20;
        if (zot(backgroundColor)) backgroundColor = "white";
        if (zot(titleColor)) titleColor = "#222";
        if (zot(total)) total = 10;
        if (zot(scoreWidth)) scoreWidth = 300;
        if (zot(scorePlaces)) scorePlaces = 6;
        if (zot(scoreZeros)) scoreZeros = false;
        if (zot(spacing)) spacing = 10;
        if (zot(arrows)) arrows = false;
        if (!zot(borderColor) && zot(borderWidth)) borderWidth = 2;
        if (zot(shadowColor)) shadowColor="rgba(0,0,0,.3)";
        if (zot(shadowBlur)) shadowBlur=14;
        if (zot(reverse)) reverse=false;
        if (zot(allowZero)) allowZero=false;
        if (zot(font)) font = "courier";
        if (zot(fontSize)) fontSize = 60;
        if (zot(nameShift)) nameShift = 0;
        if (zot(scoreShift)) scoreShift = 0;
        if (zot(rankShift)) rankShift = 0;

        if (typeof frame == "undefined" || zot(frame)) var frame = zimDefaultFrame;

        var backing = this.backing = new zim.Rectangle(width, height, backgroundColor, borderColor, borderWidth, corner);
        backing.mouseEnabled = false;
        var backingEvent = backing.on("click", function(){});
        backing.off("click", backingEvent);
        backing.off("click", backingEvent);
        this.addChild(backing);
        this.setBounds(0,0,width,height);
        this.backdrop = new Rectangle(2000, 1000, "rgba(0,0,0,.01)").center(this, 0);
        if (typeof frame == "undefined" && typeof zimDefaultFrame != "undefined") {var frame = zimDefaultFrame;}
        var stage = frame.stage;
        this.backdrop.on("mousedown", function() {
            stage = that.stage;
            that.removeFrom();
            that.dispatchEvent("close");
            if (stage) stage.update();
        });
        this.filled = false;
        this.info = {reverse:reverse, total:total, allowZero:allowZero, type:gameSaved}; // ES6 to fix
        if (shadowColor != -1 && shadowBlur > 0) backing.shadow = new createjs.Shadow(shadowColor, 3, 3, shadowBlur);

        var grid = this.grid = new zim.Container();
        var row;
        var stepper;
        var rank;
        var score;
        var that = this;

        var c = {
            rankBackgroundColor: zim.darker,
            rankColor: zim.light,
            currentRankBackgroundColor: zim.pink,
            currentRankColor: "white",

            nameBackgroundColor: zim.lighter,
            nameColor: zim.darker,
            currentNameBackgroundColor: "#f0d2e8",
            currentNameColor: zim.darker,

            scoreBackgroundColor: zim.light,
            scoreColor: zim.darker,
            currentScoreBackgroundColor: "#f0d2e8",
            currentScoreColor: zim.darker
        }
        var c = zim.merge(c, colors);

        var fakeText = zim.decimals(8,-scorePlaces,true); // force text to 000008 to start
        var winSteppers;
        var gameSaved;
        var button;
        var winRow;

        if (data == "localStorage") {
            initLocalStorage();
        } else if (!Array.isArray(data)) { // data is a key to get the data from the ZIM Game Database
            that.dataSource = "database";
            that.key = data;
            zim.async("https://zimjs.com/gamedata.php?id="+data, gameData);
            function gameData(d){
                if (d == "error") {
                    var e = new createjs.Event("error");
                    e.type = "data";
                    that.dispatchEvent(e);
                    initLocalStorage(); // drop to localStorage
                    return;
                }
                if (d == "noscores") {
                    d = [];
                }
                data=d;
                makeGrid();
            }

        } else {
            that.dataSource = "custom";
            makeGrid();
        }

        function initLocalStorage() {
            // localStorage.clear();
            that.dataSource = "localStorage";
            if (localStorage && localStorage.gameData) {
                data = JSON.parse(localStorage.gameData);
            } else {
                data = [];
            }
            makeGrid();
        }

        var keydownEvent;

        function makeGrid() {
            scaleStart = that.scaleX;
            that.sca(1);
            that.filled = false;
            frame.off("keydown", keydownEvent);
            if (!zot(title)) {
                var titleText = that.titleText = new zim.Label({
                    text:title,
                    size:fontSize,
                    color:titleColor,
                    align:"center",
                    font:font
                }).addTo(grid);
                titleText.x = titleText.width/2;
                titleText.mouseEnabled = false;
            }

            var winCheck;
            if (!zot(that.winner)) winSteppers = [];
            backing.mouseEnabled = false;
            backing.off("click", backingEvent);
            for (var j=0; j<total; j++) {
                winCheck = j==that.winner;
                if (data[j]) {
                    p = data[j].player;
                    s = data[j].score;
                } else {
                    p = s = "   ";
                }
                row = new zim.Container();
                rank = new zim.Label({
                    text:(j+1),
                    size:50,
                    color:j==that.winner?c.currentRankColor:c.rankColor,
                    align:"center",
                    valign:"center",
                    backing:new zim.Rectangle(100,100,winCheck?c.currentRankBackgroundColor:c.rankBackgroundColor),
                });
                rank.reg(-rank.width/2,-rank.height/2);
                rank.label.regY = -rankShift;
                rank.addTo(row);
                if (arrows && !zot(that.winner)) {
                    rank.mov(0,j>=that.winner?50:0)
                        .mov(0,j>that.winner?50:0)
                }
                for (var i=0; i<3; i++) {
                    stepper = new zim.Stepper({
                        list:winCheck?"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-*_".split(""):p[i],
                        width:100,
                        continuous:true,
                        label:new zim.Label({text:"", font:font, color:j==that.winner?c.currentNameColor:c.nameColor, size:fontSize+4, align:"center", shiftVertical:-6+nameShift}),
                        backgroundColor:winCheck?c.currentNameBackgroundColor:c.nameBackgroundColor,
                        vertical:false,
                        arrows:false,
                        arrows2:(winCheck&&arrows),
                        corner:0,
                        shadowBlur:0
                    });
                    if (winCheck) {
                        backing.mouseEnabled = true;
                        backing.on("click", backingEvent);
                        if (frame.tabOrder) frame.tabOrder.push(stepper);
                        winSteppers.push(stepper);
                        stepper.currentValue = "_";
                        stepper.on("change", function() {
                            var waitCheck = zim.loop(winSteppers, function(s) {
                                if (s.currentValue == "_") return true;
                            });
                            if (!waitCheck) {
                                that.filled = true;
                                winScore.text = "";
                                button.addTo(winRow);
                                if (that.stage) that.stage.update();
                            }
                            that.dispatchEvent("change");
                        });
                        if (i==0) stepper.keyFocus = true;
                    }
                    // stepper.label.reg(0,-2-nameShift)
                    // stepper.label.mov(0,2+nameShift)
                    stepper.x = rank.width + spacing + i*(stepper.width+spacing);
                    if (arrows && !zot(that.winner)) {
                        stepper.mov(0,j>=that.winner?50:0).mov(0,j>that.winner?50:0);
                    }
                    // stepper.enabled = winCheck;
                    row.addChild(stepper);

                    var scoreText = new zim.Label({
                        text:fakeText,
                        color:winCheck?c.currentScoreColor:c.scoreColor,
                        font:font,
                        size:fontSize+4,
                        align:"right",
                        valign:"center",
                        backing:new zim.Rectangle(scoreWidth,100,winCheck?c.currentScoreBackgroundColor:c.scoreBackgroundColor)
                    });
                    scoreText.text = scoreZeros?zim.decimals(s, -scorePlaces, true):s;
                    scoreText.reg(-scoreText.width/2,-scoreText.height/2)
                    scoreText.label.regY = -4 - scoreShift;
                    scoreText.label.skewX = 10;
                    row.addChild(scoreText);
                    scoreText.x = rank.width + spacing + 3*(stepper.width+spacing)+60;
                    // scoreText.outline()
                    if (arrows && !zot(that.winner)) {
                        scoreText.mov(0,j>=that.winner?50:0)
                            .mov(0,j>that.winner?50:0);
                    }
                }
                if (winCheck) {
                    winRow = row;
                    var winScore = scoreText;
                    button = that.button = new zim.Button({
                        label:new zim.Label({text:"SAVE", size:50, align:"center", color:c.currentRankColor, rollColor:c.currentRankBackgroundColor}),
                        width:scoreText.width,
                        backgroundColor:c.currentRankBackgroundColor,
                        rollBackgroundColor:c.currentRankColor,
                        height:100,
                        corner:0,
                        shadowBlur:0
                    });
                    button.x = scoreText.x-60;
                    button.y = scoreText.y;
                    if (frame.tabOrder) frame.tabOrder.push(button);
                    button.on("mousedown", that.submitScore);

                    keydownEvent = frame.on("keydown", function(e) {
                        if (!that.stage) return;
                        if (button.focus && e.keyCode == 13) { // enter key
                            submitScore();
                            e.preventDefault();
                        }
                    });
                }
                row.addTo(grid)
                row.x = 0;
                row.y = (zot(title)?0:(titleText.height + spacing*2)) + j*(100 + spacing);
                row.mouseChildren = winCheck;
                row.mouseEnabled = winCheck;

            }
            if (!zot(title)) {titleText.center(grid); titleText.y=0;}
            grid.scaleTo(that, 95, 95)
                .center(that);
            that.sca(scaleStart);
            if (stage) stage.update();
        }

        this.submitScore = function() {
            button.text = that.dataSource=="localStorage"?"LOCAL":"SENT";
            winRow.mouseChildren = false;
            winRow.mouseEnbabled = false;
            that.stage.update();
            if (zot(data[that.winner])) data[that.winner] = {};
            data[that.winner].player = winSteppers[0].currentValue + winSteppers[1].currentValue + winSteppers[2].currentValue;
            var e = new createjs.Event("press");
            var player = e.player = data[that.winner].player;
            var score = e.score = data[that.winner].score;
            e.key = that.key;
            e.info = that.info;
            that.dispatchEvent(e);

            if (that.dataSource == "custom") return;
            if (zim.decimals(score, null, null, null, null, null, e)) that.save();
        }

        this.score = function(score) {
            zog("yasdf")
            if (!zot(that.pendingIndex)) that.cancel();
            var position = zim.loop(data, function(s, i) {
                if ((!reverse && s.score <= score) || (reverse && s.score >= score)) {
                    data.splice(i, 0, {player:"", score:score});
                    return i;
                }
            });
            if (zot(position) && (allowZero || score > 0) && (data.length == 0 || data.length < total)) {
                 data.push({player:"", score:score});
                 position = data.length-1;
            }
            if (!zot(position)) {
                that.pendingIndex = position;
                that.redraw(null, position);
            }
            return position;
        }

        this.save = function() {
            if (zot(that.pendingIndex))  return that;
            if (that.dataSource == "database") {
                var player = data[that.pendingIndex].player;
                var score = data[that.pendingIndex].score;
                zim.async("https://zimjs.com/gamedata.php?id="+that.key+"&player="+player+"&score="+score+"&reverse="+reverse+"&total="+total+"&allowZero="+allowZero, gameSaved);
            }
            if (that.dataSource == "localStorage") {
                that.pendingIndex = null;
                if (localStorage) localStorage.gameData = JSON.stringify(data);
                setTimeout(function() {
                    button.text = "DONE";
                    if (that.stage) that.stage.update();
                }, 500);
                setTimeout(function() {that.redraw();}, 1500);
            }
            return that;
        }

        function gameSaved(d){
            if (d == "error") {
                var e = new createjs.Event("error");
                e.type = "save";
                that.dispatchEvent(e);
                button.text = "ERROR";
                data.splice(that.pendingIndex, 1);
            } else {
                var e = new createjs.Event("save");
                e.data = data = d;
                that.dispatchEvent(e);
                button.text = "DONE";
            }
            that.pendingIndex = null;
            if (that.stage) that.stage.update();
            setTimeout(function() {that.redraw();}, 1000);
        }

        this.startTime = function() {
            zim.async("https://zimjs.com/gamedata.php?id="+that.key+"&command=start", timeReply);
        }
        this.stopTime = function() {
            zim.async("https://zimjs.com/gamedata.php?id="+that.key+"&command=stop", timeReply);
        }
        function timeReply(data){};

        this.cancel = function() {
            if (zot(that.pendingIndex)) return that;
            data.splice(that.pendingIndex, 1);
            that.pendingIndex = null;
            that.redraw();
            var e = new createjs.Event("cancel");
            e.data = data;
            that.dispatchEvent(e);
            return that;
        }
        var scaleStart = that.scaleX;
        this.redraw = function(newData, newWinner) {
            if (newData) data = newData;
            scaleStart = that.scaleX;
            that.dispose();
            if (zot(newWinner)) {that.winner = null} else {that.winner = newWinner;}
            grid.removeAllChildren();
            makeGrid();
            if (that.stage) that.stage.update();
            return that;
        }

        this.dispose = function() {
            if (winSteppers) {
                var ind;
                zim.loop(winSteppers, function(s) {
                    if (frame.tabOrder) {
                        var ind = frame.tabOrder.indexOf(s);
                        if (ind > -1) frame.tabOrder.splice(ind, 1);
                    }
                    s.dispose();
                });
                if (frame.tabOrder) {
                    ind = frame.tabOrder.indexOf(button);
                    if (ind > -1) frame.tabOrder.splice(ind, 1);
                }
                if (button) button.dispose();
            }
        }
    }
    zim.extend(zim.LeaderBoard, zim.Container);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    zim.Meter = function(stage, vertical, horizontal, color, textColor, padding, decimals, alpha, skew) {
        var duo; if (duo = zob(zim.Meter, arguments, null, this)) return duo;
        this.arguments = arguments;

        if (zot(vertical)) vertical = "bottom";
        if (zot(horizontal)) horizontal = "left";
        if (zot(padding)) padding = 20;
        if (zot(decimals)) decimals = 0;
        if (zot(color)) color = "#acd241"; // frame.green
        if (zot(textColor)) textColor = "black"; // frame.green
        if (zot(alpha)) alpha = .6;
        if (zot(skew)) skew = 10;

        this.super_constructor(null, 30, null, textColor, null, null, null, "center", "center", null, null, null, null, null, new zim.Rectangle(100,40,color));
        var that = this;
        var meterFunction;
        var initFunction;
        if (zot(stage)) {initFunction = that.on("added", init);} else {init();}
        var fps = new zim.Label({text:"FPS", size:18, color:textColor}).rot(-90).addTo(that).alp(.5)
        fps.x = 59;
        fps.y = 17;
        function init() {
            if (zot(stage)) stage = that.stage;
            if (zot(stage)) return;
            that.off("added", initFunction);
            stage.addChild(that);
            that.alpha = alpha;
            that.skewX = skew;
            that.setBounds(null);
            that.pos(padding, padding, horizontal, vertical);
            // that.x = horizontal=="left"?padding+skew/2+50:stage.getBounds().width-that.width-padding-skew/2+50;
            // that.y = vertical=="top"?padding:stage.getBounds().height-that.height-padding;
            meterFunction = zim.Ticker.add(function() {
                that.text = zim.decimals(createjs.Ticker.getMeasuredFPS(), decimals, true);
                if (stage) stage.update();
            }, stage);
        }
        this.position = function(v, h) {
            if (!zot(v)) vertical = v;
            if (!zot(h)) horizontal = h;
            that.setBounds(null);
            // that.x = horizontal=="left"?padding+skew/2+50:stage.getBounds().width-that.width-padding-skew/2+50;
            // that.y = vertical=="top"?padding:stage.getBounds().height-that.height-padding;
            that.pos(padding, padding, horizontal, vertical);
        }
        this.dispose = function () {
            zim.Ticker.remove(meterFunction);
        }
    }
    zim.extend(zim.Meter, zim.Label);

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    zim.Board = function(size, cols, rows, backgroundColor, rollBackgroundColor, borderColor, borderWidth, icon, isometric, indicatorColor, indicatorBorderColor, indicatorBorderWidth, indicatorSize, indicatorType, arrows, arrowColor, arrowRollColor, swipe, info, labels, color, scaleMin, scaleMax, buffer) {
        var duo; if (duo = zob(zim.Board, arguments, null, this)) return duo;
        this.arguments = arguments;

        if (zot(size)) size = 50;
        this.size = size;
        if (zot(cols)) cols = zot(rows)?8:rows;
        if (zot(rows)) rows = cols;
        this.cols = cols;
        this.rows = rows;
        this.num = cols*rows;
        if (zot(backgroundColor)) backgroundColor = "#eee";
        if (zot(rollBackgroundColor)) rollBackgroundColor = "#aaa";
        if (zot(borderColor)) borderColor = "#111";
        if (zot(borderWidth)) borderWidth = 2;
        if (zot(isometric)) isometric = true;
        var isoFirst = isometric;
        if (zot(indicatorColor)) indicatorColor = null;
        if (zot(indicatorBorderColor)) indicatorBorderColor = "#111";
        if (zot(indicatorBorderWidth)) indicatorBorderWidth = 2;
        if (zot(indicatorType)) indicatorType = "circle";
        if (indicatorType != "circle") indicatorType = "rectangle";
        if (zot(indicatorSize)) indicatorSize = indicatorType=="rectangle"?(size-indicatorBorderWidth):size/4;
        if (zot(arrows)) arrows = true;
        if (zot(arrowColor)) arrowColor = "rgba(0,0,0,.4)";
        if (zot(arrowRollColor)) arrowRollColor = "#fff";
        if (zot(swipe)) swipe = arrows;
        
        var timeType = typeof TIME == "undefined" ? "seconds" : TIME;
    
        function emptyInfo() {
            // info is rows (j) then cols (i)
            info = [];
            zim.loop(rows, function (j) {
                var inf = info[j] = [];
                zim.loop(cols, function (i) {
                    inf[i]={data:"x", color:backgroundColor, icon:icon?icon.clone():null, items:[]};
                });
            });
        }
        if (zot(info)) {
            // create empty info if no provided info
            emptyInfo();
        } else if (typeof info == "string") {
            if (info.match(/zimon/) && typeof ZIMON !== 'undefined') info = ZIMON.parse(info);
            else emptyInfo();
        } else if (!Array.isArray(info) || info.length==0) {
            emptyInfo();
        } else {
            // info are rows (j) then cols (i)
            info2 = [];
            var i0 = 0;
            // get most cols
            zim.loop(Math.max(cols,info.length), function (j) {
                if (info[j] && info[j].length > i0) i0 = info[j].length;
            });
            zim.loop(Math.max(cols,info.length), function (j) {
                var inf = info2[j] = [];
                zim.loop(Math.max(rows, i0), function (i) {
                    if (info[j] && !zot(info[j][i])) {
                        if (zot(info[j][i].data)) info[j][i].data = "x";
                        if (zot(info[j][i].color)) info[j][i].color = backgroundColor;
                        if (zot(info[j][i].icon)) info[j][i].icon = icon?icon.clone():null;
                        if (zot(info[j][i].items)) info[j][i].items = [];
                        inf[i] = info[j][i];
                    }
                    else inf[i]={data:"x", color:backgroundColor, icon:icon?icon.clone():null, items:[]};
                });
            });
            info = copy(info2);
        }
        this.info = info;
        if (zot(labels)) labels = false;
        if (zot(color)) color = "#666";
        if (zot(scaleMin)) scaleMin = 1.2;
        if (zot(scaleMax)) scaleMax = 1.8;
        if (zot(swipe)) swipe = true;
        if (zot(buffer)) buffer = 2;
        this.super_constructor();
        this.type = "Board";
        this.buffer = buffer;

        var that = this;
        var holder = new zim.Container().addTo(this);
        var container = new zim.Container(size, size);
        new zim.Rectangle(size,size,zik(backgroundColor),zik(borderColor),zik(borderWidth)).addTo(container);
        // labels for debugging
        if (labels) new zim.Label({text:"", color:color, align:"center", valign:"center"}).center(container);
        var tiles = this.tiles = new zim.Tile(container.centerReg(), cols, rows);

        if (isometric) {
            tiles.rot(45)
                .centerReg(holder)
            holder.sca(2,1);
        } else {
            tiles.centerReg(holder)
        }
        this.arrows = arrows;

        var startCol = 0;
        var startRow = 0;
        var lastStartCol = 0;
        var lastStartRow = 0;

        Object.defineProperty(this, 'numCols', {
            get: function() {
                return that.info[0].length;
            },
            set: function(value) {
                zog("zim.Board() - numCols is read only")
            }
        });

        Object.defineProperty(this, 'numRows', {
            get: function() {
                return that.info.length;
            },
            set: function(value) {
                zog("zim.Board() - numRows is read only")
            }
        });
        Object.defineProperty(this, 'startCol', {
            get: function() {
                return startCol;
            },
            set: function(value) {
                startCol = zim.constrain(value, 0, that.numCols-cols);
                if (startCol != lastStartCol) {
                    that.update();
                    that.shiftPath(lastStartCol,startCol); // no obj so for all pieces
                }
                lastStartCol = startCol;
            }
        });

        Object.defineProperty(this, 'startRow', {
            get: function() {
                return startRow;
            },
            set: function(value) {
                startRow = zim.constrain(value, 0, that.numRows-rows);
                if (startRow != lastStartRow) {
                    that.update();
                    that.shiftPath(null,null,lastStartRow,startRow); // no obj so for all pieces
                }
                lastStartRow = startRow;
            }
        });

        Object.defineProperty(this, 'data', {
            // gets board data only - not all data
            get: function() {
                var data = [];
                zim.loop(startRow+rows, function (j) {
                    var d = [];
                    data.push(d);
                    zim.loop(startCol+cols, function (i) {
                        d.push(that.info[j][i].data);
                    },null,null,startCol);
                },null,null,startRow);
                return data;
            },
            set: function(value) {
                zog("zim.Board() - data is read only - use setData(tile) or change info property and update()")
            }
        });

        Object.defineProperty(this, 'isometric', {
            get: function() {
                return isometric;
            },
            set: function(value) {
                if (value != isometric) {
                    isometric = value;
                    that.removeArrows();
                    if (isometric) {
                        holder.removeAllChildren();
                        that.tiles.rot(45).centerReg(holder);
                        var ss = isoFirst?1:1.2
                        holder.sca(2/ss,1/ss).mov(0,(isoFirst?20:0));
                    } else {
                        holder.removeAllChildren();
                        that.tiles.rot(0).centerReg(holder);
                        holder.sca(1*(isoFirst?1.2:1)).mov(0,(isoFirst?-20:0));
                    }
                    if (swipe) {
                        var swap = {left:"right", right:"left", up:"down", down:"up"};
                        if (that.swipeEvent) that.swipe.off("swipe", that.swipeEvent);
                        that.swipe = new zim.Swipe(that, null, null, isometric);
                        that.swipeEvent = that.swipe.on("swipe", function (e) {
                            if (e.target.direction == "none") return;
                            that.moveCamera(swap[e.target.direction]);
                        });
                    }
                    that.setArrows();
                    that.update();
                    if (that.stage) that.stage.update();
                }
            }
        });

        this.update = function() {
            // updates data, colors and pieces for currently visible board
            if (labels) {
                tiles.loop(function (tile) {
                    tile.getChildAt(1).text = that.getData(tile);
                });
            }
            that.pieces.loop(function (piece) {
                piece.visible = false;
            });
            that.clearBoardColors();
            that.clearBoardIcons();
            zim.loop(rows+startRow, function (j) {
                zim.loop(cols+startCol, function (i) {
                    var info = that.info[j][i];
                    var tile = that.getTile(i-startCol, j-startRow);
                    that.setColor(tile, info.color, true);
                    if (info.icon) that.setIcon(tile, info.icon, true);
                    zim.loop(info.items, function (item) {
                        that.add(item, i-startCol, j-startRow, null, null, null, true);
                    });
                },null,null,startCol);
            },null,null,startRow);
            if (that.stage) that.stage.update();
            return that;
        }

        if (swipe) {
            this.swipe = new zim.Swipe(this, null, null, isometric);
            this.swipeEvent = this.swipe.on("swipe", function (e) {
                if (e.target.direction == "none") return;
                var swap = {left:"right", right:"left", up:"down", down:"up"};
                that.moveCamera(swap[e.target.direction]);
            });
        }

        this.moveCamera = function(dir) {
            // moves camera one square left, right, up or down
            // by setting startCol and startRow
            // which moves any items, paths and sets activeData
            if (dir == "left") {
                if (that.arrowRight && startCol == that.numCols-cols) that.arrowRight.hov(arrowRollColor);
                that.startCol = startCol-1;
                if (that.arrowLeft && startCol == 0) that.arrowLeft.hov(-1);
            } else if (dir == "right") {
                if (that.arrowLeft && startCol == 0) that.arrowLeft.hov(arrowRollColor);
                that.startCol = startCol+1;
                if (that.arrowRight && startCol == that.numCols-cols) that.arrowRight.hov(-1);
            } else if (dir == "up") {
                if (that.arrowDown && startRow == that.numRows-rows) that.arrowDown.hov(arrowRollColor);
                that.startRow = startRow-1;
                if (that.arrowUp && startRow == 0) that.arrowUp.hov(-1);
            } else if (dir == "down") {
                if (that.arrowUp && startRow == 0) that.arrowUp.hov(arrowRollColor);
                that.startRow = startRow+1;
                if (that.arrowDown && startRow == that.numRows-rows) that.arrowDown.hov(-1);
            }
            return that;
        }

        this.positionBoard = function(i,j) {
            // starts board off at provided location in info
            that.startCol = i;
            that.startRow = j;
            if (that.arrows) that.setArrowHover();
            return that;
        }

        this.setArrowHover = function() {
            if (that.arrowLeft) that.arrowLeft.hov(startCol==0?-1:arrowRollColor);
            if (that.arrowRight) that.arrowRight.hov(startCol==that.numCols-cols?-1:arrowRollColor);
            if (that.arrowUp) that.arrowUp.hov(startRow==0?-1:arrowRollColor);
            if (that.arrowDown) that.arrowDown.hov(startRow==that.numRows-rows?-1:arrowRollColor);
        }

        this.addCol = function(index) {
            // adds info column at an index
            if (zot(index)) index = that.numCols;
            zim.loop(that.info, function (inf, i) {
                inf.splice(index, 0, {data:"x", color:backgroundColor, icon:icon?icon.clone():null, items:[]});
            });
            if (that.arrows) {
                that.setArrows();
                that.setArrowHover();
            }
            that.update();
            return that;
        }

        this.addRow = function(index) {
            // adds info row at an index
            if (zot(index)) index = that.numRows;
            var inf = [];
            zim.loop(that.numCols, function () {
                inf.push({data:"x", color:backgroundColor, icon:icon?icon.clone():null, items:[]});
            });
            that.info.splice(index, 0, inf);
            if (that.arrows) {
                that.setArrows();
                that.setArrowHover();
            }
            that.update();
            return that;
        }

        this.setArrows = function() {
            // sets arrows to handle shifting board
            if (!that.arrows) return;
            if (that.info.length > rows || that.info[0].length > cols) {
                if (!that.arrowUp) {
                    that.arrowUp = new Triangle({color:arrowColor}).sca(.4).center(holder)
                    if (isometric) {
                        that.arrowUp
                            .rot(45)
                            .mov(tiles.width/2, tiles.width/2-50);
                    } else {
                        that.arrowUp
                            .mov(tiles.width/2+40, -30);
                    }
                    that.arrowDown = new Triangle({color:arrowColor}).sca(.4).center(holder)
                    if (isometric) {
                        that.arrowDown
                            .rot(+45-180)
                            .mov(tiles.width/2-50, tiles.width/2);
                    } else {
                        that.arrowDown
                            .rot(-180)
                            .mov(tiles.width/2+10, +30);
                    }
                    that.arrowUp.on("mousedown", function () {
                        that.moveCamera("up");
                    });
                    that.arrowDown.on("mousedown", function () {
                        that.moveCamera("down");
                    });
                }
            } else { // may have removed data so no scroll is needed
                if (that.arrowUp) removeRowArrows();
            }
            var colArrows = zim.loop(that.info, function (d) {
                if (d.length > cols) return "yes";
            });
            if (colArrows == "yes") {
                if (!that.arrowLeft) {
                    that.arrowLeft = new Triangle({color:arrowColor}).sca(.4).cur().center(holder);
                    if (isometric) {
                        that.arrowLeft
                            .rot(+45-180+90)
                            .mov(-tiles.width/2, tiles.width/2-50);
                    } else {
                        that.arrowLeft
                            .rot(-180+90)
                            .mov(-60, tiles.width/2+40);
                    }
                    that.arrowRight = new Triangle({color:arrowColor}).sca(.4).center(holder);
                    that.arrowRight.n = "b"
                    if (isometric) {
                        that.arrowRight
                            .rot(45+90)
                            .mov(-tiles.width/2+50, tiles.width/2);
                    } else {
                        that.arrowRight
                            .rot(+90)
                            .mov(0, tiles.width/2+10);
                    }
                    that.arrowLeft.on("mousedown", function () {
                        that.moveCamera("left");
                    });
                    that.arrowRight.on("mousedown", function () {
                        that.moveCamera("right");
                    });
                    // FIX bounds so move camera not board
                }
                that.setArrowHover();
            } else {
                if (that.arrowLeft) removeColArrows();
            }
        }
        that.setArrows();

        this.removeArrows = function() {
            removeColArrows();
            removeRowArrows();
        }
        function removeColArrows() {
            if (!that.arrowLeft || !that.arrowRight) return;
            that.arrowLeft.removeAllEventListeners();
            that.arrowRight.removeAllEventListeners();
            that.arrowLeft.removeFrom();
            that.arrowLeft = null;
            that.arrowRight.removeFrom();
            that.arrowRight = null;
        }
        function removeRowArrows() {
            if (!that.arrowUp || !that.arrowDown) return;
            that.arrowUp.removeAllEventListeners();
            that.arrowDown.removeAllEventListeners();
            that.arrowUp.removeFrom();
            that.arrowUp = null;
            that.arrowDown.removeFrom();
            that.arrowDown = null;
        }

        that.lastTile = null;
        tiles.tap(function (e) {
            that.currentTile = e.target;
        });
        tiles.on("mouseover", function(e) {
            if (that.timeout) that.timeout.clear();
            e.target.lastColor = e.target.getChildAt(0).color;
            e.target.getChildAt(0).color = rollBackgroundColor;
            that.currentTile = e.target;
            if (e.target != that.lastTile) {that.dispatchEvent("change");}
            that.lastTile = e.target;
            if (that.stage) that.stage.update();
        });
        tiles.on("mouseout", outHandler);
        zimDefaultFrame.canvas.addEventListener("mouseleave", outHandler);
        function outHandler(e) {
            that.timeout = zim.timeout(timeType=="seconds"?.05:50, function () {
                that.currentTile = null;
                that.lastTile = null;
                that.dispatchEvent("change");
            });
            if (e.target && e.target.getChildAt) e.target.getChildAt(0).color = e.target.lastColor;
            if (that.lastTile) that.lastTile.getChildAt(0).color = that.lastTile.lastColor;
            if (that.stage) that.stage.update();
        };


        this.getIndexes = function(tile) {
            // gets the row and col for a tile
            var n = tiles.getChildIndex(tile);
            var col = n%cols;
            var row = Math.floor(n/cols);
            return {col:col, row:row};
        }

        this.getInfo = function(a, b) {
            // gets the info object for a tile (or i,j info point)
            if (zot(a)) return;
            if (zot(b)) {
                var indexes = that.getIndexes(a);
                a = indexes.col+startCol;
                b = indexes.row+startRow;
            }
            if (a < 0 || a > that.numCols-1 || b < 0 || b > that.numRows-1) return;
            return that.info[b][a];
        }
        this.getData = function(a, b) {
            // gets items from info for a tile (or i,j info point)
            if (zot(a)) return;
            return that.getInfo(a, b).data;
        }
        this.getColor = function(a, b) {
            // gets the color data for a tile (or i,j info point)
            if (zot(a)) return;
            return that.getInfo(a, b).color;
        }
        this.getIcon = function(a, b) {
            // gets the icon for a tile (or i,j info point)
            if (zot(a)) return;
            return that.getInfo(a, b).icon;
        }
        this.getItems = function(a, b) {
            // gets items from info for a tile (or i,j info point)
            if (zot(a)) return;
            var i = that.getInfo(a, b);
            if (i) return that.getInfo(a, b).items;
        }
        this.getAllItems = function(filter) {
            // gets an array of all items - add optional filter
            var items = [];
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);
            zim.loop(that.info, function (rows, j) {
                zim.loop(rows, function (info, i) {
                    if (!includeTest(i,j,filter)) return;
                    zim.loop(info.items, function (item) {
                        items.push(item);
                    });
                });
            });
            return items;
        }
        this.getTilesAround = function(a, b) {
            // gets tiles around a tile (or i,j info point)
            if (zot(a)) return;
            if (zot(b)) {
                var indexes = that.getIndexes(a);
                a = indexes.col+startCol;
                b = indexes.row+startRow;
            }
            if (a < 0 || a > that.numCols-1 || b < 0 || b > that.numRows-1) return [];
            return [
                that.getTile(a-1,b-1), that.getTile(a-0,b-1), that.getTile(a+1,b-1),
                that.getTile(a+1,b-0),that.getTile(a+1,b+1), that.getTile(a-0,b+1),
                that.getTile(a-1,b+1), that.getTile(a-1,b-0)
            ];
        }
        tiles.loop(function(t) {
            if (indicatorType == "circle") {
                t.indicator = new Circle(zik(indicatorSize), zik(indicatorColor), zik(indicatorBorderColor), indicatorBorderWidth).center(t).alp(0);
            } else {
                var size = zik(indicatorSize);
                t.indicator = new Rectangle(size, size, zik(indicatorColor), zik(indicatorBorderColor), indicatorBorderWidth).centerReg(t).alp(0);
            }
            t.mouseChildren = false;
            var i = that.getIndexes(t);
            t.boardCol = i.col;
            t.boardRow = i.row;
            var icon = that.getInfo(t).icon;
            t.icon = icon;
            if (icon) icon.center(t.getChildAt(0));
        });

        this.getTile = function(col, row) {
            // gets tile at visible col and row
            if (col<0||row<0||col>that.cols-1||row>that.rows-1) return;
            return tiles.getChildAt(row*cols+col);
        }

        this.setData = function(tile, value) {
            // updates a data entry for a tile
            that.getInfo(tile).data = value;
            return that.data;
        }

        this.setColor = function(tile, color, internal) {
            // adds a color to board and info for the color
            tile.lastColor = tile.getChildAt(0).color = color;
            if (zot(internal)) that.getInfo(tile).color = color;
            return that;
        }

        this.setIcon = function(tile, icon, internal) {
            if (zot(icon)) return;
            // adds an icon to board and info for the icon
            if (zot(internal)) that.getInfo(tile).icon = icon;
            if (tile.icon) tile.icon.removeFrom();
            tile.icon = icon;
            icon.center(tile.getChildAt(0));
            return that;
        }

        this.clearInfo = function(filter) {
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);
            // clears info for data, colors and items
            zim.loop(that.info, function (rows, j) {
                zim.loop(rows, function (inf, i) {
                    if (!includeTest(i,j,filter)) return;
                    inf.data = "x";
                    zim.loop(inf.items, function (item) {
                        item.boardCol = null;
                        item.boardRow = null;
                        item.tile = null;
                        item.removeFrom();
                    });
                    inf.items = [];
                    inf.icon = that.icon?that.icon.clone():null;
                    inf.color = backgroundColor;
                    var tile = that.getTile(i-startCol, j-startRow);
                    if (tile) {
                        tile.getChildAt(0).color = backgroundColor;
                        if (inf.icon) inf.icon.center(tile.getChildAt(0));
                    }
                });
            });
        }
        this.clearData = function(filter) {
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);
            // clears data but leaves colors and items
            zim.loop(that.info, function (rows, j) {
                zim.loop(rows, function (info, i) {
                    if (!includeTest(i,j,filter)) return;
                    info.data = "x";
                });
            });
        }
        this.clearItems = function(filter) {
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);
            // clears items but leaves data and colors
            zim.loop(that.info, function (rows, j) {
                zim.loop(rows, function (info, i) {
                    if (!includeTest(i,j,filter)) return;
                    zim.loop(info.items, function (item) {
                        item.boardCol = null;
                        item.boardRow = null;
                        item.tile = null;
                        item.removeFrom();
                    });
                    info.items = [];
                });
            });
        }
        this.clearColors = function(filter) {
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);
            // clears color but leaves data and items
            zim.loop(that.info, function (rows, j) {
                zim.loop(rows, function (info, i) {
                    if (!includeTest(i,j,filter)) return;
                    info.color = backgroundColor;
                    var tile = that.getTile(i-startCol, j-startRow);
                    if (tile) tile.getChildAt(0).color = backgroundColor;
                });
            });
        }
        this.clearBoardColors = function() {
            // clears board colors but leaves color info
            zim.loop(tiles, function(tile) {
                tile.getChildAt(0).color = backgroundColor;
            });
        }
        this.clearIcons = function(filter) {
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);

            // clears color but leaves data and items
            zim.loop(that.info, function (rows, j) {
                zim.loop(rows, function (info, i) {
                    if (!includeTest(i,j,filter)) return;
                    if (info.icon) {
                        info.icon.removeFrom();
                        if (info.icon.dispose) info.icon.dispose();
                        info.icon = null;
                    }
                    info.icon = that.icon?that.icon.clone():null;
                    var tile = that.getTile(i-startCol, j-startRow);
                    if (tile && info.icon) info.icon.center(tile.getChildAt(0));
                });
            });
        }
        this.clearBoardIcons = function() {
            // clears board icons but leaves icon info
            zim.loop(tiles, function(tile) {
                if (tile.icon) tile.icon.removeFrom();
                tile.icon = null;
            });
        }

        this.getRandomTile = function(filter) {
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);

            // gets random visible tile
            var tile;
            var count = 0;
            while(!tile && count<10000) {
                var i = zim.rand(0,cols-1)+startCol;
                var j = zim.rand(0,rows-1)+startRow;
                if (filter && includeTest(i,j,filter)) tile = that.getTile(i-startCol,j-startRow);
                count++;
            }
            return tile;
        }

        function normalizeFilter(filter) {
            if (filter.constructor != {}.constructor) {
                // assume filtering by data
                filter = {data:!Array.isArray(filter)?[filter]:filter};
                return filter;
            }
            var types = ["data", "notData", "color", "notColor", "icon", "notIcon", "item", "notItem", "col", "notCol", "row", "notRow"];
            var wrong = ["datas", "notDatas", "colors", "notColors", "icons", "notIcons", "items", "notItems", "cols", "notCols", "rows", "notRows"];
            zim.loop(wrong, function (w, i) {
                if (filter[w]) filter[types[i]] = filter[w];
                delete filter[w];
            });
            zim.loop(types, function (type) {
                if (!zot(filter[type]) && !Array.isArray(filter[type])) filter[type] = [filter[type]];
            });
            return filter;
        }

        function includeTest(i,j,filter) {
            // test for there or not there and if wrong - then return false else return true
            if (!zot(filter.data) && filter.data.indexOf(that.info[j][i].data) == -1) return false;
            if (!zot(filter.notData) && filter.notData.indexOf(that.info[j][i].data) != -1) return false;
            if (!zot(filter.color) && filter.color.indexOf(that.info[j][i].color) == -1) return false;
            if (!zot(filter.notColor) && filter.notColor.indexOf(that.info[j][i].color) != -1) return false;
            if (!zot(filter.icon) && (!that.info[j][i].icon || filter.icon.indexOf(that.info[j][i].icon.type) == -1)) return false;
            if (!zot(filter.notIcon) && (that.info[j][i].icon && filter.notIcon.indexOf(that.info[j][i].icon.type) != -1)) return false;
            if (!zot(filter.item) || !zot(filter.notItem)) {
                var itemList = that.getItems(i,j);
                if (!zot(filter.item)) {
                    var match = zim.loop(itemList, function (it) {
                        if (filter.item.indexOf(it) != -1) return true;
                    });
                    if (!match) return false;
                }
                if (!zot(filter.notItem)) {
                    var match = zim.loop(itemList, function (it) {
                        if (filter.notItem.indexOf(it) != -1) return true;
                    });
                    if (match) return false;
                }
            }
            if (!zot(filter.col) && filter.col.indexOf(i-startCol) == -1) return false;
            if (!zot(filter.row) && filter.row.indexOf(j-startRow) == -1) return false;
            if (!zot(filter.notCol) && filter.notCol.indexOf(i-startCol) != -1) return false;
            if (!zot(filter.notRow) && filter.notRow.indexOf(j-startRow) != -1) return false;

            return true;
        }

        this.getPoint = function(a, b) {
            // gets x and y of tile (or i,j) in items coordinates
            if (zot(a)) return;
            if (zot(b)) return tiles.localToLocal(a.x, a.y, that.pieces);
            return tiles.localToLocal((a-startCol)*size+size/2, (b-startRow)*size+size/2, that.pieces);
        }

        this.getGlobalPoint = function(a, b) {
            // gets x and y of tile (or i,j) in global coordinates
            if (zot(a)) return;
            if (zot(b)) return tiles.localToGlobal(a.x, a.y);
            return tiles.localToGlobal((a-startCol)*size+size/2, (b-startRow)*size+size/2);
        }

        this.pieces = new Container().addTo(this);
        this.pieces.mouseChildren = false;
        this.pieces.mouseEnabled = false;

        this.setDepth = function() {
            var piecesArray = [];
            that.pieces.loop(function (piece) {
                piecesArray.push(piece);
            })
            piecesArray.sort(function(a,b) {return a.y - b.y;});
            loop(piecesArray, function(piece) {
                piece.addTo(that.pieces);
            });
        }

        // col and row always refer to visible tile (unless startCol and startRow)
        this.position = function(obj, col, row, internal) {
            // positions object at visible row and col - no animation
            // called by place and when board arrows are used
            if (col < 0 || col > cols-1 || row < 0 || row > rows-1) obj.visible = false;
            else {
                if (obj.type=="Emitter") obj.particles.visible = true;
                else obj.visible = true;
            }
            var i = startCol+col;
            var j = startRow+row;
            i = zim.constrain(i, 0, that.numCols);
            j = zim.constrain(j, 0, that.numRows);
            var tile = this.getTile(i-startCol, j-startRow);
            if (!internal) {
                if (obj.boardItems) obj.boardItems.splice(obj.boardItems.indexOf(obj), 1);
                obj.boardItems = that.getItems(i,j);
                if (obj.boardItems) obj.boardItems.push(obj);
            } else {
                obj.boardItems = that.getItems(i,j);
            }

            obj.loc(that.getPoint(i,j), null, that.pieces);
            if (tile) {
                if (isometric) obj.sca(obj.proportion.convert(obj.y)*obj.startScaleX, obj.proportion.convert(obj.y)*obj.startScaleY);
                that.setDepth();
            }
            obj.boardCol = i-startCol;
            obj.boardRow = j-startRow;
            obj.boardTile = tile;
            obj.square = j+"-"+i;

            if (obj.dispatchEvent) obj.dispatchEvent("positioned");
            return this;
        }

        this.add = function(obj, col, row, data, color, icon, internal) {
            // adds object at board col and row (not data but actual visible col and row)
            if (zot(obj)) return this;
            if (zot(col)) col = 1;
            if (zot(row)) row = 1;
            obj.addTo(this.pieces);
            if (!obj.startScaleX) {
                obj.startScaleX = obj.scaleX;
                obj.startScaleY = obj.scaleY;
            }
            if (isometric && zot(obj.proportion)) obj.proportion = new Proportion(-holder.height/2, holder.height/2, scaleMin, scaleMax);
            that.position(obj, col, row, internal);
            var tile = that.getTile(col, row);
            if (!zot(data)) that.setData(tile, data);
            if (!zot(color)) that.setColor(tile, color);
            if (!zot(icon)) that.setIcon(tile, icon);
            if (isometric && !obj.boardEvent) {
                obj.boardEvent = obj.on("animation", function () {
                    if (obj.visible) obj.sca(obj.proportion.convert(obj.y)*obj.startScaleX, obj.proportion.convert(obj.y)*obj.startScaleY);
                    if (obj.dispatchEvent) obj.dispatchEvent("moving");
                });
            }
            return this;
        }
        this.remove = function(obj) {
            // removes item from board and clears it from info
            if (obj.type=="Emitter") obj.particles.visible = true;
            else obj.visible = true; // so don't confuse coder if obj used elsewhere
            obj.removeFrom();
            if (obj.boardKeyType) that.removeKeys(obj.boardKeyType);
            if (obj.boardItems) obj.boardItems.splice(obj.boardItems.indexOf(obj), 1);
            return this;
        }

        that.update();

        this.moveTo = function(obj, col, row, time, type) {
            this.move(obj, col-obj.boardCol, row-obj.boardRow, time, type);
            return that;
        }
        this.move = function(obj, col, row, time, type) {
            // animates or places object a certain number of rows or cols
            // used by keyboard or called by app
            if (zot(col)) col = 0;
            if (zot(row)) row = 0;
            if (zot(time)) time = timeType=="seconds"?.5:500;
            obj.visible = true;
            var newCol = zim.constrain(obj.boardCol+col, 0, cols-1);
            var newRow = zim.constrain(obj.boardRow+row, 0, rows-1);
            if (that["keyFilter"+type] && !includeTest(newCol+startCol,newRow+startRow,that["keyFilter"+type])) return;
            if (that.path) that.clearPath();
            var total = Math.abs(newCol - obj.boardCol) + Math.abs(newRow - obj.boardRow)
            var newLoc = this.getPoint(this.getTile(newCol, newRow));
            if (obj.boardCol!=newCol || obj.boardRow!=newRow) {
                obj.nextCol = newCol;
                obj.nextRow = newRow;                
                if (obj.dispatchEvent) obj.dispatchEvent("movingstart");
                obj.animate({
                    props:{x:newLoc.x, y:newLoc.y},
                    time:time*total,
                    protect:true,
                    call:function () {
                        if (that.buffer && that.buffer > 0) {
                            var left = (obj.boardCol > newCol && obj.boardCol <= that.buffer);
                            var right = (obj.boardCol < newCol && cols-obj.boardCol-1 <= that.buffer);
                            var up = (obj.boardRow > newRow && obj.boardRow <= that.buffer);
                            var down = (obj.boardRow < newRow && rows-obj.boardRow-1 <= that.buffer);
                        }
                        that.position(obj,newCol,newRow);
                        if (that.buffer && that.buffer > 0) {
                            if (left) that.moveCamera("left");
                            if (right) that.moveCamera("right");
                            if (up) that.moveCamera("up");
                            if (down) that.moveCamera("down");
                        }
                        that["keyCheck"+type] = true;
                        if (obj.dispatchEvent) obj.dispatchEvent("moved");
                        if (obj.dispatchEvent) obj.dispatchEvent("movingdone");
                    },
                    events:true
                });
            }
            return that;
        }
        this.addKeys = function(obj, type, filter) {
            // adds either arrows or wasd keys to move provided object
            if (zot(type)) type = "arrows";
            if (type != "arrows") type = "wasd";
            var moveCheck = true;
            zimDefaultFrame.off("keydown", that["keydown"+type]);
            zimDefaultFrame.off("keyup", that["keyup"+type]);
            that["keyCheck"+type] = true;
            that["keyOjbect"+type] = obj;
            if (zot(filter)) filter = {};
            else filter = normalizeFilter(filter);
            if (!zot(filter)) that["keyFilter"+type] = filter;
            obj.boardKeyType = type;
            that["keydown"+type] = zimDefaultFrame.on("keydown", function (e) {
                if (obj.moving) return;
                if (!that["keyCheck"+type]) return;
                if (e.keyCode==(type=="arrows"?37:65)) { // left
                    that.move(obj,-1,0,null,type);
                } else if (e.keyCode==(type=="arrows"?39:68)) {
                    that.move(obj,1,0,null,type);
                } else if (e.keyCode==(type=="arrows"?38:87)) { // up
                    that.move(obj,0,-1,null,type);
                } else if (e.keyCode==(type=="arrows"?40:83)) {
                    that.move(obj,0,1,null,type);
                }
                that["keyCheck"+type] = false;
            });
            that["keyup"+type] = zimDefaultFrame.on("keyup", function () {
                that["keyCheck"+type] = true;
            });
            return that;
        }
        this.removeKeys = function(type) {
            // removes either arrows or wasd keys
            if (zot(type)) type = "arrows";
            if (type != "arrows") type = "wasd";
            that["keyOjbect"+type].boardKeyType = null;
            that["keyOjbect"+type] = null;
            that["keyFilter"+type] = null;
            zimDefaultFrame.off("keydown", that["keydown"+type]);
            zimDefaultFrame.off("keyup", that["keyup"+type]);
            return that;
        }
        this.showPath = function(path, time) {
            // shows path indicators for a path [{x:col, y:row}, {etc.}, {etc.}]
            if (zot(time)) time = 0;
            that.clearPath();
            var easy = (path && path[0] && !zot(path[0].x));
            zim.loop(path, function (p, i) {
                var t = that.getTile(easy?p.x:p[0], easy?p.y:p[1]);
                if (!t) return;
                if (time == 0) that.getTile(easy?p.x:p[0], easy?p.y:p[1]).indicator.alp(1);
                else that.getTile(easy?p.x:p[0], easy?p.y:p[1]).indicator.animate({
                    props:{alpha:1},
                    time:time,
                    wait:i*time/10,
                });
            });
            that.path = path;
            if (that.stage) that.stage.update();
        }
        this.clearPath = function() {
            // hides path indicators
            that.path = null;
            that.tiles.loop(function(tile) {
                tile.indicator.alp(0);
            });
            if (that.stage) that.stage.update();
        }
        this.followPath = function(obj, path, time, animation, buffer) {
            // animates object along a provided path [{x:col, y:row}, {etc.}, {etc.}]
            if (zot(path) || path.length == 0) {obj.moving = false; return;}
            obj.boardPath = zim.copy(path);
            if (zot(time)) time = timeType=="seconds"?.6:600;
            if (zot(animation) || animate===true) animation = timeType=="seconds"?.3:300;
            if (zot(buffer)) buffer = 0;
            obj.moving = true;
            that.moveObject = obj;
            obj.boardIntervalObj = zim.interval(time, function (o) {
                var d = obj.boardPath[o.count];
                // BREAK
                var tile = that.getTile(d.x, d.y);
                if (tile == obj.boardTile) return;
                var newCol;
                var newRow;
                if (tile) {
                    var location = that.getPoint(that.getTile(d.x, d.y));
                    var newCol = tile.boardCol;
                    var newRow = tile.boardRow;
                }
                if (animation && tile) {
                    obj.animate({
                        props:{x:location.x, y:location.y},
                        time:animation,
                        call:function () {
                            if (tile && buffer && buffer > 0) {
                                var left = (obj.boardCol > newCol && obj.boardCol <= buffer);
                                var right = (obj.boardCol < newCol && cols-obj.boardCol-1 <= buffer);
                                var up = (obj.boardRow > newRow && obj.boardRow <= buffer);
                                var down = (obj.boardRow < newRow && rows-obj.boardRow-1 <= buffer);
                            }
                            that.position(obj, d.x, d.y);
                            if (tile && buffer && buffer > 0) {
                                if (left) that.moveCamera("left");
                                if (right) that.moveCamera("right");
                                if (up) that.moveCamera("up");
                                if (down) that.moveCamera("down");
                            }
                            if (obj.dispatchEvent && obj.dispatchEvent) obj.dispatchEvent("moved");
                            if (!o.total) {
                                obj.moving = false;
                                obj.boardLastPath = obj.boardPath;
                                obj.boardPath = null;
                                that.clearPath();
                                setTimeout(function () {
                                    if (!obj.moving && obj.dispatchEvent && obj.dispatchEvent) obj.dispatchEvent("movingdone");
                                }, 500);
                            }
                        },
                        events:true
                    });
                } else {
                    // BREAK - seems to take off but not add back on?
                    that.position(obj, d.x, d.y);
                    if (o.count == o.total-1) {
                        obj.moving = false;
                        obj.boardLastPath = obj.boardPath;
                        obj.boardPath = null;
                        that.clearPath();
                        if (obj.dispatchEvent) obj.dispatchEvent("movingdone");
                    }
                    if (that.stage) that.stage.update();
                }
            }, path.length, true);
        }
        this.stopFollowPath = function(obj) {
            // stops a path from next steps
            obj.moving = false;
            obj.boardIntervalObj.clear();
        }
        this.shiftPath = function(lastStartX, startX, lastStartY, startY, obj) {
            if (obj) {
                if (!obj.boardPath) return;
                applyShift(-startX+lastStartX, -startY+lastStartY, obj);
            } else {
                that.pieces.loop(function (obj) {
                    if (!obj.boardPath) return;
                    applyShift(-startX+lastStartX, -startY+lastStartY, obj);
                });
            }
        }
        function applyShift(difX, difY, obj) {
            zim.loop(obj.boardPath, function (step) {
                if (difX) step.x = step.x + difX;
                if (difY) step.y = step.y + difY;
            });
            that.showPath(obj.boardPath);
        }
        this.record = function() {
            if (typeof ZIMON == 'undefined') return;
            if (!that.pane) {
                var pane = that.pane = new zim.Pane({
                    container:that.stage,
                    width:Math.min(500, that.stage.width-20),
                    height:Math.min(500, that.stage.height-20),
                    draggable:true,
                });
                var textArea = that.textArea = new zim.TextArea(Math.min(400, that.stage.width-70), Math.min(400, that.stage.height-70));
                textArea.tag.style.overflow = "auto";
                textArea.centerReg(pane);
            }
            that.textArea.text = "'" + ZIMON.stringify(that.info) + "'";
            that.pane.show();
            return that.textArea.text;
        }
    }
    zim.extend(zim.Board, zim.Container);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    zim.Person = function(shirt, pants, head, outline, player, cache) {
        var duo; if (duo = zob(zim.Person, arguments, null, this)) return duo;
        this.arguments = arguments;

        var colors = zim.shuffle([zim.pink, zim.blue, zim.yellow, zim.green, zim.tin, zim.light, zim.purple, zim.orange]);
        var heads = zim.shuffle([zim.brown, "peru", "saddlebrown", "sandybrown", "wheat", "bisque", "rosybrown", "tan"])
        if (zot(shirt)) shirt = colors[0];
        if (zot(pants)) pants = colors[1];
        if (zot(head)) head = heads[0];
        if (zot(outline)) outline = "#333";
        if (zot(player)) player = false;
        if (zot(cache)) cache = false;
        shirt = zik(shirt);
        pants = zik(pants);
        head = zik(head);
        this.super_constructor();
        this.type = player?"Me":"Person";
        var feet = new zim.Circle(12, pants).sca(1,.5).addTo(this);
        this.centerReg(null,null,false).mov(0,80-25/.707); // 45 degee shadow
        var myBot = new zim.Rectangle(24,18,pants).loc(-12,-18,this);
        var myBelt = new zim.Circle(12, shirt, "rgba(0,0,0,.3)",2).sca(1,.5).loc(0,-18,this);
        var myTop = new zim.Rectangle(24,10,shirt).loc(-12,-28,this);
        var myNeck = new zim.Circle(12, shirt).sca(1,.5).loc(0,-28,this);
        var myHead = new zim.Circle(12, head, outline).loc(0,-40,this);
        if (cache) this.cache(-this.width/2-2,-this.height,this.width+4,this.height+10);
    }
    zim.extend(zim.Person, zim.Container);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    zim.Orb = function(radius, color, color2, accentColor, accentColor2, flat, alpha, time, delay) {
        var duo; if (duo = zob(zim.Orb, arguments, null, this)) return duo;
        this.arguments = arguments;

        this.super_constructor();
        this.type = "Orb";
        if (zot(flat)) flat = true;
        if (zot(radius)) radius = flat?16:22;
        if (zot(color)) color = flat?zim.blue:zim.purple;
        if (zot(color2)) color2 = flat?zim.darker:null;
        if (zot(accentColor)) accentColor = flat?null:zim.pink;
        if (zot(accentColor2)) accentColor2 = flat?null:null;
        if (zot(alpha)) alpha = .5;
        var timeType = typeof TIME == "undefined" ? "seconds" : TIME;
        if (zot(time)) time = timeType=="seconds"?1:1000;
        if (zot(delay)) delay = timeType=="seconds"?1:1000;
        radius = zik(radius);
        color = zik(color);
        color2 = zik(color2);
        accentColor = zik(accentColor);
        accentColor2 = zik(accentColor2);

        if (flat) {
            new zim.Circle(radius, color, accentColor)
                .alp(.9)
                .sca(1,1)
                .addTo(this)
                .animate({obj:{alpha:alpha}, time:time, loop:true, rewind:true});
            new zim.Circle(7, color2, accentColor2).sca(1,1).addTo(this);
            this.centerReg(null,null,false).reg(0,2);
        } else {
            var circle = new zim.Circle(radius).reg(null,14/22*radius).addTo(this);
            circle.colorCommand.radialGradient([color,accentColor],[0,.8],0,0,22,8,-8,0);
            circle.cache();
            if (color2) {
                var circle2 = new zim.Circle(radius*1.3).reg(null,14/22*radius).addTo(this).alp(0);
                circle2.colorCommand.radialGradient([color2,accentColor2],[0,.8],0,0,22,8,-8,0);
                circle2.cache();
                circle2.cache().animate({
                    props:{alpha:alpha},
                    wait:delay,
                    loop:true,
                    rewind:true,
                    loopWait:delay,
                    time:time
                });
            }
        }
    }
    zim.extend(zim.Orb, zim.Container);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    zim.Tree = function(cache) {
        var duo; if (duo = zob(zim.Tree, arguments, null, this)) return duo;
        this.arguments = arguments;
        if (zot(cache)) cache = true;

        this.super_constructor();
        this.type = "Tree";
        var roots = new zim.Circle(10, zim.brown).sca(1,.5).addTo(this);
        this.centerReg(null,null,false);
        var trunk = new zim.Rectangle(20,50,zim.brown).loc(-10,-50,this);
        var leaves1 = new zim.Circle(zim.rand(35,45), zim.green).sca(1,.65).loc(0,-50,this);
        var leaves2 = new zim.Circle(zim.rand(20,30), zim.green).sca(1,1).loc(-5,-70,this);
        var leaves3 = new zim.Circle(zim.rand(15,20), zim.green).sca(1,1).loc(12,-72,this);
        if (cache) this.cache();
    }
    zim.extend(zim.Tree, zim.Container);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    zim.Timer = function(time, step, colon, down, isometric, startPaused, size, font, color, backgroundColor, borderColor, borderWidth, align, valign, bold, italic, variant, width, height, decimals) {
        var duo; if (duo = zob(zim.Timer, arguments, null, this)) return duo;
        this.arguments = arguments;

        if (zot(time)) time = 60;
        if (zot(step)) step = 1000;
        if (zot(colon)) colon = false;
        if (zot(down)) down = true;
        if (zot(color)) color = zim.black;
        if (zot(backgroundColor)) backgroundColor = zim.yellow;
        if (zot(width)) width = 150;
        if (zot(height)) height = 60;
        if (zot(align)) align = "center";
        if (zot(valign)) valign = "center";
        if (zot(borderColor)) borderColor = null;
        if (zot(borderWidth)) borderWidth = null;
        if (borderColor < 0 || borderWidth < 0) borderColor = borderWidth = null;
        else if (borderColor!=null && borderWidth==null) borderWidth = 1;
        this.super_constructor(colon?zim.decimals(time/60,2,2,1,null,true):time, size, font, color, null, null, null, align, valign, null, null, bold, italic, variant, new Rectangle(width, height, backgroundColor, borderColor, borderWidth).centerReg({add:false}));
        this.type = "Timer";
        var that = this;
        that.totalTime = time;
        // if (isometric == "right") that.reg(that.getBounds().width);
        Object.defineProperty(this, 'isometric', {
            get: function() {
                return isometric;
            },
            set: function(value) {
                isometric = value;
                if (isometric) {
                    if (isometric == true) isometric = "left";
                    if (isometric == "left") {
                        that.ske(0,-26.5);
                    } else {
                        that.ske(0,26.5);
                    }
                } else {
                    that.ske(0,0);
                }
            }
        });
        var paused = startPaused;
        Object.defineProperty(this, 'paused', {
            get: function() {
                return paused;
            },
            set: function(value) {
                if (value==paused) return;
                that.pause(value);
            }
        });
        this.isometric = isometric;
        Object.defineProperty(this, 'time', {
            get: function() {
                return time;
            },
            set: function(value) {
                time = value;
                if (colon) that.text = zim.decimals(time/60,2,2,1,null,true);
                else that.text = zim.decimals(value, zot(decimals)?1:decimals, step%1000==0?0:zot(decimals)?1:decimals, null, false);
            }
        });
        this.start = function(t) {
            if (!zot(t)) that.time = t;
            paused = false;
            clearInterval(that.intervalID);
            that.intervalID = setInterval(function () {
                that.time += down?-step/1000:step/1000;
                if (down && that.time <= 0) {
                    that.time = 0;
                    clearInterval(that.intervalID);
                }
                if (colon) that.text = zim.decimals(that.time/60,2,2,1,null,true);
                else that.text = zim.decimals(that.time, zot(decimals)?1:decimals, step%1000==0?0:zot(decimals)?1:decimals, null, false);
                that.dispatchEvent("step");
                if (down && that.time <= 0) that.dispatchEvent("complete");
                if (that.stage) that.stage.update();
            }, step);
        }
        if (!startPaused) this.start();

        this.pause = function(state) {
            if (zot(state)) state = true;
            if (state) {
                clearInterval(that.intervalID);
                paused = true;
            } else {
                that.start(that.time);
            }
        }

        this.stop = function() {
            clearInterval(that.intervalID);
            paused = null;
        }

    }
    zim.extend(zim.Timer, zim.Label);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    zim.Scorer = function(score, isometric, size, font, color, backgroundColor, borderColor, borderWidth, align, valign, bold, italic, variant, width, height) {
        var duo; if (duo = zob(zim.Scorer, arguments, null, this)) return duo;
        this.arguments = arguments;

        if (zot(score)) score = 0;
        if (zot(color)) color = zim.black;
        if (zot(backgroundColor)) backgroundColor = zim.green;
        if (zot(width)) width = 150;
        if (zot(height)) height = 60;
        if (zot(align)) align = "center";
        if (zot(valign)) valign = "center";
        if (zot(borderColor)) borderColor = null;
        if (zot(borderWidth)) borderWidth = null;
        if (borderColor < 0 || borderWidth < 0) borderColor = borderWidth = null;
        else if (borderColor!=null && borderWidth==null) borderWidth = 1;
        this.super_constructor(score, size, font, color, null, null, null, align, valign, null, null, bold, italic, variant, new Rectangle(width, height, backgroundColor, borderColor, borderWidth).centerReg({add:false}));
        this.type = "Scorer";
        var that = this;
        // if (isometric == "right" || isometric == true) that.reg(that.getBounds().width);
        Object.defineProperty(this, 'isometric', {
            get: function() {
                return isometric;
            },
            set: function(value) {
                isometric = value;
                if (isometric == true) isometric = "right";
                if (isometric) {
                    if (isometric == "left") {
                        that.ske(0,-26.5);
                    } else {
                        that.ske(0,26.5);
                    }
                } else {
                    that.ske(0,0);
                }
            }
        });
        this.isometric = isometric;
        Object.defineProperty(this, 'score', {
            get: function() {
                return score;
            },
            set: function(value) {
                that.text = score = value;
                if (that.stage) that.stage.update();
            }
        });
    }
    zim.extend(zim.Scorer, zim.Label);
            
    zim.Dialog = function(width, height, words, dialogType, tailType, fill, size, font, color, backgroundColor, borderColor, borderWidth, align, valign, corner, shadowColor, shadowBlur, padding, paddingHorizontal, paddingVertical, shiftHorizontal, shiftVertical, slantLeft, slantRight, slantTop, slantBottom, tailHorizontal, tailVertical, tailShiftHorizontal, tailShiftVertical, tailShiftAngle, arrows, arrowsInside, arrowsFlip, selectedIndex) {
        var sig = "width, height, words, dialogType, tailType, fill, size, font, color, backgroundColor, borderColor, borderWidth, align, valign, corner, shadowColor, shadowBlur, padding, paddingHorizontal, paddingVertical, shiftHorizontal, shiftVertical, slantLeft, slantRight, slantTop, slantBottom, tailHorizontal, tailVertical, tailShiftHorizontal, tailShiftVertical, tailShiftAngle, arrows, arrowsInside, arrowsFlip, selectedIndex";
        var duo; if (duo = zob(Dialog, arguments, sig, this)) return duo;
                
        if (zot(width)) width = 300;
        if (zot(height)) height = 200;      
        if (zot(dialogType)) dialogType = "slant";           
        if (zot(tailType)) tailType = "triangle";
        if (tailType == false) tailType = "none";
        if (tailType!="circles"&&tailType!="line"&&tailType!="none") tailType="triangle";        
        if (zot(tailHorizontal)) tailHorizontal = "left";
        if (zot(tailVertical)) tailVertical = "bottom";
        if (zot(tailShiftHorizontal)) tailShiftHorizontal = 0;
        if (zot(tailShiftVertical)) tailShiftVertical = 0;
        if (zot(tailShiftAngle)) tailShiftAngle = 0;
        if (zot(slantLeft)) slantLeft = -10;
        if (zot(slantRight)) slantRight = 10;
        if (zot(slantTop)) slantTop = -10;
        if (zot(slantBottom)) slantBottom = 10;          
        if (zot(fill)) fill = tailType!="none"; 
        if (zot(size)) size = 40; 
        if (zot(words)) words = ["Hello!"];
        if (!Array.isArray(words)) words = [words];                
        if (zot(corner)) corner = 0;
        if (zot(shadowColor)) shadowColor = "rgba(0,0,0,.3)";
        if (zot(shadowBlur)) shadowBlur = 10;
        if (zot(padding)) padding = 20;
        if (zot(paddingVertical)) paddingVertical = padding;
        if (zot(paddingHorizontal)) paddingHorizontal = padding;
        if (zot(font)) font = "verdana";
        if (zot(color)) color = zim.dark;
        if (zot(backgroundColor)) backgroundColor = zim.lighter;
        if (zot(borderColor)) borderColor = zim.dark;
        if (zot(borderWidth)) borderWidth = 3;
        if (borderColor==-1) borderWidth = 0;   
        if (zot(align)) align = "center";    
        if (zot(valign)) valign = "center";    
        if (zot(arrows)) arrows = true;
        if (zot(arrowsInside)) arrowsInside = false;
        if (zot(arrowsFlip)) arrowsFlip = false;
        if (zot(selectedIndex)) selectedIndex = 0;
        
        var that = this;
        that.words = words;       
        
        function makeSlant(width, height, backgroundColor) {
            var b = new zim.Shape(width, height);                          
            var adjustX = [slantLeft,slantRight,-slantRight,-slantLeft];
            var adjustY = [-slantTop,slantTop,slantBottom,-slantBottom];
            b.colorCommand = b.f(backgroundColor).command;
            b.mt(0+adjustX[0],0+adjustY[0]).lt(width+adjustX[1],0+adjustY[1]).lt(width+adjustX[2],height+adjustY[2]).lt(0+adjustX[3],height+adjustY[3]).cp();
            return b;
        }
        
        that.zimContainer_constructor(width,height);
        var bc = that.backingContainer = new zim.Container(width, height).addTo(that);
        if (dialogType == "slant") {
            this.backing = makeSlant(width, height, backgroundColor)
                .addTo(bc);  
        } else if (dialogType == "rectangle") {
            this.backing = new zim.Rectangle(width, height, backgroundColor, null, null, corner)
                .addTo(bc);
        } else if (dialogType == "poly") {
            this.backing = new zim.Poly(Math.max(width,height)/2, 12, .4, backgroundColor, null, null)
                .sca(1.3)
                .center(bc);
        } else {
            this.backing = new zim.Circle(200, backgroundColor, null, null, null, null, null, {ignoreScale:true})
                .siz(width, height)
                .center(bc);
        }       
        
        that.prev = function() {
            if (selectedIndex==0) return;
            that.selectedIndex--;  
            that.dispatchEvent("change"); 
            return that;         
        }
        that.next = function() {
            if (selectedIndex==words.length-1) return;
            that.selectedIndex++;  
            that.dispatchEvent("change");
            return that;
        }
        function makeArrows() {
            if (arrows && that.words.length > 1 && !that.arrows) {
                that.arrows = new Container(width, height).centerReg(that);
                that.arrowNext = new zim.Arrow(borderWidth>0?borderColor:backgroundColor, borderWidth>0?borderColor.lighten(.2):backgroundColor.lighten(.2)).sca(.8).pos(arrowsInside?25:-40,(dialogType=="oval"||dialogType=="poly")?0:20,RIGHT,(dialogType=="oval"||dialogType=="poly")?CENTER:arrowsFlip?TOP:BOTTOM,that.arrows).expand();
                that.arrowPrev = new zim.Arrow(borderWidth>0?borderColor:backgroundColor, borderWidth>0?borderColor.lighten(.2):backgroundColor.lighten(.2)).rot(180).sca(.8).pos(arrowsInside?25:-40,(dialogType=="oval"||dialogType=="poly")?0:20,LEFT,(dialogType=="oval"||dialogType=="poly")?CENTER:arrowsFlip?TOP:BOTTOM,that.arrows).expand();
                setArrows();
                if (arrowsFlip) that.arrows.rot(180);
                that.arrowNEvent = that.arrowNext.on("mousedown", that.next);      
                that.arrowPEvent = that.arrowPrev.on("mousedown", that.prev);            
            }      
        }
        makeArrows();     
        
        that.setWords = function(w, index) {
            if (zot(index)) selectedIndex = 0;
            that.labels = [];
            if (!Array.isArray(w)) w = [w];
            that.words = words = w;
            zim.loop(words, function(word,i) {
                that.labels[i]=new zim.Label({
                    text:word,
                    labelWidth:Math.max(10, width-paddingHorizontal*2),
                    labelHeight:fill?Math.max(10,(height-paddingVertical*2)):null,
                    color:color,
                    font:font,
                    size:size,
                    align:align,
                    valign:valign
                });
            });
            if (selectedIndex > that.labels.length-1) selectedIndex = that.labels.length-1;
            if (that.label) that.label.removeFrom();
            that.label = that.labels[selectedIndex].pos(align!="center"?paddingHorizontal:0,valign!="center"?paddingVertical:0,align,valign,that);
            makeArrows();
            if (that.arrowNext) setArrows();            
            if (that.stage) that.stage.update()
            return that;
        }
        that.setWords(words, selectedIndex);        
    
        if (valign == "top") this.label.pos(null, paddingVertical, null, "top");
        else if (valign == "bottom") this.label.pos(null, paddingVertical, null, "bottom");
        if (shiftHorizontal) this.label.mov(shiftHorizontal);
        if (shiftVertical) this.label.mov(null, shiftVertical);
        
        if (tailType == "triangle") {            
            that.tail = new zim.Triangle(200,200,90,backgroundColor,borderColor,borderWidth);                
        } else if (tailType == "line") {
            that.tail = new zim.Line(100,borderWidth>0?borderWidth:5,borderWidth>0?borderColor:backgroundColor);
        } else if (tailType == "circles") {
            that.tail = new zim.Container(90, 50);
            new zim.Circle(25, backgroundColor, borderColor, borderWidth).pos(0,0,"left","center",that.tail);
            new zim.Circle(15, backgroundColor, borderColor, borderWidth).pos(0,0,"right","center",that.tail);
        }    
        if (tailHorizontal == "center" && tailVertical == "center") tailType = "none"; 
        var tp = {
            triangle:{
                leftbottom:[5,-120,120],
                lefttop:[-50,-80,-145],
                rightbottom:[-50,-90,35],
                righttop:[-10,-130,-55],
                
                centertop:[-16,-70,-104],
                centerbottom:[16,-70,76],
                leftcenter:[-70,23,167],
                rightcenter:[-70,-18,-13]
            },
            line:{
                leftbottom:[5,-58,130],
                lefttop:[-40,-60,-140],
                rightbottom:[5,-70,45],
                righttop:[-10,-70,-45],
                
                centertop:[0,-70,90],
                centerbottom:[0,-70,90],
                leftcenter:[-70,0,0],
                rightcenter:[-70,0,0]
            },
            circles:{
                leftbottom:[5,-58,130],
                lefttop:[-10,-60,-140],
                rightbottom:[5,-70,45],
                righttop:[-10,-70,-45],
                
                centertop:[0,-70,-90],
                centerbottom:[0,-70,90],
                leftcenter:[-70,0,180],
                rightcenter:[-70,0,0]
            }
        }
        if (tailType != "none") {
            var td = tp[tailType][tailHorizontal+tailVertical]; 
            that.tail
                .rot(td[2])
                .pos(td[0],td[1],tailHorizontal,tailVertical,bc,0)
                .mov(tailShiftHorizontal, tailShiftVertical).rot(that.tail.rotation+tailShiftAngle);
        }
        
        if (borderWidth > 0 || (borderColor && borderColor != -1)) {
            if (dialogType == "slant") {
                that.backingBorder = makeSlant(width+borderWidth*2, height+borderWidth*2, borderColor)
                    .addTo(bc,0).mov(-borderWidth, -borderWidth);  
            } else {
                that.backingBorder = this.backing.clone().addTo(bc,0).mov(-borderWidth, -borderWidth)
                    .siz(this.backing.width+borderWidth*2, this.backing.height+borderWidth*2)
                if (dialogType=="poly") that.backingBorder.sca(1.3+borderWidth/50);
                that.backingBorder.center(bc,0);
                that.backingBorder.color = borderColor;
            }
        }
                
        if (shadowColor && shadowColor != -1) {
            that.underBacking = new Container(width,height).addTo(bc,0);
            var clone = that.backing.clone().addTo(that.underBacking);
            clone.borderColor = zim.clear;
            if (that.tail) {
                var bt = that.tail.clone().addTo(that.underBacking);
                bt.borderColor = zim.clear;
            }
            that.underBacking.cache(-1000,-1000,2000,2000).sha(shadowColor, 10, 10, shadowBlur);
        }
        
        function setArrows() {
            if (!that.arrowPrev) return;
            if (words.length==0) {
                that.arrowPrev.vis(false);
                that.arrowNext.vis(false);
            }
            if (selectedIndex==0) that.arrowPrev.vis(false) 
            else that.arrowPrev.vis(true);
            if (selectedIndex==words.length-1) that.arrowNext.vis(false);
            else that.arrowNext.vis(true);
        }
        
        bc.resetBounds(null,null,null,null,borderWidth+10+(shadowColor!=-1 && shadowBlur!=-1?50:0));
        
        Object.defineProperty(this, 'selectedIndex', {
            get: function() {
                return selectedIndex;
            },
            set: function(value) {
                that.label.removeFrom();
                selectedIndex = constrain(Math.floor(value), 0, words.length-1);
                that.label=that.labels[selectedIndex].pos(align!="center"?paddingHorizontal:0,valign!="center"?paddingVertical:0,align,valign,that);
                setArrows();
                if (that.stage) that.stage.update();
            }
        });
        
        Object.defineProperty(this, 'length', {
            get: function() {
                return words.length;
            },
            set: function(value) {
                
            }
        });
        
        Object.defineProperty(this, 'color', {
            get: function() {
                return color;
            },
            set: function(value) {
                color = value;
                zim.loop(that.labels, function (label) {
                    label.color = value;
                });
            }
        });
        
        Object.defineProperty(this, 'backgroundColor', {
            get: function() {
                return backgroundColor;
            },
            set: function(value) {                
                backgroundColor = value;
                if (dialogType=="slant") that.backing.colorCommand.style = value;
                else that.backing.color = value;
                if (tailType == "triangle" || tailType == "line") { 
                    that.tail.color = value;  
                } else if (tailType == "circles") {
                    that.tail.loop(function (tail) {
                        tail.color = value;
                    });                    
                }    
            }
        });
        
        Object.defineProperty(this, 'borderColor', {
            get: function() {
                return borderColor;
            },
            set: function(value) {
                if (!that.backingBorder) return; // must start with border
                borderColor = value;
                if (dialogType=="slant" && that.backingBorder) that.backingBorder.colorCommand.style = value;
                else that.backing.borderColor = value;
                if (tailType == "triangle" || tailType == "line") { 
                    that.tail.borderColor = value;  
                } else if (tailType == "circles") {
                    that.tail.loop(function (tail) {
                        tail.borderColor = value;
                    });                    
                }    
            }
        });
        
        this.clone = function() {
            return that.cloneProps(new zim.Dialog(width, height, that.words, dialogType, tailType, fill, size, font, color, backgroundColor, borderColor, borderWidth, align, valign, corner, shadowColor, shadowBlur, padding, paddingHorizontal, paddingVertical, shiftHorizontal, shiftVertical, slantLeft, slantRight, slantTop, slantBottom, tailHorizontal, tailVertical, tailShiftHorizontal, tailShiftVertical, tailShiftAngle, arrows, arrowsInside, arrowsFlip, selectedIndex));
        };
        this.dispose = function(a,b,disposing) {
            if (that.arrowNEvent) {
                that.arrowNext.off("mousedown", that.arrowNEvent);      
                that.arrowPrev.off("mousedown", that.arrowPEvent);  
            }
            if (!disposing) this.zimContainer_dispose(true); 
        }        
    }    
    zim.extend(zim.Dialog, zim.Container, ["clone","dispose"], "zimContainer", false);

    return zim;
}(zim || {});

var W = window||{};
if (!W.zns) {
    W.LeaderBoard = zim.LeaderBoard;
    W.Meter = zim.Meter;
    W.Board = zim.Board;
    W.Person = zim.Person;
    W.Orb = zim.Orb;
    W.Tree = zim.Tree;
    W.Timer = zim.Timer;
    W.Scorer = zim.Scorer;
    W.Dialog = zim.Dialog;
}

/**
 * SOCKET
 */
// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! https://zimjs.com/donate

// ZIM SOCKET - see https://zimjs.com/socket for examples and server info

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2015 (c) ZIM
// zimsocket.js provides code for multiuser sockets to share properties
// a client sends properties and receives objects of others' properties
// requires socket.io and a server running NodeJS and zimserver.js

// The Socket Module has Socket()

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See SOCKET MODULE at bottom
// ~~~~~~~~~~~~~~~~~~~~~~~~

var W = window||{};

var zim = function(zim) {

    // borrowed from ZIM in case used on its own

    var zog = console.log.bind(console);

    if (W.zon) zog("ZIM SOCKET Module");

    function zot(v) {
        if (v === null) return true;
        return typeof v === "undefined";
    }

    zim.merge = function() {
        var obj = {}; var i; var j;
        for (i=0; i<arguments.length; i++) {
            for (j in arguments[i]) {
                if (arguments[i].hasOwnProperty(j)) {
                    obj[j] = arguments[i][j];
                }
            }
        }
        return obj;
    }

    zim.copy = function(obj) {
        if (obj==null || typeof obj != 'object') return obj;
        if (obj instanceof Array) {
            return obj.slice(0);
        }
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = zim.copy(obj[attr]);
            }
            return copy;
        }
    }

    zim.EventDispatcher = function(target) {
        this.listeners = {};
        this.target = target;
        var that = this;
        this.addEventListener = function (type, listener) {
            if (!that.listeners[type]) {
                that.listeners[type] = [];
            }
            that.listeners[type].push(listener);
        }
        this.removeEventListener = function (type, listener) {
            var listenList = that.listeners[type];
            for (var i=0; i<listenList.length; i++) {
                if (listenList[i] === listener) {
                    listenList.splice(i, 1);
                }
            }
        }
        this.removeAllEventListeners= function() {
            this.listeners = {};
        }
        this.dispatchEvent = function (type, params) {
            var listenList = that.listeners[type];
            var success = false;
            if (listenList) {
                for (var i=0; i<listenList.length; i++) {
                    try {
                        listenList[i].call(that, params);
                        success = true;
                    } catch (e) {
                        zog("ZIM DispatchEvent() error: " + type + " " + e);
                    }
                }
            }
            return success;
        }
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.offAll = this.removeAllEventListeners;
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ZIM SOCKET CODE

    zim.Socket = function(server, appName, roomName, maxPeople, fill, initObj) {

        zim.EventDispatcher.call(this, this);

        if (zot(server)) server = this.server = "http://localhost:3000/";
        if (zot(appName) || appName == "") {zog("zim socket - Socket():\nmust provide app name"); return;}

        this.ready = false;
        var that = this;
        var noSocket = "zim socket - Socket(): sorry no socket";
        var socket;
        var data;
        var historyString;
        var current; // {id:{id:"a2s2d24fa2sd", x:20, y:30}, id2:{id2:831kh4597kh, x:22, y:66}}
        var last;  // {id:lastUpdaterID, properties:{text:[id,"hi"], x:[id2,100], y:[id3,"10"]}}
        var my; // {id:"asfwer3231dsa", x:22, y:44, text:"cool"}

        function connect() {
            socket = that.socket = io.connect(server);
        }
        connect();
        socket.on("connect", function() {
            addEventListeners();
            joinRoom(appName, roomName, maxPeople, fill, initObj);
        });

        function addEventListeners() {
            socket.on("join", join);
            socket.on("receive", receive);
            socket.on("time", time);
            socket.on("sync", sync);
            socket.on("otherleave", otherLeave);
            socket.on("connect_error", connectError);
            socket.on("disconnect", disconnect);
        }

        function joinRoom(appName, roomName, maxPeople, fill, initObj) {
            if (zot(appName) || appName == "") {zog("zim socket - Socket():\nmust provide app name"); return;}
            appName = that.applicationName = appName.replace(/\s/, "").toLowerCase();
            if (roomName) {that.roomName = roomName.replace(/\s/, "").toLowerCase();} // can be null
            if (zot(maxPeople)) maxPeople = that.maxPeople = 0;
            if (zot(fill)) fill = that.fill = true; // fills in room if people leave

            data = {appName:appName, roomName:roomName, maxPeople:maxPeople, fill:fill, initObj:initObj};
            my = initObj || {};
            socket.emit('join', data);
        }


        // --------------    EVENTS   ---------------

        function join(data) {
            // event when this person joins a room
            that.masterTime = data.masterTime;
            that.joinTime = data.joinTime;
            historyString = data.history;
            last = data.last;
            current = data.current;
            that.id = my.id = data.id;
            if (!that.ready) {
                that.dispatchEvent("ready", current);
                that.ready = true;
            } else {
                that.dispatchEvent("roomchange", current);
            }
        }

        function receive(data, type) {
            // event for receiving data from another person
            var id = that.senderID = data.id;
            // update current values
            current[id] = zim.merge(current[id], data);
            // update last information (responsible for keeping last up to date)
            last.id = id;
            for (var i in data) {
                last.properties[i] = [id, data[i]];
            }
            if (type == "message") {
                that.dispatchEvent("data", data); // for other people's
            } else if (type == "join") {
                that.lastJoinID = id;
                that.dispatchEvent("otherjoin", data);
            }
        }

        function time(data) {
            // event for receiving time (masterTime and currentTime)
            data.joinTime = that.joinTime;
            that.dispatchEvent("time", data);
        }

        function sync(data) {
            // event for syncing data
            that.masterTime = data.masterTime;
            that.joinTime = data.joinTime;
            historyString = data.history;
            last = data.last;
            current = data.current;
            that.id = my.id = data.id;
            that.dispatchEvent("sync", data);
        }

        function otherLeave(id) {
            // event when another person leaves the room
            that.lastLeaveID = id;
            that.dispatchEvent("otherleave", current[id]);
            // data is removed as other leaves so update current and last
            // after we dispatch otherleave event to give chance to see their data
            delete current[id];
            // note, the leaving client's id is still kept in the last data
        }

        function connectError() {
            that.ready = false;
            that.dispatchEvent("error");
            removeEventListeners();
        }

        function disconnect() {
            zog("disconnect");
            that.ready = false;
            that.dispatchEvent("disconnect");
            removeEventListeners();
        }

        W.onbeforeunload = function (e) {
            that.ready = false;
            that.dispatchEvent("disconnect");
            removeEventListeners();
        }


        // --------------    MISC   ---------------

        function removeEventListeners() {
            socket.removeEventListener("receive", receive);
            socket.removeEventListener("join", join);
            socket.removeEventListener("time", time);
            socket.removeEventListener("sync", sync);
            socket.removeEventListener("otherleave", otherLeave);
            socket.removeEventListener("connect_error", connectError);
            socket.removeEventListener("disconnect", disconnect);
        }

        // various socketio connect errors are not firing for me
        var connectionTries = 0;
        var timer = W.setInterval(function() {
            if (socket.connected) {
                W.clearInterval(timer);
            } else {
                connectionTries++;
                if (connectionTries > 4) {
                    W.clearInterval(timer);
                    that.dispatchEvent("error");
                    socket.disconnect();
                } else {
                    connect();
                }
            }
        }, 1000);


        // --------------    PROPERTIES   ---------------

        Object.defineProperty(this, 'history', {
            get: function() {
                return historyString;
            },
            set: function(value) {
                zog("zim socket - Socket(): history is read only (try appendToHistory() and clearHistory() methods)");
            }
        });

        Object.defineProperty(this, 'size', {
            get: function() {
                var count = 0;
                for (var i in current) count++;
                return count;
            },
            set: function(value) {
                zog("zim socket - Socket(): size is read only (perhaps see maxPeople)");
            }
        });


        // --------------    METHODS   ---------------

        this.changeRoom = function(appName, roomName, maxPeople, fill, initObj) {
            joinRoom(appName, roomName, maxPeople, fill, initObj);
            // will trigger a ZIM Socket ready event for this client
            // will trigger a ZIM Socket otherleave and otherjoin events for other clients
        }

        this.requestTime = function() {
            socket.emit('time'); // will trigger a ZIM Socket time event
        }

        this.requestSync = function() {
            socket.emit('sync'); // will trigger a ZIM Socket sync event
        }

        // SETTING YOUR PROPERTIES

        this.setProperty = function(propertyName, propertyValue) {
            if (!socket) {zog(noSocket); return;}
            if (zot(propertyName)) {zog("zim socket - Socket.setProperty(): please enter property name"); return;}
            var object = {};
            object[propertyName] = propertyValue;
            my[propertyName] = propertyValue;
            socket.emit('message', object);
            // will trigger a ZIM Socket data event for other clients in the room
        }

        this.setProperties = function(object) {
            if (!socket) {zog(noSocket); return;}
            if (zot(object) || typeof object !== 'object' || Array.isArray(object)) {zog("zim socket - Socket.setProperties(): please enter object of properties"); return;}
            my = zim.merge(my, object);
            socket.emit('message', object);
            // will trigger a ZIM Socket data event for other clients in the room
        }

        // GETTING PROPERTIES AND PROPERTY OBJECTS

        this.getMyProperty = function(propertyName) {
            // gets your own value for property name
            return my[propertyName];
        }

        this.getMyData = function() {
            // gets your own data object
            return my;
        }

        this.getOtherProperty = function(id, propertyName) {
            // gets another client's value for property name
            if (!current[i]) return;
            return current[id][propertyName];
        }

        this.getOtherData = function(id) {
            // gets another client's object of properties
            return current[i];
        }

        this.getSenderProperty = function(propertyName) {
            // gets sender client's value for property name
            if (!that.senderID) return;
            if (!current[that.senderID]) return;
            return current[that.senderID][propertyName];
        }

        this.getSenderData = function() {
            // gets sender client's object of properties
            if (!that.senderID) return;
            return current[that.senderID];
        }

        this.getProperties = function(propertyName) {
            // returns a array of values for the propertyName of others - for x we might get [12, 14, 33, etc.]
            if (zot(propertyName)) return;
            var list = []; var val;
            for (var i in current) {
                val = current[i][propertyName];
                if (val) list.push(val);
            }
            return list;
        }

        this.getData = function() {
            // returns object of all client data (not own)
            return current;
        }


        // LATEST

        this.getLatestValue = function(propertyName) {
            // gets latest value of a property
            if (zot(last.properties[propertyName])) return undefined;
            return last.properties[propertyName][1];
        }
        
        this.getLatestTime = function(propertyName) {
            // gets latest time of a property
            if (zot(last.properties[propertyName])) return undefined;
            return last.properties[propertyName][2];
        }

        this.getLatestValueID = function(propertyName) {
            // gets id of latest updater for a property
            if (zot(last.properties[propertyName])) return undefined;
            return last.properties[propertyName][0];
        }

        this.getLatestProperties = function() {
            // gets an array of the last properties (names) sent - could be one or more
            var list = [];
            for (var property in last.properties) {
                if (last.properties[property][0] == last.id) {
                    list.push(property);
                }
            }
            return list;
        }

        // HISTORY

        this.appendToHistory = function(someText) {
            // sends text to be stored on history
            // need to send \n as well if desired
            // only used for new people to join
            if (!socket) {zog(noSocket); return;}
            socket.emit('history', someText);
        }

        this.clearHistory = function() {
            if (!socket) {zog(noSocket); return;}
            historyString = "";
            socket.emit('clearhistory');
        }

        // TO DISCONNECT

        this.dispose = function() {
            socket.disconnect();
            removeEventListeners();
            current = null;
            last = null;
            // will trigger a ZIM Socket otherleave event for other clients in the room
        }

    }
    zim.Socket.prototype = new zim.EventDispatcher();
    zim.Socket.prototype.constructor = zim.Socket;

    return zim;
}(zim || {});

if (!W.zns) W.Socket = zim.Socket;