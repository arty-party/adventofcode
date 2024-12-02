function parseInput(input: string): number[][] {
  return input
    .split("\n")
    .map((line: string) =>
      line
        .split(" ")
        .map((n) => parseInt(n))
    );
}
function isSequenceValid(row: number[]): boolean {
  const differences: number[] = row
    .slice(1)
    .map((n, i) => n - row[i]!);
  const isIncreasing = differences[0]! > 0;

  return differences
    .every((diff) =>
      (isIncreasing ? diff > 0 : diff < 0) &&
      Math.abs(diff) >= 1 &&
      Math.abs(diff) <= 3
    );
}

function isSequenceActuallyValid(row: number[]): boolean {
  const firstIncreasing = row[0]! < row[1]!;

  return row.every((num, i) => {
    if (i === row.length - 1) return true;
    const diff = row[i + 1]! - num;
    return (diff > 0) === firstIncreasing &&
      Math.abs(diff) >= 1 &&
      Math.abs(diff) <= 3;
  });
}
export function checkForSafeReports(input: string): number {
  const rows = parseInput(input);
  const safe = rows.filter((row) => isSequenceValid(row)).length;
  return safe;
}

export function checkForActuallySafeReports(input: string): number {
  const rows = parseInput(input);
  let safe = 0;
  for (const row of rows) {
    if (
      isSequenceActuallyValid(row) ||
      row.some((_, i) => isSequenceActuallyValid(row.toSpliced(i, 1)))
    ) {
      safe++;
    }
  }
  return safe;
}
