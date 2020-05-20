export default class Digraph {
    constructor(digraph) {
        this.digraph = digraph;
    }
    getAllNodes() {
        return this.digraph.nodes();
    }
    getFileNames() {
        return this.getAllNodes().filter(e => e.split(".").pop() === "go");
    }
    getDirNames() {
        return this.getAllNodes().filter(e => e.split(".").pop() !== "go");
    }

    /* Edges Array[]  i: {v: "xxxx.go", w: "yyy.go"} 
       v: "start node(filename)" 
       w: "end node (filename)" */
    getAllEdges() {
        return this.digraph.edges();
    }
    isolatedNodeNames() {
        const nodes = this.getFileNames();
        const allEdges = this.getAllEdges();
        const connectedNodes = allEdges
            .map(e => e.v)
            .concat(allEdges.map(e => e.w));
        return nodes.filter(e => !connectedNodes.includes(e));
    }
}
