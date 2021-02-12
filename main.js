canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

player = "";
block = "";

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player);
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block = Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block);
    });
}

window.addEventListener("keydown" ,my_keydown );

function my_keydown(e){
    Key_ASCII = e.keyCode;
    console.log(Key_ASCII);

    if(e.shiftKey == true && Key_ASCII == '80'){
        console.log("Shift+p clicked.");

        block_width = block_width + 10;
        block_height = block_height + 10;

        document.getElementById("Current_Width").innerHTML = block_width;
        document.getElementById("Current_Height").innerHTML = block_height;
    }

    if (e.shiftKey == true && Key_ASCII == '77'){
        console.log("Shift+m clicked.");

        block_width = block_width- 10;
        block_height = block_height - 10;

        document.getElementById("Current_Width").innerHTML = block_width;
        document.getElementById("Current_Height").innerHTML = block_height;
    }

    if (Key_ASCII == '38'){
        up();
        console.log("Up key is pressed");
    }

    if (Key_ASCII == '40'){
        down();
        console.log("Down key is pressed");
    }

    if (Key_ASCII == '37'){
        left();
        console.log("Left key is pressed");
    }

    if (Key_ASCII == '39'){
        right();
        console.log("Right key is pressed");
    }




    if(Key_ASCII == '87'){
        newImage("wall.jpg");
        console.log("w is pressed");
    }

    if(Key_ASCII == '71'){
        newImage("ground.png");
        console.log("g is pressed");
    }

    if(Key_ASCII == '76'){
        newImage("light_green.png");
        console.log("l is pressed");
    }

    if(Key_ASCII == '84'){
        newImage("trunk.jpg");
        console.log("t is pressed");
    }

    if(Key_ASCII == '82'){
        newImage("roof.jpg");
        console.log("r is pressed");
    }

    if(Key_ASCII == '89'){
        newImage("yellow_wall.png");
        console.log("y is pressed");
    }

    if(Key_ASCII == '68'){
        newImage("dark_green.png");
        console.log("d is pressed");
    }

    if(Key_ASCII == '67'){
        newImage("cloud.jpg");
        console.log("c is pressed");
    }

    if(Key_ASCII == '85'){
        newImage("unique.png");
        console.log("u is pressed");
    }
}

function up(){
    if (player_y > 0){
        player_y = player_y - block_height;
        console.log("Block Image Height " + block_height);
        console.log("Up arrow is clicked. x = " + player_x + ". y = " + player_y);
        canvas.remove(player);
        player_update();
    }
}

function down(){
    if (player_y <= 500){
        player_y = player_y + block_height;
        console.log("Block Image Height " + block_height);
        console.log("Down arrow is clicked. x = " + player_x + ". y = " + player_y);
        canvas.remove(player);
        player_update();
    }
}

function left(){
    if (player_x > 0){
        player_x = player_x - block_width;
        console.log("Block Image Width " + block_width);
        console.log("Left arrow is clicked. x = " + player_x + ". y = " + player_y);
        canvas.remove(player);
        player_update();
    }
}

function right(){
    if (player_x <= 850){
        player_x = player_x + block_width;
        console.log("Block Image Width " + block_width);
        console.log("Left arrow is clicked. x = " + player_x + ". y = " + player_y);
        canvas.remove(player);
        player_update();
    }
}