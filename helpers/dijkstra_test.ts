import { assertEquals } from "jsr:@std/assert";
import { addEdge, createGraph, dijkstra } from "./dijkstra.ts";

Deno.test("Dijkstra's Algorithm", () => {
    const graph = createGraph();
    addEdge(graph, "A", "B", 4);
    addEdge(graph, "A", "C", 2);
    addEdge(graph, "B", "D", 3);
    addEdge(graph, "C", "D", 1);
    addEdge(graph, "C", "B", 1);

    const result = dijkstra(graph, "A", "D");
    assertEquals(result.distance, 3);
    assertEquals(result.path, ["A", "C", "D"]);
});
