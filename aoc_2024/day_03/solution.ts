export function searchForSumOfMul(input: string): number {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = [...input.matchAll(regex)];

  let result = 0;
  for (const match of matches) {
    const num1 = parseInt(match[1]!);
    const num2 = parseInt(match[2]!);
    result += num1 * num2;
  }
  return result;
}

export function searchForSumOfMulWithDo(input: string): number {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;
  const matches = [...input.matchAll(regex)];
  let enabled = true;
  let result = 0;

  matches.forEach((match) => {
    const expression = match[0];

    if (expression === "do()") {
      enabled = true;
    } else if (expression === "don't()") {
      enabled = false;
    } else if (enabled) {
      const [num1, num2] = expression
        .match(/\d+/g)!
        .map(Number);
      result += num1! * num2!;
    }
  });
  return result;
}
