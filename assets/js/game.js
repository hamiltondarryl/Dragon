
let scene = new Phaser.Scene("game");

let config = {
    type : Phaser.AUTO,
    width : 800,
    height : 600,
    scene : scene
}


let game = new Phaser.Game(config);

// Configuration des variables de jeu(vie, score, time, vitesse)
scene.init = function () {

    this.score = 0;
    this.lives = 3;
    this.speed = 1.5;
    this.dragon_move = 1;

};

// Chargement des assets du jeux
scene.preload = function() {

    this.load.image("bg", "assets/img/background/background.png");
    this.load.image("dragon", "assets/img/dragon/dragon.png");
    this.load.image("icon", "assets/img/icons/icon.png");
    this.load.image("player", "assets/img/player/player.png");
    
};

// Configuration des assets du jeux (tailles, positions , animations ......)
scene.create = function() {

    //Ajout du background 
    var bg = this.add.sprite(0 , 0, "bg");
    bg.setOrigin(0,0);

    //Ajout des textes
    this.score_text = this.add.text(10, 10, "Score : " + this.score, {fontSize : "20px", fill : "#000"})
    this.lives_text = this.add.text(16, this.sys.game.config.height -50, "Lives : " + this.lives, {fontSize : "20px", fill : "#000"})

    //Ajout du joueur
    this.player = this.add.sprite(100, 130, 'player');
    this.player.setScale(0.3);

    //Ajout du dragon
    this.dragon = this.add.sprite(300, 200, "dragon");
    this.dragon.setScale(0.5);

    //Ajout de l'icon 
    this.icon = this.add.sprite(200, 300, "icon");
    this.icon.setScale(0.5)


    console.log(this.input.keyboard.on());

};


// Mise à jour des action qui s'active 60 fois par seconde 
scene.update = function() {
    
    
};

// Initialisation et creation du jeu
scene.end = function() {
  
    
};
