export function readFromInput(input: string, day: string): string {
  return Deno.readTextFileSync(
    `${Deno.cwd()}/aoc_2024/day_${day}/${input}.txt`,
  );
}
