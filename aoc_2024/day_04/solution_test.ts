import { assertEquals } from "@std/assert";
import { readFromInput } from "../../helpers/read_input.ts";
import { findXmasVariants, findXShapedXMas } from "./solution.ts";

Deno.test("XMas variants", async (t) => {
  await t.step("Demo input", () => {
    const data = readFromInput("demo_input", "04")
      .trim()
      .split("\n")
      .map((line) => [...line]);
    assertEquals(findXmasVariants(data), 18);
  });
  await t.step("Solution input", () => {
    const data = readFromInput("input", "04")
      .trim()
      .split("\n")
      .map((line) => [...line]);
    assertEquals(findXmasVariants(data), 2344);
  });
});

Deno.test("X shaped XMas", async (t) => {
  await t.step("Demo input", () => {
    const data = readFromInput("demo_input", "04")
      .trim()
      .split("\n")
      .map((line) => [...line]);
    assertEquals(findXShapedXMas(data), 9);
  });
  await t.step("Solution input", () => {
    const data = readFromInput("input", "04")
      .trim()
      .split("\n")
      .map((line) => [...line]);
    assertEquals(findXShapedXMas(data), 1815);
  });
});
