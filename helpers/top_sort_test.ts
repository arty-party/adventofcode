import { assertEquals, assertFalse } from "jsr:@std/assert";
import { addEdge, createGraph, topologicalSort } from "./top_sort.ts";

Deno.test("Topological Sort - Empty Graph", () => {
  const graph = createGraph();
  const result = topologicalSort(graph);
  assertEquals(result, []);
});

Deno.test("Topological Sort - Single Node", () => {
  const graph = createGraph();
  graph.set("A", new Set());
  const result = topologicalSort(graph);
  assertEquals(result, ["A"]);
});

Deno.test("Topological Sort - Linear Path", () => {
  const graph = createGraph();
  addEdge(graph, "A", "B");
  addEdge(graph, "B", "C");
  addEdge(graph, "C", "D");
  const result = topologicalSort(graph);
  assertEquals(result, ["A", "B", "C", "D"]);
});

Deno.test("Topological Sort - Diamond Shape", () => {
  const graph = createGraph();
  addEdge(graph, "A", "B");
  addEdge(graph, "A", "C");
  addEdge(graph, "B", "D");
  addEdge(graph, "C", "D");
  const result = topologicalSort(graph);
  assertEquals(result.indexOf("A"), 0);
  assertEquals(result.indexOf("D"), 3);
  assertFalse(result.indexOf("B") > result.indexOf("D"));
  assertFalse(result.indexOf("C") > result.indexOf("D"));
});

Deno.test("Topological Sort - Cycle Detection", () => {
  const graph = createGraph();
  addEdge(graph, "A", "B");
  addEdge(graph, "B", "C");
  addEdge(graph, "C", "A");
  const result = topologicalSort(graph);
  assertEquals(result, []);
});

Deno.test("Topological Sort - Complex DAG", () => {
  const graph = createGraph();
  addEdge(graph, "A", "B");
  addEdge(graph, "A", "C");
  addEdge(graph, "B", "D");
  addEdge(graph, "C", "D");
  addEdge(graph, "D", "E");
  addEdge(graph, "F", "E");
  const result = topologicalSort(graph);
  assertFalse(result.indexOf("A") > result.indexOf("B"));
  assertFalse(result.indexOf("A") > result.indexOf("C"));
  assertFalse(result.indexOf("B") > result.indexOf("D"));
  assertFalse(result.indexOf("C") > result.indexOf("D"));
  assertFalse(result.indexOf("D") > result.indexOf("E"));
  assertFalse(result.indexOf("F") > result.indexOf("E"));
});
