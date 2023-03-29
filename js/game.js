function Game() {
    this.timeLeft = setInterval(this.updateTimer, 5000);
    this.key = 0;
    this.level = 1;
    this.obstacles = [];
    this.chests = [];
    this.chestKey = Math.floor(Math.random() * 3);

    //elementos principales en el menu
    this.menu = document.getElementById('menu');
    this.level = document.getElementById('level');
    this.container = document.getElementById('container')
    this.game = document.getElementById('game');
    this.credits = document.getElementById('credits');
}

Game.prototype.start = function () {
    console.log('inicio')
    //quita menu y cambia el fondo del contenedor
    this.menu.style.display = "none";
    this.container.style.background = "black"
    //muestra el juego y el nivel
    this.game.style.display = "flex"
    this.level.style.display = "block"


    //Iniciado el juego, a los dos segundos inicia el juego
    setTimeout(() => {
        this.play();
    }, 2000);
}

Game.prototype.play = function () {
    //hide level div
    this.level.style.display = "none";

    //NEW CHARACTER 
    let jhonny = new Character();
   /*  updateTimer(); */

    //TREES
    this.obstacles.push(new Obstacles(115, 85, 85, 240));
    this.obstacles.push(new Obstacles(155, 370, 85, 135));
    this.obstacles.push(new Obstacles(95, 505, 75, 125));
    this.obstacles.push(new Obstacles(370, 10, 130, 115));
    this.obstacles.push(new Obstacles(495, 120, 150, 130));
    this.obstacles.push(new Obstacles(365, 405, 30, 30));
    this.obstacles.push(new Obstacles(400, 580, 220, 70));
    this.obstacles.push(new Obstacles(405, 645, 75, 50))

    //WATER
    this.obstacles.push(new Obstacles(205, 165, 70, 160));
    this.obstacles.push(new Obstacles(455, 315, 140, 135));

    //CHESTS
    this.chests = document.querySelectorAll(".pokeClose");

    //EXIT

    //-------LISTENER KEY
    window.addEventListener('keydown', function (e) {
        jhonny.updateCharacterPosition(e.code);
        console.log(jhonny.pos.x);
        console.log(jhonny.pos.y);
    });
};

Game.prototype.nextLevel = function () {
    this.obstacles = [];
    this.key = 0;
    this.obstacles = [];
    this.chests = [];

    if (this.level === 2) {
        //CHANGES BG
        document
            .querySelector("#board>img")
            .setAttribute("src", "./img/level2.png");
    }
}

//TIMER IN PROGRESS ( NOT WORKING)
/* Game.prototype.updateTimer = function () {
    this.timeLeft --;
    if (timeLeft >= 0)
        document
            .getElementById("countdown")
            .innerText(this.timeLeft);
    else {
        gameOver();
    }
}

Game.prototype.gameOver = function () {
    // This cancels the setInterval, so the updateTimer stops getting called
    cancelInterval(timer);
} */

