var Monsterarmor;

var Monsters = ["<img src='../assets/ogre.png> Ogre",
"<img src='../assets/giant.png> Giant",
"<img src='../assets/theif.png> Theif"
]

var PlayerHP = 1;

var Difattacks = ["Threw a rock", "Threw a stick"]

var Sword;
var Slingshot;

var armor = 175;
var badarmor;
var morearmor;

var atkpower;
var monsteratk;

function newmonster() {
	var badguys = Math.floor(Math.random()*Monsters.length);
	var badarmor = Math.floor(Math.random()*200);
	console.log("A "+ Monsters[badguys] +" Spawned!")
	document.getElementById('monsterresult').innerhtml = "A " + Monsters[badguys] + " Spawned!"
}