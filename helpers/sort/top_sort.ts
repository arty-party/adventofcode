export type Node = string;
export type Graph = Map<Node, Set<Node>>;

export function createGraph(): Graph {
  return new Map();
}

export function topologicalSort(graph: Graph): Node[] {
  const visited = new Set<Node>();
  const sorted: Node[] = [];
  const visiting = new Set<Node>();

  function visit(node: Node): boolean {
    if (visiting.has(node)) {
      return false; // Cycle detected
    }
    if (visited.has(node)) {
      return true;
    }

    visiting.add(node);

    const neighbors = graph.get(node);
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visit(neighbor)) {
          return false;
        }
      }
    }

    visiting.delete(node);
    visited.add(node);
    sorted.unshift(node);
    return true;
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      if (!visit(node)) {
        return []; // Return empty array if cycle is detected
      }
    }
  }

  return sorted;
}

export function addEdge(graph: Graph, from: Node, to: Node): void {
  if (!graph.has(from)) {
    graph.set(from, new Set());
  }
  if (!graph.has(to)) {
    graph.set(to, new Set());
  }
  graph.get(from)!.add(to);
}
