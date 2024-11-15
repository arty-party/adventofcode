// https://en.wikipedia.org/wiki/Breadth-first_search

export type Node = string | number;
export type Graph = Map<Node, Set<Node>>;

export function createGraph(): Graph {
    return new Map();
}

export function bfs(graph: Graph, start: Node, target: Node): Node[] {
    const visited = new Set<Node>();
    const queue: Node[] = [start];
    const previous = new Map<Node, Node>();
    
    visited.add(start);

    while (queue.length > 0) {
        const current = queue.shift()!;
        
        if (current === target) {
            return reconstructPath(previous, start, target);
        }

        const neighbors = graph.get(current) || new Set<Node>();
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                previous.set(neighbor, current);
                queue.push(neighbor);
            }
        }
    }

    return [];
}

function reconstructPath(previous: Map<Node, Node>, start: Node, end: Node): Node[] {
    const path: Node[] = [];
    let current: Node | undefined = end;

    while (current !== undefined) {
        path.unshift(current);
        current = previous.get(current);
    }

    return path[0] === start ? path : [];
}