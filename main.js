var canvas = new fabric.Canvas("myCanvas");

block_y= 1;
block_x= 1;

image_width = 350;
image_height = 430;

var image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
        image_object = Img;
        image_object.scaleToHeight(image_height);
        image_object.scaleToWidth(image_width);
        image_object.set({
            top:block_y,
            left:block_x
        });
    });
    canvas.add(image_object);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x = 0;
		new_image("rr1.png");
		console.log("Red ranger!");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png");
		console.log("Green ranger!");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");
		console.log("Yellow ranger!");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");
		console.log("Pink ranger!");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png");
		console.log("Blue ranger!");
	}
	
}

