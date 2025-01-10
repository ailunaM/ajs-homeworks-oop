class Character {
  constructor(name, type) {
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (typeof name !== "string" || name < 2 || name > 10) {
      throw new Error("Incorrect values");
    }
    if (!types.includes(type)) {
      throw new Error("Incorrect values");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }
}
console.log(new Bowman('legolas'));

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 10;
    this.defence = 40;
  }
}
console.log(new Swordsman('aragorn'));
class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}
console.log(new Magician('gendalf'));
class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}
console.log(new Daemon('barlog'));
class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}
console.log(new Undead('nazgul'));
class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}
console.log(new Zombie('frodo'));
