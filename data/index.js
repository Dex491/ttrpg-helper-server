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
		otherProfs:
			"Light Armour, Firearms, Simple Weapons, Thieves' Tools, Playing Card Set \nCommon, Elvish",
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
					nme: "+1 dagger",
					atk: "+1",
					dmg: "1d4 piercing",
				},
				{
					id: 1,
					nme: "",
					atk: "",
					dmg: "",
				},
				{
					id: 2,
					nme: "",
					atk: "",
					dmg: "",
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
			"Pact Magic PHB - pg 107: \nYou can cast known warlock spells using CHA as your spellcasting modifier (Spell DC 17, Spell Attack +9). \nYou can use an arcane focus as a spellcasting focus.",
	},
];

module.exports = {
	CSData: CSData,
};
