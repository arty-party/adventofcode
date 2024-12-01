import { assertEquals } from "@std/assert";
import { caluclate_distance, find_similarity } from "./solution.ts";

Deno.test("caluclate_distance", async (t) => {
  await t.step("Demo input", () => {
    const input = Deno.readTextFileSync(
      Deno.cwd() + "/aoc_2024/day_1/demo_input.txt",
    );
    assertEquals(caluclate_distance(input), 11);
  });

  await t.step("Solution input", () => {
    const input = Deno.readTextFileSync(
      Deno.cwd() + "/aoc_2024/day_1/input.txt",
    );
    assertEquals(caluclate_distance(input), 2031679);
  });
});

Deno.test("find_similarity", async (t) => {
  await t.step("Demo input", () => {
    const input = Deno.readTextFileSync(
      Deno.cwd() + "/aoc_2024/day_1/demo_input.txt",
    );
    assertEquals(find_similarity(input), 31);
  });

  await t.step("Solution input", () => {
    const input = Deno.readTextFileSync(
      Deno.cwd() + "/aoc_2024/day_1/input.txt",
    );
    assertEquals(find_similarity(input), 19678534);
  });
});
