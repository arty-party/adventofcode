export function convertToDigit(input: string): string {
  const numberMap: Record<string, string> = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
  };

  let result = input;
  for (const [word, digit] of Object.entries(numberMap)) {
    const regex = new RegExp(word, "gi");
    result = result.replace(regex, digit);
  }

  return result;
}

export function findFirstAndLastDigit(input: string): number {
  const converted = convertToDigit(input);
  const digits = converted.match(/\d/g) || [];
  if (digits.length === 0) return 0;

  const firstDigit = digits[0];
  const lastDigit = digits[digits.length - 1];

  return parseInt(firstDigit! + lastDigit!);
}
