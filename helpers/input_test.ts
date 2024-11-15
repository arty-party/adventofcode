import { assertEquals, assertRejects } from "jsr:@std/assert";
import { getInput, parseLines, parseNumbers } from "./input.ts";

Deno.test("input helper", async (t) => {
    await t.step("parseLines splits input correctly", () => {
        const input = "line1\nline2\nline3\n";
        const expected = ["line1", "line2", "line3"];
        assertEquals(parseLines(input), expected);
    });

    await t.step("parseNumbers converts strings to numbers", () => {
        const input = "1\n2\n3\n";
        const expected = [1, 2, 3];
        assertEquals(parseNumbers(input), expected);
    });

    await t.step("getInput throws when AOC_SESSION is not set", async () => {
        const originalSession = Deno.env.get("AOC_SESSION");
        Deno.env.delete("AOC_SESSION");

        await assertRejects(
            () => getInput(1, 2023),
            Error,
            "AOC_SESSION environment variable is required",
        );

        if (originalSession) {
            Deno.env.set("AOC_SESSION", originalSession);
        }
    });
});
