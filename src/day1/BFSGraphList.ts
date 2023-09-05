// type WeightedAdjacencyList = number[][];

import { createSourceFile } from "typescript";

export default function bfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number): number[] | null {
    
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break; 
        }
        
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];
            const neighbor = edge.to;  // Extract the neighboring node index using the `to` property

            if (seen[neighbor]) {
                continue;
            }

            seen[neighbor] = true;
            prev[neighbor] = curr;
            q.push(neighbor);
        }
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }

    // Build it backwards
    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    
    return [source].concat(out.reverse());
}
