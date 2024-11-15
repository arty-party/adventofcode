import { assertEquals } from "jsr:@std/assert";
import { bfs, createGraph, type Graph } from "./bfs.ts";

Deno.test("BFS - Basic Graph Navigation", () => {
  const graph: Graph = createGraph();
  graph.set(1, new Set([2, 3]));
  graph.set(2, new Set([1, 4]));
  graph.set(3, new Set([1, 4]));
  graph.set(4, new Set([2, 3]));

  assertEquals(bfs(graph, 1, 4), [1, 2, 4]);
});

Deno.test("BFS - String Nodes", () => {
  const graph: Graph = createGraph();
  graph.set("A", new Set(["B", "C"]));
  graph.set("B", new Set(["A", "D"]));
  graph.set("C", new Set(["A", "D"]));
  graph.set("D", new Set(["B", "C"]));

  assertEquals(bfs(graph, "A", "D"), ["A", "B", "D"]);
});

Deno.test("BFS - Disconnected Components", () => {
  const graph: Graph = createGraph();
  graph.set(1, new Set([2]));
  graph.set(2, new Set([1]));
  graph.set(3, new Set([4]));
  graph.set(4, new Set([3]));

  assertEquals(bfs(graph, 1, 4), []);
});

Deno.test("BFS - Single Node Graph", () => {
  const graph: Graph = createGraph();
  graph.set(1, new Set());

  assertEquals(bfs(graph, 1, 1), [1]);
});

Deno.test("BFS - Complex Graph", () => {
  const graph: Graph = createGraph();
  graph.set(1, new Set([2, 3, 4]));
  graph.set(2, new Set([1, 5]));
  graph.set(3, new Set([1, 5]));
  graph.set(4, new Set([1, 6]));
  graph.set(5, new Set([2, 3, 6]));
  graph.set(6, new Set([4, 5]));

  assertEquals(bfs(graph, 1, 6), [1, 4, 6]);
});
