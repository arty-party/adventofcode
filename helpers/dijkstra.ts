type Node = string | number;
type Graph = Map<Node, Map<Node, number>>;

// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
export function dijkstra(
  graph: Graph,
  start: Node,
  end: Node,
): { distance: number; path: Node[] } {
  const distances = new Map<Node, number>();
  const previous = new Map<Node, Node>();
  const unvisited = new Set<Node>();

  for (const node of graph.keys()) {
    distances.set(node, node === start ? 0 : Infinity);
    unvisited.add(node);
  }

  while (unvisited.size > 0) {
    let current: Node | null = null;
    let minDistance = Infinity;

    for (const node of unvisited) {
      const distance = distances.get(node)!;
      if (distance < minDistance) {
        minDistance = distance;
        current = node;
      }
    }

    if (current === null || current === end) break;

    unvisited.delete(current);

    const neighbors = graph.get(current)!;
    for (const [neighbor, weight] of neighbors.entries()) {
      if (!unvisited.has(neighbor)) continue;

      const newDistance = distances.get(current)! + weight;
      if (newDistance < distances.get(neighbor)!) {
        distances.set(neighbor, newDistance);
        previous.set(neighbor, current);
      }
    }
  }

  const path: Node[] = [];
  let current: Node | undefined = end;

  while (current !== undefined) {
    path.unshift(current);
    current = previous.get(current);
  }

  return {
    distance: distances.get(end) ?? Infinity,
    path: path[0] === start ? path : [],
  };
}

export function createGraph(): Graph {
  return new Map();
}

export function addEdge(
  graph: Graph,
  from: Node,
  to: Node,
  weight: number,
): void {
  if (!graph.has(from)) graph.set(from, new Map());
  if (!graph.has(to)) graph.set(to, new Map());

  graph.get(from)!.set(to, weight);
}
