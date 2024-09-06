function defaultCube(elementId, initialColor, clickColor){
    const cube = document.getElementById(elementId);
            cube.style.backgroundColor = initialColor;
            cube.style.width = "200px";
            cube.style.height = "200px";
            cube.style.margin = "20px";
            
            cube.addEventListener("click", () => {
                cube.style.backgroundColor = clickColor;
            });
        }
        defaultCube("cube1", "blue", "black");
        defaultCube("cube2", "red", "black");
        defaultCube("cube3", "green", "black");
        defaultCube("cube4", "yellow", "black");



//CUBO BLANCO QUE CAMBIA DE COLOR
const whiteCube = document.getElementById("border-cube");
function applyDefaultStyles() {
    whiteCube.style.backgroundColor = "white"; 
    whiteCube.style.border = `2px solid black`;
    whiteCube.style.width = "200px";
    whiteCube.style.height = "200px";
    whiteCube.style.margin = "20px";

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
            whiteCube.style.backgroundColor = "pink";
            } else if (event.key === 's') {
                whiteCube.style.backgroundColor = "orange";
            } else if (event.key === 'd') {
                whiteCube.style.backgroundColor = "lightblue" ;
            }
    })
}
applyDefaultStyles();



//CREACION DE NUEVOS CUBOS
function createCube(color) {
    const cube = document.createElement('div');
    cube.style.backgroundColor = color;
    cube.style.width = "200px";
    cube.style.height = "200px";
    cube.style.margin = "20px";
    return cube;
}

document.addEventListener('keydown', event => {
    let newCube;

    switch(event.key){
        case 'q':
            newCube = createCube("purple"); 
            break;
        case 'w':
            newCube = createCube("gray"); 
            break;
        case 'e':
            newCube = createCube("brown"); 
            break;
    }


    if (newCube) {
        document.body.appendChild(newCube);
    }
});

