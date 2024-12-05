import { assertEquals } from "@std/assert";
import { readFromInput } from "../../helpers/read_input.ts";
import { caluclate_distance, find_similarity } from "./solution.ts";

Deno.test("caluclate_distance", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("example", "01");
    assertEquals(caluclate_distance(input), 11);
  });

  await t.step("Solution input", () => {
    const input = readFromInput("input", "01");
    assertEquals(caluclate_distance(input), 2031679);
  });
});

Deno.test("find_similarity", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("example", "01");
    assertEquals(find_similarity(input), 31);
  });

  await t.step("Solution input", () => {
    const input = readFromInput("input", "01");
    assertEquals(find_similarity(input), 19678534);
  });
});
