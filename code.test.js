const fs = require('fs');
const assert = require('assert');
const { inflate } = require('zlib');

eval(fs.readFileSync('code.js')+'');

graph0 = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ];
  assert(JSON.stringify(dijkstra(graph0, 0)) == JSON.stringify([0,Infinity,Infinity,Infinity,Infinity]));
  assert(JSON.stringify(dijkstra(graph0, 1)) == JSON.stringify([Infinity,0,Infinity,Infinity,Infinity]));
  assert(JSON.stringify(dijkstra(graph0, 2)) == JSON.stringify([Infinity,Infinity,0,Infinity,Infinity]));
  assert(JSON.stringify(dijkstra(graph0, 3)) == JSON.stringify([Infinity,Infinity,Infinity,0,Infinity]));
  assert(JSON.stringify(dijkstra(graph0, 4)) == JSON.stringify([Infinity,Infinity,Infinity,Infinity,0]));
graph1 = [
    [0,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,0,0,0,0]
  ];
  assert(JSON.stringify(dijkstra(graph1, 0)) == JSON.stringify([0,1,2,3,4]));
  assert(JSON.stringify(dijkstra(graph1, 1)) == JSON.stringify([Infinity,0,1,2,3]));
  assert(JSON.stringify(dijkstra(graph1, 2)) == JSON.stringify([Infinity,Infinity,0,1,2]));
  assert(JSON.stringify(dijkstra(graph1, 3)) == JSON.stringify([Infinity,Infinity,Infinity,0,1]));
  assert(JSON.stringify(dijkstra(graph1, 4)) == JSON.stringify([Infinity,Infinity,Infinity,Infinity,0]));
  graph2 = [
    [0,3,1,5,0],
    [0,0,0,0,3],
    [0,0,0,0,1],
    [0,0,0,0,5],
    [0,0,0,0,0]
  ];
  assert(JSON.stringify(dijkstra(graph2, 0)) == JSON.stringify([0,3,1,5,2]));
  assert(JSON.stringify(dijkstra(graph2, 1)) == JSON.stringify([Infinity,0,Infinity,Infinity,3]));
  assert(JSON.stringify(dijkstra(graph2, 2)) == JSON.stringify([Infinity,Infinity,0,Infinity,1]));
  assert(JSON.stringify(dijkstra(graph2, 3)) == JSON.stringify([Infinity,Infinity,Infinity,0,5]));
  assert(JSON.stringify(dijkstra(graph2, 4)) == JSON.stringify([Infinity,Infinity,Infinity,Infinity,0]));
  graph3 = [
    [0,1,3,7],
    [0,0,1,0],
    [0,0,0,1],
    [0,0,0,0],
  ];
  assert(JSON.stringify(dijkstra(graph3, 0)) == JSON.stringify([0,1,2,3]));
  assert(JSON.stringify(dijkstra(graph3, 1)) == JSON.stringify([Infinity,0,1,2]));
  assert(JSON.stringify(dijkstra(graph3, 2)) == JSON.stringify([Infinity,Infinity,0,1,]));
  assert(JSON.stringify(dijkstra(graph3, 3)) == JSON.stringify([Infinity,Infinity,Infinity,0,]));

  graph4 = [
    [0,1,2,3,0,0],
    [0,0,0,0,4,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,5],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ];
  assert(JSON.stringify(dijkstra(graph4, 0)) == JSON.stringify([0,1,2,3,5,8]));
  assert(JSON.stringify(dijkstra(graph4, 1)) == JSON.stringify([Infinity,0,Infinity,Infinity,4,Infinity]));
  assert(JSON.stringify(dijkstra(graph4, 2)) == JSON.stringify([Infinity,Infinity,0,Infinity,Infinity,Infinity]));
  assert(JSON.stringify(dijkstra(graph4, 3)) == JSON.stringify([Infinity,Infinity,Infinity,0,Infinity,5]));
  assert(JSON.stringify(dijkstra(graph4, 4)) == JSON.stringify([Infinity,Infinity,Infinity,Infinity,0,Infinity]));
  assert(JSON.stringify(dijkstra(graph4, 5)) == JSON.stringify([Infinity,Infinity,Infinity,Infinity,Infinity,0]));
