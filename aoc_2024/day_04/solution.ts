export function findXmasVariants(input: string[][]): number {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i]!.length; j++) {
      if (input[i]![j]! === "X") {
        const possibleDirections = [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1],
        ];
        result += possibleDirections.filter(([dx, dy]) =>
          input[i + dx!]?.[j + dy!] === "M" &&
          input[i + 2 * dx!]?.[j + 2 * dy!] === "A" &&
          input[i + 3 * dx!]?.[j + 3 * dy!] === "S"
        ).length;
      }
    }
  }
  return result;
}

export function findXShapedXMas(input: string[][]): number {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i]!.length; j++) {
      if (input[i]![j]! === "A") {
        const possibleNeighbors = {
          upLeft: input[i + 1]?.[j + 1],
          downRight: input[i - 1]?.[j - 1],
          upRight: input[i - 1]?.[j + 1],
          downLeft: input[i + 1]?.[j - 1],
        };

        if (
          ((possibleNeighbors.upLeft === "S" &&
            possibleNeighbors.downRight === "M") ||
            (possibleNeighbors.upLeft === "M" &&
              possibleNeighbors.downRight === "S")) &&
          ((possibleNeighbors.upRight === "S" &&
            possibleNeighbors.downLeft === "M") ||
            (possibleNeighbors.upRight === "M" &&
              possibleNeighbors.downLeft === "S"))
        ) {
          result++;
        }
      }
    }
  }
  return result;
}
