import matchers from "../matchers";

test("Sort heroes by decreasing health", () => {
  const input = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  const result = matchers(input);
  expect(result).toEqual(expected);

  expect(input).toEqual([
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ]);

  expect(result).not.toBe(expected);    

});

