import { assertEquals } from "@std/assert";
import { readFromInput } from "../../helpers/read_input.ts";
import { checkUpdates, onlyAddMiddlePageNumber } from "./solution.ts";

Deno.test("checkUpdates", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("example", "05");
    const data = input.split("\n");
    assertEquals(checkUpdates(data), 143);
  });

  await t.step("Solution input", () => {
    const input = readFromInput("input", "05");
    const data = input.split("\n");
    assertEquals(checkUpdates(data), 5651);
  });
});

Deno.test("Check for middle page numbers", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("example", "05");
    const data = input.split("\n");
    assertEquals(onlyAddMiddlePageNumber(data), 123);
  });

  await t.step("Solution input", () => {
    const input = readFromInput("input", "05");
    const data = input.split("\n");
    assertEquals(onlyAddMiddlePageNumber(data), 4743);
  });
});
