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
    node(nodeName){
        return this.digraph.node(nodeName)
    }
    removeIsolatedNodes() {
        const isolatedNodeNames =this.getIsolatedNodes()
        this.removeNodes(isolatedNodeNames)
    }
    getIsolatedNodes(){
        const nodes = this.getFileNames();
        const allEdges = this.getAllEdges();
        const connectedNodes = allEdges
            .map(e => e.v)
            .concat(allEdges.map(e => e.w));
        return  nodes.filter(e => !connectedNodes.includes(e));
    }
    removeNode(nodeName){
        this.digraph.removeNode(nodeName)
    }
    removeNodes(removeNodeNames){
        removeNodeNames.forEach(e => this.removeNode(e))
    }
    result(){
        return this.digraph
    }
    /* if a node has childs, return true */
    hasChildsNodes(nodeName){        
        return this.digraph.children(nodeName).length > 0
    }
    removeEmptyPackages(){
        const emptyPackages = this.emptyPackages()
        this.removeNodes(emptyPackages)
    }
    emptyPackages(){
        return this.getAllNodes().filter(e => e.match(/cluster/) && !this.hasChildsNodes(e));
    }
}
