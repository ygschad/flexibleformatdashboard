function findRedundantConnection(edges) {
  const parent = new Array(edges.length + 1).fill(-1);
  for (const edge of edges) {
    const u = find(parent, edge[0]);
    const v = find(parent, edge[1]);
    if (u === v) return edge;
    parent[u] = v;
  }
  return [];
}
function find(parent, i) {
  if (parent[i] === -1) return i;
  return find(parent, parent[i]);
}
