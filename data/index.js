const CSData = [
	{
		id: 1,
		headerStats: {
			charName: "Wilric",
			class: "Warlock L10",
			background: "Criminal",
			playerName: "Dex",
			race: "Variant Human",
			align: "Chaotic Good",
			xp: "3000",
		},
		baseStats: {
			strength: 14,
			dexterity: 12,
			constitution: 18,
			intelligence: 10,
			wisdom: 8,
			charisma: 20,
		},
		saves: {
			strength: {
				mod: 2,
				prof: false,
			},
			dexterity: {
				mod: 1,
				prof: false,
			},
			constitution: {
				mod: 4,
				prof: false,
			},
			intelligence: {
				mod: 0,
				prof: false,
			},
			wisdom: {
				mod: 3,
				prof: true,
			},
			charisma: {
				mod: 9,
				prof: true,
			},
		},
		passPer: 13,
		inspiration: false,
		profBonus: 4,
		skills: {
			acrobatics: {
				mod: 1,
				prof: false,
			},
			animalHandling: {
				mod: -1,
				prof: false,
			},
			arcana: {
				mod: 4,
				prof: true,
			},
			athletics: {
				mod: 2,
				prof: false,
			},
			deception: {
				mod: 9,
				prof: true,
			},
			history: {
				mod: 0,
				prof: false,
			},
			insight: {
				mod: -1,
				prof: false,
			},
			intimidation: {
				mod: 9,
				prof: true,
			},
			investigation: {
				mod: 0,
				prof: false,
			},
			medicine: {
				mod: -1,
				prof: false,
			},
			nature: {
				mod: 0,
				prof: false,
			},
			perception: {
				mod: 3,
				prof: true,
			},
			performance: {
				mod: 5,
				prof: false,
			},
			persuasion: {
				mod: 5,
				prof: false,
			},
			religion: {
				mod: 0,
				prof: false,
			},
			sleightOfHand: {
				mod: 1,
				prof: false,
			},
			stealth: {
				mod: 5,
				prof: true,
			},
			survival: {
				mod: -1,
				prof: false,
			},
		},
		healthStats: {
			AC: 11,
			init: 1,
			speed: 30,
			hp: {
				max: 83,
				current: 1,
			},
			hitDice: {
				total: "10d8",
				current: "5d8",
			},
			deathSaves: {
				success: {
					1: false,
					2: false,
					3: false,
				},
				failure: {
					1: false,
					2: false,
					3: false,
				},
			},
		},
		atkStats: {
			attacks: [
				{
					id: 0,
					name: "+1 dagger",
					atk: +1,
					damage: "1d4 piercing",
				},
				{
					id: 1,
					name: "",
					atk: null,
					damage: "",
				},
				,
				{
					id: 2,
					name: "",
					atk: null,
					damage: "",
				},
			],
			fullDescription: "+1 Dagger, Hand crossbow (20 bolts), Spear",
		},
		equipment: {
			currency: {
				cp: 17,
				sp: 4,
				ep: 0,
				gp: 17,
				pp: 0,
			},
			otherEquipment:
				"spellcasting focus (amulet), 50ft rope, torch, climbing gear",
		},
		rpTraits: {
			personalityTraits:
				"personality trait 1, personality trait 2, personality trait 3",
			ideals: "ideal 1, ideal 2, ideal 3",
			bonds: "person 1, person 2, person 3",
			flaws: "flaw 1, flaw 2, flaw 3",
		},
		featsAndTraits:
			"Pact Magic PHB - pg 107: You can cast known warlock spells using CHA as your spellcasting modifier (Spell DC 17, Spell Attack +9). You can use an arcane focus as a spellcasting focus.",
	},
];

const initialCSData = {
	headerStats: {
		name: "",
		class: "",
		background: "",
		playerName: "",
		race: "",
		align: "",
		xp: "",
	},
	baseStats: {
		str: null,
		dex: null,
		con: null,
		int: null,
		wis: null,
		cha: 20,
	},
	saves: {
		str: {
			mod: null,
			prof: false,
		},
		dex: {
			mod: null,
			prof: false,
		},
		con: {
			mod: null,
			prof: false,
		},
		int: {
			mod: null,
			prof: false,
		},
		wis: {
			mod: null,
			prof: false,
		},
		cha: {
			mod: null,
			prof: false,
		},
	},
	passPer: null,
	inspiration: false,
	profBonus: null,
	skills: {
		acrobatics: {
			mod: null,
			prof: false,
		},
		animalHandling: {
			mod: null,
			prof: false,
		},
		arcana: {
			mod: null,
			prof: false,
		},
		athletics: {
			mod: null,
			prof: false,
		},
		deception: {
			mod: null,
			prof: false,
		},
		history: {
			mod: null,
			prof: false,
		},
		insight: {
			mod: null,
			prof: false,
		},
		intimidation: {
			mod: null,
			prof: false,
		},
		investigation: {
			mod: null,
			prof: false,
		},
		medicine: {
			mod: null,
			prof: false,
		},
		nature: {
			mod: null,
			prof: false,
		},
		perception: {
			mod: null,
			prof: false,
		},
		performance: {
			mod: null,
			prof: false,
		},
		persuasion: {
			mod: null,
			prof: false,
		},
		religion: {
			mod: null,
			prof: false,
		},
		sleightOfHand: {
			mod: null,
			prof: false,
		},
		stealth: {
			mod: null,
			prof: false,
		},
		survival: {
			mod: null,
			prof: false,
		},
	},
	healthStats: {
		AC: null,
		init: null,
		speed: null,
		hp: {
			max: null,
			current: null,
		},
		hitDice: {
			total: "",
			current: "",
		},
		deathSaves: {
			success: {
				1: false,
				2: false,
				3: false,
			},
			failure: {
				1: false,
				2: false,
				3: false,
			},
		},
	},
	atkStats: {
		attacks: [
			{
				id: 0,
				name: "",
				atk: null,
				damage: "",
			},
			{
				id: 1,
				name: "",
				atk: null,
				damage: "",
			},
			,
			{
				id: 2,
				name: "",
				atk: null,
				damage: "",
			},
		],
		fullDescription: "",
	},
	equipment: {
		currency: {
			cp: null,
			sp: null,
			ep: null,
			gp: null,
			pp: null,
		},
		otherEquipment: "",
	},
	rpTraits: {
		personalityTraits: "",
		ideals: "",
		bonds: "",
		flaws: "",
	},
	featsAndTraits: "",
};

module.exports = {
	CSData: CSData,
	initialCSData: initialCSData,
};
