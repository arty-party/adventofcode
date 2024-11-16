export function findSequentialDigits(min: number, max: number): number[] {
  const result: number[] = [];

  const minLength = min.toString().length;
  const maxLength = max.toString().length;

  for (let length = minLength; length <= maxLength; length++) {
    for (let start = 1; start <= 9 - length + 1; start++) {
      let num = 0;
      let digit = start;

      for (let i = 0; i < length; i++) {
        num = num * 10 + digit;
        digit++;
      }

      // Check if number is within range
      if (num >= min && num <= max) {
        result.push(num);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
