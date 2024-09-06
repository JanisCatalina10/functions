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

const purpleCube = document.createElement('div');
const grayCube = document.createElement('div');
const brownCube = document.createElement('div');

document.addEventListener('keydown', event => {
    switch(event.key){
        case 'q':
            purpleCube.style.backgroundColor = "purple";
            purpleCube.style.width = "200px";
            purpleCube.style.height = "200px";
            purpleCube.style.margin = "20px";
            break;
            case 'w':
                grayCube.style.backgroundColor = "gray";
                grayCube.style.width = "200px";
                grayCube.style.height = "200px";
                purpleCube.style.margin = "20px";
                break;
                case 'e':
                brownCube.style.backgroundColor = "brown";
                brownCube.style.width = "200px";
                brownCube.style.height = "200px";
                purpleCube.style.margin = "20px";
                break;
    }
})
document.body.appendChild(purpleCube);
document.body.appendChild(grayCube);
document.body.appendChild(brownCube);




