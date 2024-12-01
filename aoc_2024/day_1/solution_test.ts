import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { caluclate_distance, find_similarity } from "./solution.ts";

Deno.test("caluclate_distance", async (t) => {
  await t.step("should calculate correct difference for sorted arrays", () => {
    const input = "1 4\n2 5\n3 6";
    assertEquals(caluclate_distance(input), 9);
  });

  await t.step("should handle single line input", () => {
    const input = "10 20";
    assertEquals(caluclate_distance(input), 10);
  });

  await t.step("Input from file", () => {
    const input = Deno.readTextFileSync(
      Deno.cwd() + "/aoc_2024/day_1/input.txt",
    );
    assertEquals(caluclate_distance(input), 2031679);
  });
});

Deno.test("find_similarity", async (t) => {
  await t.step("should calculate correct similarity for basic input", () => {
    const input = "1 1\n2 2\n3 3";
    assertEquals(find_similarity(input), 6);
  });

  await t.step("should handle duplicates in right side", () => {
    const input = "1 2\n2 2\n3 2";
    assertEquals(find_similarity(input), 6);
  });

  await t.step("should handle non-matching numbers", () => {
    const input = "1 4\n2 5\n3 6";
    assertEquals(find_similarity(input), 0);
  });

  await t.step("Input from file", () => {
    const input = Deno.readTextFileSync(
      Deno.cwd() + "/aoc_2024/day_1/input.txt",
    );
    assertEquals(find_similarity(input), 19678534);
  });
});
