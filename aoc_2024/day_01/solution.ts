// deno-lint-ignore-file
function parseInput(input: any): [number[], number[]] {
  const [leftSide, rightSide]: [number[], number[]] = [[], []];

  input
    .trim()
    .split("\n")
    .map((l: any) => l.split(/\s+/).map(Number))
    .forEach((l: any) => {
      leftSide.push(l[0]);
      rightSide.push(l[1]);
    });

  return [leftSide, rightSide];
}
export function caluclate_distance(input: string): number {
  const [leftSide, rightSide]: any = parseInput(input);

  leftSide.sort((a: number, b: number) => a - b);
  rightSide.sort((a: number, b: number) => a - b);

  let result = 0;
  for (let i = 0; i < leftSide.length; i++) {
    result += Math.abs(leftSide[i] - rightSide[i]);
  }

  return result;
}
export function find_similarity(input: string): number {
  const [leftSide, rightSide] = parseInput(input);
  let result = 0;

  for (let i = 0; i < leftSide.length; i++) {
    const leftNum: any = leftSide[i];
    const matches = rightSide.filter((num) => num === leftNum);
    result += leftNum * matches.length;
  }

  return result;
}
