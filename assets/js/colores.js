function defaultCube(elementId, initialColor, clickColor){
    const cube = document.getElementById(elementId);
            cube.style.backgroundColor = initialColor;
            cube.style.width = "200px";
            cube.style.height = "200px";
            
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
    whiteCube.style.width = "200px"
    whiteCube.style.height = "200px"
}
applyDefaultStyles();


