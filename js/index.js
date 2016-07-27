var Monsterarmor;

var Monsters = ["<img src='../assets/ogre.png> Ogre",
"<img src='../assets/giant.png> Giant",
"<img src='../assets/theif.png> Theif"
]

var Difattacks = [" Threw a rock", " Threw a stick", " Threw a thorn", " Threw a piece of wood", " Threw air"]

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
	MonsterHp = Math.floor(Math.random()*20);
	console.log("A "+ Monsters[Badguys] +" Spawned!");
	document.getElementById('monsterresult').innerHTML = "A " + Monsters[Badguys] + " Spawned!";
	document.getElementById('monsterarea').innerHTML = Monsters[Badguys];
};

function dodgehit() {
	Dodge = Math.floor(Math.random()*16);
	Monsteratk = Math.floor(Math.random()*6);
	Morearmor = Math.floor(Math.random()*16)
if (Dodge >= 5) {
	console.log("monster missed")
	document.getElementById('playerresult').innerHTML = "You dodged your opennets attack";
	document.getElementById('monsterresult').innerHTML = "";
} if (Morearmor >= 10) {
	console.log("You found "+ Morearmor + " more Armor and dodged the your opennet")
	document.getElementById('monsterresult').innerHTML = ""
	document.getElementById('playerresult').innerHTML = "You found "+ Morearmor + " more pieces of Armor and dodged the your opennet"
} else {
	console.log(Armor = Monsteratk - Armor);
	Armor = Monsteratk - Armor;
	document.getElementById('monsterresult').innerHTML = "";
	document.getElementById('playerresult').innerHTML = "The monster got to you before you dodged. Now Armor is at " + Armor;
}

};

function attack() {
	var Multiatk = Math.floor(Math.random()*Difattacks.length);
	Atkpower = Math.floor(Math.random()*6);
	Monsteratk = Math.floor(Math.random()*6);
	if (Difattacks[Multiatk] = 4) {
		Armor = Monsteratk - Armor;
		console.log("You threw air LOL!")
		document.getElementById('monsterresult').innerHTML = "You threw air... LOLLLLLL!!!!"
	} if (Atkpower >= 4) {
		console.log("You did no damage")
		document.getElementById('monsterresult').innerHTML = "You did no damge like it was air... LOLLLLLL!!!"
	}if (MonsterHp = 0) {
		console.log("You Killed the Your opennet!");
		document.getElementById('monsterresult').innerHTML = "You Killed the Your opennet!";
	} if (Badarmor = 0) {
		console.log("Your opennet has no more Armor");
		document.getElementById('monsterresult').innerHTML = "Your opennet has no more Armor! And ran away.";
} if (Armor = 0) {
	console.log("You have no more Armor");
	document.getElementById('playerresult').innerHTML = "You have no more Armor"; 
} else {
	console.log(Armor = Armor - Monsteratk);
	Badarmor = Badarmor - Atkpower;
	Armor = Armor - Monsteratk;
	console.log("Attack was "+ Difattacks[Multiatk]);
	console.log("Armor now is "+ Armor);
	console.log("Monsterarmor now is "+ Badarmor);
	console.log("Attack did "+ Atkpower);
	console.log("Your opennet Attack did "+ Monsteratk);
	document.getElementById('playerresult').innerHTML = "You "+ Difattacks[Multiatk] +" Your opennet did "+ Monsteratk +" Your Armor is now " +Armor;
	document.getElementById('monsterresult').innerHTML = "You did "+ Atkpower + " Your opennet Armor is now at "+Badarmor;
	}
};

function special() {
	Slingshot = Math.floor(Math.random()*16)
	Sword = Math.floor(Math.random()*16)
	if (Sword ) {}
}