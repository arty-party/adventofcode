import { join } from "jsr:@std/path";
import { walk } from "jsr:@std/fs/walk";
import process from "node:process";

export const firefoxProfiles = {
    win32: join(
        Deno.env.get("APPDATA") || process.env.APPDATA || "",
        "Mozilla/Firefox/Profiles",
    ),
    darwin: join(
        Deno.env.get("HOME") || process.env.HOME || "",
        "Library/Application Support/Firefox/Profiles",
    ),
    linux: join(
        Deno.env.get("HOME") || process.env.HOME || "",
        ".mozilla/firefox",
    ),
};

export async function findDefaultProfile(): Promise<string> {
    const os = Deno.build.os;
    let profilesPath: string;

    if (os === "windows") {
        profilesPath = firefoxProfiles.win32;
    } else if (os === "darwin") {
        profilesPath = firefoxProfiles.darwin;
    } else if (os === "linux") {
        profilesPath = firefoxProfiles.linux;
    } else {
        throw new Error("Unsupported operating system");
    }

    for await (const entry of walk(profilesPath, { maxDepth: 1 })) {
        if (entry.isDirectory && entry.name.endsWith(".default-release")) {
            return entry.path;
        }
    }

    throw new Error("Default Firefox profile not found");
}
export async function getAocSession(): Promise<string> {
    const profilePath = await findDefaultProfile();
    const cookiesDb = join(profilePath, "cookies.sqlite");

    const command = new Deno.Command("sqlite3", {
        args: [
            cookiesDb,
            "SELECT value FROM moz_cookies WHERE host = '.adventofcode.com' AND name = 'session';",
        ],
    });

    const { stdout } = await command.output();
    const session = new TextDecoder().decode(stdout).trim();

    if (!session) {
        throw new Error(
            "AOC session not found. Please login to Advent of Code in Firefox first.",
        );
    }

    return session;
}

// Write session to .env file
const session = await getAocSession();
await Deno.writeTextFile(".env", `AOC_SESSION="${session}"`);
Deno.env.set("AOC_SESSION", `"${session}"`);
