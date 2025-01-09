const gamePlayers = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];
console.log(gamePlayers);
export default function matchers(heroes) {
  return heroes.slice().sort((a, b) => b.health - a.health);
}
