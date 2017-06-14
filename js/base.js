
SIZE_SCALAR = 1;

window.onload = function any_function_name()
{
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

