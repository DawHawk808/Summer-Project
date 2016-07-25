var Monsterarmor;

var Monsters = ["<img src='../assets/ogre.png> Ogre",
"<img src='../assets/giant.png> Giant",
"<img src='../assets/theif.png> Theif"
]

var PlayerHP = 1;

var Difattacks = [" Threw a rock", " Threw a stick", " Threw a thorn", " Threw a piece of wood"]

var Sword;
var Slingshot;

var Armor = 125;
var Badarmor;
var Morearmor;

var Atkpower;
var Monsteratk;

var Dodge;

function newmonster() {
	var Badguys = Math.floor(Math.random()*Monsters.length);
	Badarmor = Math.floor(Math.random()*100);
	console.log("A "+ Monsters[Badguys] +" Spawned!");
	document.getElementById('monsterresult').innerhtml = "A " + Monsters[Badguys] + " Spawned!";
	document.getElementById('monsterarea').innerhtml = Monsters[Badguys];
};

function dodgehit() {
	var Miss = Math.floor(Math.random()*11);
if (var Dodge > 5) {
	console.log("monster missed")
	document.getElementById('playerresult').innerhtml = "You dodge the monsters attack";
} else {
	document.getElementById('playerresult').innerhtml = "The monster got to you before you dodged";
}

};

function attack() {
	var Multiatk = Math.floor(Math.random()*Difattacks.length);
	Atkpower = Math.floor(Math.random()*11);
	Monsteratk = Math.floor(Math.random()*6);
	if (var PlayerHP = 0) {}
};