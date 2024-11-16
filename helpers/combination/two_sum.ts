export function findTwoSum(
  numbers: number[],
  target: number,
): [number, number] | [] {
  const numMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i]!;

    if (numMap.has(complement)) {
      const complementIndex = numMap.get(complement);
      if (complementIndex !== undefined) {
        return [complementIndex, i];
      }
    }

    numMap.set(numbers[i] ?? 0, i);
  }

  return [];
}
