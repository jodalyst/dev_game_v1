
SIZE_SCALAR = 1;

window.onload = function any_function_name()
{

//this.renderer = PIXI.autoDetectRenderer(845, 451, { antialias: false, transparent: true });
//this.renderer.roundPixels = true; //and this too

PIXI.settings.PRECISION_FRAGMENT = 'highp'; //this makes text looks better
var app = new PIXI.Application(800, 600, { antialias: true ,backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

for (var i = 0; i < 10; i++) {
    createUnit(Math.floor(Math.random() * app.renderer.width), Math.floor(Math.random() * app.renderer.height),i,Math.floor(Math.random()*120), app);
}

};


function createUnit(x, y,number,strength,app) {
    var container = new PIXI.Container();
    app.stage.addChild(container);
    var unit = new PIXI.Graphics();
    var health = 100;
    unit.lineStyle(0,0x0000FF,0);
    unit.beginFill(0x0000FF,1);
    unit.drawRect(x,y,strength*SIZE_SCALAR,5);
    unit.interactive = true;
    unit.buttonMode = true;
    var unitText = new PIXI.Text(number);
    unitText.x = x+strength*0.5*SIZE_SCALAR;
    unitText.y = y;
    container.addChild(unit);
    container.addChild(unitText);
}


//Overall game ideas:

/*Starting Screen:

Each unit has a commander, second in command, number of NCOs and 

You assign a certain number of runners:


Your interface is mostly watching the battle, but also sending commands.

The commands involve "notes"...of a structure like the following:

Company B
Fall Back 

Becomes a management issue (you start with one unit)...

* Get five soldiers to come back and get ammunition (have to time it right)
* as you get more you can't just 

Eventually go to multiplayer. (really long time from now).



