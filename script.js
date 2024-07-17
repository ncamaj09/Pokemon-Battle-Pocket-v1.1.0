document.addEventListener('DOMContentLoaded', () => {
    const playerHPElement = document.getElementById('player-hp');
    const playerLevelElement = document.getElementById('player-level');
    const playerDefenseElement = document.getElementById('player-defense');
    const playerSpAtkElement = document.getElementById('player-sp-atk');
    const playerSpDefElement = document.getElementById('player-sp-def');
    const playerSpeedElement = document.getElementById('player-speed');
    const opponentHPElement = document.getElementById('opponent-hp');
    const opponentLevelElement = document.getElementById('opponent-level');
    const opponentDefenseElement = document.getElementById('opponent-defense');
    const opponentSpAtkElement = document.getElementById('opponent-sp-atk');
    const opponentSpDefElement = document.getElementById('opponent-sp-def');
    const opponentSpeedElement = document.getElementById('opponent-speed');
    const playerImage = document.querySelector('.player .pokemon-image');
    const playerName = document.querySelector('.player .pokemon-name');
    const opponentImage = document.querySelector('.opponent .pokemon-image');
    const opponentName = document.querySelector('.opponent .pokemon-name');
    const winsElement = document.getElementById('wins');
    const lossesElement = document.getElementById('losses');

    let wins = 0;
    let losses = 0;

    // Sound file names
    const soundFiles = {
        Fire: 'fire.mp3',
        Water: 'water.mp3',
        Grass: 'grass.mp3',
        Electric: 'electric.mp3',
        Normal: 'normal.mp3',
        Dragon: 'dragon.mp3',
        Dark: 'dark.mp3',
        Steel: 'steel.mp3',
        Ground: 'ground.mp3',
        Poison: 'poison.mp3',
        Ghost: 'ghost.mp3',
        Psychic: 'psychic.mp3',
        Fairy: 'fairy.mp3',
        Bug: 'bug.mp3',
        Ice: 'ice.mp3',
        Fighting: 'fighting.mp3',
        Rock: 'rock.mp3',
        Flying: 'flying.mp3'
    };

    const pokemonList = [
        {
            name: 'Charizard',
            image: 'charizard.png',
            baseHP: 78,
            type: 'Fire',
            moves: [
                { name: 'Flamethrower', damage: 40, type: 'Fire', accuracy: 100 },
                { name: 'Slash', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Fire Spin', damage: 20, type: 'Fire', accuracy: 85 },
                { name: 'Dragon Claw', damage: 50, type: 'Dragon', accuracy: 90 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 78, spAtk: 109, spDef: 85, speed: 100 }
        },
        {
            name: 'Blastoise',
            image: 'blastoise.png',
            baseHP: 79,
            type: 'Water',
            moves: [
                { name: 'Hydro Pump', damage: 40, type: 'Water', accuracy: 80 },
                { name: 'Bite', damage: 30, type: 'Dark', accuracy: 100 },
                { name: 'Water Gun', damage: 20, type: 'Water', accuracy: 100 },
                { name: 'Skull Bash', damage: 50, type: 'Normal', accuracy: 75 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 100, spAtk: 85, spDef: 105, speed: 78 }
        },
        {
            name: 'Mega Venusaur',
            image: 'venusaur_1.png',
            baseHP: 80,
            type: 'Grass',
            moves: [
                { name: 'Solar Beam', damage: 40, type: 'Grass', accuracy: 100 },
                { name: 'Tackle', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Vine Whip', damage: 20, type: 'Grass', accuracy: 100 },
                { name: 'Earthquake', damage: 50, type: 'Ground', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 123, spAtk: 122, spDef: 120, speed: 80 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {

    name: 'Bulbasaur',
            image: 'Bulbasaur.png',
            baseHP: 45,
            type: 'Grass',
            moves: [
                { name: 'Sleep Powder', damage: 75, type: 'Grass', accuracy: 75 },
                { name: 'Tackle', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Razor Leaf', damage: 55, type: 'Grass', accuracy: 95 },
                { name: 'Seed Bomb', damage: 80, type: 'Grass', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 49, spAtk: 65, spDef: 65, speed: 45 }
        },
        {

name: 'Ivysaur',
            image: 'Ivysaur.png',
            baseHP: 60,
            type: 'Grass',
            moves: [
                { name: 'Poison Powder', damage: 75, type: 'Poison', accuracy: 75 },
                { name: 'Take Down', damage: 90, type: 'Normal', accuracy: 85 },
                { name: 'Worry Seed', damage: 100, type: 'Grass', accuracy: 100 },
                { name: 'Growth', damage: 0, type: 'Grass', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 63, spAtk: 80, spDef: 80, speed: 60 }
        },
        {

name: 'Charmander',
            image: 'Charmander.png',
            baseHP: 39,
            type: 'Fire',
            moves: [
                { name: 'Scratch', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Ember', damage: 40, type: 'Fire', accuracy: 100 },
                { name: 'Fire Fang', damage: 65, type: 'Fire', accuracy: 95 },
                { name: 'Smokedcreen', damage: 0, type: 'Normal', accuracy: 100 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 43, spAtk: 60, spDef: 50, speed: 65 }
        },
        {
            name: 'Venusaur',
            image: 'venusaur.png',
            baseHP: 80,
            type: 'Grass',
            moves: [
                { name: 'Solar Beam', damage: 40, type: 'Grass', accuracy: 100 },
                { name: 'Tackle', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Vine Whip', damage: 20, type: 'Grass', accuracy: 100 },
                { name: 'Earthquake', damage: 50, type: 'Ground', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 83, spAtk: 100, spDef: 100, speed: 80 }
        },
        {
            name: 'Charmeleon',
            image: 'charmeleon.png',
            baseHP: 58,
            type: 'Fire',
            moves: [
                { name: 'Swift', damage: 60, type: 'Normal', accuracy: 70 },
                { name: 'Flame Charge', damage: 50, type: 'Fire', accuracy: 100 },
                { name: 'Brick Break', damage: 75, type: 'Fighting', accuracy: 100 },
                { name: 'Rock Slide', damage: 75, type: 'Rock', accuracy: 90 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 58, spAtk: 80, spDef: 65, speed: 80 }
        },
        {
            name: 'Mega Charizard X',
            image: 'charizard_1.png',
            baseHP: 78,
            type: 'Dragon',
            moves: [
                { name: 'Dragon Breath', damage: 60, type: 'Dragon', accuracy: 100 },
                { name: 'Inferno', damage: 100, type: 'Fire', accuracy: 50 },
                { name: 'Fire Spin', damage: 20, type: 'Fire', accuracy: 85 },
                { name: 'Dragon Claw', damage: 50, type: 'Dragon', accuracy: 90 }
            ],
            weakness: 'Fairy',
            resistance: 'Dark',
            baseStats: { defense: 111, spAtk: 130, spDef: 85, speed: 100 }
        },
        {
            name: 'Mega Charizard Y',
            image: 'charizard_2.png',
            baseHP: 78,
            type: 'Fire',
            moves: [
                { name: 'Flamethrower', damage: 40, type: 'Fire', accuracy: 100 },
                { name: 'Slash', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Fire Spin', damage: 20, type: 'Fire', accuracy: 85 },
                { name: 'Dragon Claw', damage: 50, type: 'Dragon', accuracy: 90 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 78, spAtk: 159, spDef: 115, speed: 100 }
        },
        {
            name: 'Mega Blastoise',
            image: 'blastoise_1.png',
            baseHP: 79,
            type: 'Water',
            moves: [
                { name: 'Hydro Pump', damage: 40, type: 'Water', accuracy: 80 },
                { name: 'Bite', damage: 30, type: 'Dark', accuracy: 100 },
                { name: 'Water Gun', damage: 20, type: 'Water', accuracy: 100 },
                { name: 'Skull Bash', damage: 50, type: 'Normal', accuracy: 75 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 120, spAtk: 135, spDef: 115, speed: 78 }
       },
       {
            name: 'Squirtle',
            image: 'squirtle.png',
            baseHP: 44,
            type: 'Water',
            moves: [
                { name: 'Takle', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Flip Turn', damage: 60, type: 'Water', accuracy: 100 },
                { name: 'Water Pulse', damage: 60, type: 'Water', accuracy: 100 },
                { name: 'Whirlpool', damage: 35, type: 'Water', accuracy: 85 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 65, spAtk: 50, spDef: 64, speed: 43 }
        },
        {
            name: 'Wartortle',
            image: 'wartortle.png',
            baseHP: 59,
            type: 'Water',
            moves: [
                { name: 'Rapid Spin', damage: 50, type: 'Normal', accuracy: 100 },
                { name: 'Aqua Tail', damage: 90, type: 'Water', accuracy: 90 },
                { name: 'Zen Headbutt', damage: 80, type: 'Psychic', accuracy: 90 },
                { name: 'Ice Punch', damage: 75, type: 'Water', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 80, spAtk: 65, spDef: 80, speed: 58 }
        },   
        {
            name: 'Pikachu',
            image: 'pikachu_2.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_3.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_4.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_5.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_6.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_7.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
	{
            name: 'Ash Pikachu',
            image: 'pikachu_8.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: '10,000,000 Bolt Thunderbolt', damage: 195, type: 'Electric', accuracy: 100 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_9.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_10.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_11.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_12.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Pikachu',
            image: 'pikachu_13.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
 	{
            name: 'Pikachu',
            image: 'pikachu_14.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
 	{
            name: 'Pikachu',
            image: 'pikachu_15.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {
            name: 'Caterpie',
            image: 'caterpie.png',
            baseHP: 35,
            type: 'Bug',
            moves: [
                { name: 'String Shot', damage: 0, type: 'Bug', accuracy: 95 },
                { name: 'Tackle', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Bug Bite', damage: 60, type: 'Bug', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 35, spAtk: 20, spDef: 20, speed: 45 }
        },
        {
            name: 'Metapod',
            image: 'metapod.png',
            baseHP: 50,
            type: 'Bug',
            moves: [
                { name: 'Harden', damage: 0, type: 'Normal', accuracy: 0 }
                
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 55, spAtk: 25, spDef: 25, speed: 30 }
        },
        {
            name: 'Butterfree',
            image: 'Butterfree.png',
            baseHP: 60,
            type: 'Bug',
            moves: [
                { name: 'Gust', damage: 40, type: 'Flying', accuracy: 100 },
                { name: 'Tackle', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Bug Bite', damage: 60, type: 'Bug', accuracy: 100 },
                { name: 'Confusion', damage: 50, type: 'Psychic', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 50, spAtk: 90, spDef: 80, speed: 70 }
        },
	{
            name: 'Weedle',
            image: 'weedle.png',
            baseHP: 40,
            type: 'Bug',
            moves: [
                { name: 'Poison Sting', damage: 15, type: 'Poison', accuracy: 100 },
                { name: 'String Shot', damage: 0, type: 'Normal', accuracy: 95 },
                { name: 'Bug Bite', damage: 60, type: 'Bug', accuracy: 100 }
                
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 30, spAtk: 20, spDef: 20, speed: 50 }
        },
	{
            name: 'Kakuna',
            image: 'kakuna.png',
            baseHP: 45,
            type: 'Bug',
            moves: [
                { name: 'Harden', damage: 0, type: 'Normal', accuracy: 0 },
               
                
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 50, spAtk: 25, spDef: 25, speed: 35 }
        },
	{
            name: 'Beedrill',
            image: 'Beedrill.png',
            baseHP: 65,
            type: 'Bug',
            moves: [
                { name: 'Fury Attack', damage: 15, type: 'Normal', accuracy: 85 },
                { name: 'Venoshock', damage: 65, type: 'Poison', accuracy: 100 },
                { name: 'Pin Missle', damage: 25, type: 'Bug', accuracy: 95 },
                { name: 'Agility', damage: 0, type: 'Psychic', accuracy: 0 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 40, spAtk: 45, spDef: 80, speed: 75 }
        },
	{
            name: 'Mega Beedrill',
            image: 'Beedrill_1.png',
            baseHP: 65,
            type: 'Bug',
            moves: [
                { name: 'Fury Attack', damage: 15, type: 'Normal', accuracy: 85 },
                { name: 'Venoshock', damage: 65, type: 'Poison', accuracy: 100 },
                { name: 'Pin Missle', damage: 25, type: 'Bug', accuracy: 95 },
                { name: 'Agility', damage: 0, type: 'Psychic', accuracy: 0 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 40, spAtk: 15, spDef: 80, speed: 145 }
        },
	{
            name: 'Pidgey',
            image: 'Pidgey.png',
            baseHP: 40,
            type: 'Flying',
            moves: [
                { name: 'Tackle', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Quick Attack', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Aerial Ace', damage: 60, type: 'Flying', accuracy: 60 },
                { name: 'Air Slash', damage: 75, type: 'Flying', accuracy: 95 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 40, spAtk: 35, spDef: 35, speed: 56 }
        },
	{
            name: 'Pidgeotto',
            image: 'Pidgeotto.png',
            baseHP: 63,
            type: 'Flying',
            moves: [
                { name: 'Twister', damage: 40, type: 'Dragon', accuracy: 100 },
                { name: 'Gust', damage: 40, type: 'Flying', accuracy: 100 },
                { name: 'Wing Attack', damage: 60, type: 'Flying', accuracy: 100 },
                { name: 'Quick Attack', damage: 40, type: 'Normal', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 55, spAtk: 50, spDef: 50, speed: 71 }
        },
	{
            name: 'Pidgeot',
            image: 'Pidgeot.png',
            baseHP: 83,
            type: 'Flying',
            moves: [
                { name: 'Theif', damage: 60, type: 'Dark', accuracy: 100 },
                { name: 'Steel Wing', damage: 70, type: 'Steel', accuracy: 90 },
                { name: 'U-Turn', damage: 70, type: 'Bug', accuracy: 100 },
                { name: 'Brave Bird', damage: 120, type: 'Flying', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 75, spAtk: 70, spDef: 70, speed: 101 }
        },
	{
            name: 'Mega Pidgeot',
            image: 'Pidgeot_1.png',
            baseHP: 83,
            type: 'Flying',
            moves: [
                { name: 'Theif', damage: 60, type: 'Dark', accuracy: 100 },
                { name: 'Steel Wing', damage: 70, type: 'Steel', accuracy: 90 },
                { name: 'U-Turn', damage: 70, type: 'Bug', accuracy: 100 },
                { name: 'Brave Bird', damage: 120, type: 'Flying', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 80, spAtk: 135, spDef: 80, speed: 121 }
        },
	{
            name: 'Rattata',
            image: 'Rattata.png',
            baseHP: 30,
            type: 'Normal',
            moves: [
                { name: 'Theif', damage: 60, type: 'Dark', accuracy: 100 },
                { name: 'Cut', damage: 50, type: 'Normal', accuracy: 95 },
                { name: 'Charge Beam', damage: 50, type: 'Electric', accuracy: 90 },
                { name: 'Sludge Bomb', damage: 90, type: 'Poison', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 35, spAtk: 25, spDef: 35, speed: 72 }
        },
	{
            name: 'Alolan Rattata',
            image: 'Rattata_1.png',
            baseHP: 30,
            type: 'Dark',
            moves: [
                { name: 'Theif', damage: 60, type: 'Dark', accuracy: 100 },
                { name: 'Cut', damage: 50, type: 'Normal', accuracy: 95 },
                { name: 'Assurance', damage: 60, type: 'Dark', accuracy: 100 },
                { name: 'Sludge Bomb', damage: 90, type: 'Poison', accuracy: 100 }
            ],
            weakness: 'Ghost',
            resistance: 'Fighting',
            baseStats: { defense: 35, spAtk: 25, spDef: 35, speed: 72 }
        },
	{
            name: 'Raticate',
            image: 'Raticate.png',
            baseHP: 55,
            type: 'Normal',
            moves: [
                { name: 'Double-Edge', damage: 120, type: 'Normal', accuracy: 100 },
                { name: 'Fury Swipe', damage: 18, type: 'Normal', accuracy: 80 },
                { name: 'Rock Smash', damage: 40, type: 'Fighting', accuracy: 100 },
                { name: 'Bite', damage: 60, type: 'Dark', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 60, spAtk: 50, spDef: 70, speed: 97 }
        },
	{
            name: 'Alolan Raticate',
            image: 'Raticate_1.png',
            baseHP: 75,
            type: 'Dark',
            moves: [
                { name: 'Last Resort', damage: 140, type: 'Normal', accuracy: 100 },
                { name: 'Revenge', damage: 60, type: 'Fighting', accuracy: 100 },
                { name: 'Shadow Ball', damage: 80, type: 'Ghost', accuracy: 100 },
                { name: 'Iron Tail', damage: 100, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ghost',
            resistance: 'Fighting',
            baseStats: { defense: 70, spAtk: 40, spDef: 80, speed: 77 }
        },
	{
            name: 'Spearow',
            image: 'Spearow.png',
            baseHP: 40,
            type: 'Flying',
            moves: [
                { name: 'Peck', damage: 35, type: 'Flying', accuracy: 100 },
                { name: 'Astonish', damage: 30, type: 'Ghost', accuracy: 100 },
                { name: 'Fly', damage: 90, type: 'Flying', accuracy: 95 },
                { name: 'Tri Attack', damage: 80, type: 'Normal', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 30, spAtk: 31, spDef: 31, speed: 70 }
        },
	{
            name: 'Fearow',
            image: 'Fearow.png',
            baseHP: 65,
            type: 'Flying',
            moves: [
                { name: 'Drill Run', damage: 80, type: 'Ground', accuracy: 95 },
                { name: 'Pluck', damage: 60, type: 'Flying', accuracy: 100 },
                { name: 'Hyper Beam', damage: 150, type: 'Normal', accuracy: 90 },
                { name: 'False Swipe', damage: 40, type: 'Normal', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fighting',
            baseStats: { defense: 65, spAtk: 61, spDef: 61, speed: 100 }
        },
	{
            name: 'Ekans',
            image: 'Ekans.png',
            baseHP: 35,
            type: 'Poison',
            moves: [
                { name: 'Warp', damage: 15, type: 'Normal', accuracy: 90 },
                { name: 'Acid', damage: 40, type: 'Poison', accuracy: 100 },
                { name: 'Poison Sting', damage: 15, type: 'Poison', accuracy: 100 },
                { name: 'Trail Blaze', damage: 50, type: 'Grass', accuracy: 100 }
            ],
            weakness: 'Psychic',
            resistance: 'Fighting',
            baseStats: { defense: 44, spAtk: 40, spDef: 54, speed: 55 }
        },
	{
            name: 'Arbok',
            image: 'Arbok.png',
            baseHP: 60,
            type: 'Poison',
            moves: [
                { name: 'Gunk Shot', damage: 120, type: 'Poison', accuracy: 80 },
                { name: 'Acid Spray', damage: 40, type: 'Poison', accuracy: 100 },
                { name: 'Thunder Fang', damage: 65, type: 'Electric', accuracy: 95 },
                { name: 'Scale Shot', damage: 25, type: 'Dragon', accuracy: 90 }
            ],
            weakness: 'Psychic',
            resistance: 'Fighting',
            baseStats: { defense: 69, spAtk: 65, spDef: 79, speed: 80 }
        },
	{
            name: 'Raichu',
            image: 'Raichu.png',
            baseHP: 60,
            type: 'Electric',
            moves: [
                { name: 'Thunder', damage: 110, type: 'Electric', accuracy: 70 },
                { name: 'Thunderbolt', damage: 90, type: 'Electric', accuracy: 100 },
                { name: 'Take Down', damage: 90, type: 'Normal', accuracy: 85 },
                { name: 'Surf', damage: 90, type: 'Water', accuracy: 100 }
            ],
            weakness: 'Ground',
            resistance: 'Steel',
            baseStats: { defense: 55, spAtk: 90, spDef: 85, speed: 110 }
        },
	{
            name: 'Alolan Raichu',
            image: 'Raichu_1.png',
            baseHP: 60,
            type: 'Psychic',
            moves: [
                { name: 'Thunder', damage: 110, type: 'Electric', accuracy: 70 },
                { name: 'Thunderbolt', damage: 90, type: 'Electric', accuracy: 100 },
                { name: 'Confusion', damage: 90, type: 'Psychic', accuracy: 100 },
                { name: 'Surf', damage: 90, type: 'Water', accuracy: 100 }
            ],
            weakness: 'Poison',
            resistance: 'Fighting',
            baseStats: { defense: 50, spAtk: 95, spDef: 85, speed: 110 }
        }


    ];

    let playerPokemon;
    let opponentPokemon;

    // Function to play attack sound based on move type
    function playAttackSound(moveType) {
        const audio = new Audio(`${soundFiles[moveType]}`);
        audio.play();
    }

    function getRandomLevel() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function calculateStat(baseStat, level) {
        return Math.floor((baseStat * level) / 50) + 5;
    }

    function selectRandomPokemon() {
        const pokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
        const level = getRandomLevel();
        pokemon.level = level;
        pokemon.hp = calculateStat(pokemon.baseHP, level);
        pokemon.stats = {
            defense: calculateStat(pokemon.baseStats.defense, level),
            spAtk: calculateStat(pokemon.baseStats.spAtk, level),
            spDef: calculateStat(pokemon.baseStats.spDef, level),
            speed: calculateStat(pokemon.baseStats.speed, level)
        };
        return pokemon;
    }

    function initializeBattle() {
        playerPokemon = selectRandomPokemon();
        opponentPokemon = selectRandomPokemon();

        playerImage.src = playerPokemon.image;
        playerName.textContent = playerPokemon.name;
        playerHPElement.textContent = playerPokemon.hp;
        playerLevelElement.textContent = playerPokemon.level;
        playerDefenseElement.textContent = playerPokemon.stats.defense;
        playerSpAtkElement.textContent = playerPokemon.stats.spAtk;
        playerSpDefElement.textContent = playerPokemon.stats.spDef;
        playerSpeedElement.textContent = playerPokemon.stats.speed;

        opponentImage.src = opponentPokemon.image;
        opponentName.textContent = opponentPokemon.name;
        opponentHPElement.textContent = opponentPokemon.hp;
        opponentLevelElement.textContent = opponentPokemon.level;
        opponentDefenseElement.textContent = opponentPokemon.stats.defense;
        opponentSpAtkElement.textContent = opponentPokemon.stats.spAtk;
        opponentSpDefElement.textContent = opponentPokemon.stats.spDef;
        opponentSpeedElement.textContent = opponentPokemon.stats.speed;

        document.querySelectorAll('.move-button').forEach((button, index) => {
            button.textContent = playerPokemon.moves[index].name;
            button.setAttribute('data-move', playerPokemon.moves[index].name);
            button.setAttribute('data-type', playerPokemon.moves[index].type);
        });
    }

    function calculateDamage(move, opponent) {
        let damage = move.damage;
        if (move.type === opponent.weakness) {
            damage *= 2;
        } else if (move.type === opponent.resistance) {
            damage -= 20;
            if (damage < 0) damage = 0;
        }
        return damage;
    }

    function attackOpponent(move) {
        const damage = calculateDamage(move, opponentPokemon);
        opponentPokemon.hp -= damage;
        if (opponentPokemon.hp < 0) opponentPokemon.hp = 0;
        opponentHPElement.textContent = opponentPokemon.hp;
        if (opponentPokemon.hp === 0) {
            alert('You defeated the opponent!');
            wins++;
            winsElement.textContent = wins;
            initializeBattle();
        } else {
            playAttackSound(move.type); // Play attack sound
            setTimeout(() => {
                aiAttack();
            }, 1000);
        }
    }

    function aiAttack() {
        const move = opponentPokemon.moves[Math.floor(Math.random() * opponentPokemon.moves.length)];
        const damage = calculateDamage(move, playerPokemon);
        playerPokemon.hp -= damage;
        if (playerPokemon.hp < 0) playerPokemon.hp = 0;
        playerHPElement.textContent = playerPokemon.hp;
        if (playerPokemon.hp === 0) {
            alert('You lost the battle!');
            losses++;
            lossesElement.textContent = losses;
            initializeBattle();
        }
    }

    document.querySelectorAll('.move-button').forEach(button => {
        button.addEventListener('click', () => {
            const moveName = button.getAttribute('data-move');
            const move = playerPokemon.moves.find(m => m.name === moveName);
            attackOpponent(move);
        });
    });

    initializeBattle();
});
