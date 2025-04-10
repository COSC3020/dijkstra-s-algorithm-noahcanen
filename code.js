function dijkstra(graph, sourceNode) {
    let distances = Array(graph.length).fill(Infinity)
    distances[sourceNode] = 0
    let Vertices = [[sourceNode,0]]
    let Vertice = 0
    let node = 0
    let distance = 0
    while(Vertices.length != 0){
        Vertice = nextVertice(Vertices,node,distances)
        if(Vertices.length != 0){
            Vertices.splice(node,1)
            for(i = 0; i < graph[Vertice].length; i++){
                if(graph[Vertice][i] != 0){
                    distance = graph[Vertice][i] + distances[Vertice]
                    if(distance < distances[i]){
                        distances[i] = distance
                        Vertices.push([i,distance])
                    }
                }
            }
        }
    }
    return distances
}
function nextVertice(Vertices,node,distances){
    let Vertice = 0;
    for(i=0; i < Vertices.length; i++){
        if(Vertices[i][1] < Vertices[Vertice][1]){
            if(Vertices[i][1] <= distances[i]){
                Vertice = i 
            }
            else{
                Vertices.splice(i,1)
            }
        }
    }
    node = Vertice;
    return Vertices[Vertice][0];
}
