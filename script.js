// 
var character_width = 22;
var character_height = 50;

var obstacle_width = 40;
var obstacle_height = 40;

var jump_time = 500;
// var obstacle_time = 1;

// 

var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var counter = 0;

function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, jump_time);
}

var checkDead = setInterval(function () {
    let characterBottomPoint = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let obstacleLeftPoint = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeftPoint < character_width && obstacleLeftPoint > (-obstacle_width) && characterBottomPoint <= obstacle_height) {
        obstacle.style.animation = "none";
        alert("Game Over. Score: " + Math.floor(counter / 100));
        counter = 0;
        obstacle.style.animation = "block var(--obstacle-time) infinite linear"; //Continue the game after game over
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }

}, 10);