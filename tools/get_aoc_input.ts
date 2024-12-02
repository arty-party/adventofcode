export async function getInput(day: number, year: number): Promise<string> {
  const sessionToken = Deno.env.get("AOC_SESSION");

  if (!sessionToken) {
    throw new Error("AOC_SESSION environment variable is required");
  }

  const response = await fetch(
    `https://adventofcode.com/${year}/day/${day}/input`,
    {
      headers: {
        Cookie: `session=${sessionToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch input: ${response.status}`);
  }

  return await response.text();
}

export function parseLines(input: string): string[] {
  return input
    .trim()
    .split("\n")
    .filter((line: string) => line.length > 0);
}

export function parseNumbers(input: string): number[] {
  return parseLines(input).map(Number);
}

if (import.meta.main) {
  const [day, year] = Deno.args.map(Number);
  const input = await getInput(day ?? 1, year ?? 2023);

  const dir = `./aoc_${year}/day_${day}`;
  await Deno.mkdir(dir, { recursive: true });

  const filepath = `${dir}/input.txt`;
  await Deno.writeTextFile(filepath, input);
}
