<template>
    <div>
        <div class="graph" v-html="svg" ref="svgdiv"></div>
    </div>
</template>

<script>
                    // rankdir=LR
                    // bgcolor ="#061A2B"
                    // fontcolor = white
                    // fontname = meiryo
                    // fontsize =20
                    // ranksep = 2
                    // nodesep = 0.4
import dot from 'graphlib-dot'
import Graph from 'graphlib'
import Digraph from '../dot/digraph'
export default {
    data() {
        return {
            input: ``,
            originalInput: `
   digraph " D: "  {
                    rankdir=LR
                    bgcolor ="#061A2B"
                    fontcolor = white
                    fontname = meiryo
                    fontsize =20
                    ranksep = 1.5
                    nodesep = 0.3
     subgraph "cluster_dev" {
       subgraph "cluster_go" {
         subgraph "cluster_gin-master" {
           subgraph "cluster_gin-master" {
             "D:\dev\go\gin-master\gin-master\auth.go" [label="auth.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             subgraph "cluster_binding" {
               "D:\dev\go\gin-master\gin-master\binding\binding.go" [label="binding.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\binding_nomsgpack.go" [label="binding_nomsgpack.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\default_validator.go" [label="default_validator.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\form.go" [label="form.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\form_mapping.go" [label="form_mapping.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\header.go" [label="header.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\json.go" [label="json.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\msgpack.go" [label="msgpack.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\multipart_form_mapping.go" [label="multipart_form_mapping.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\protobuf.go" [label="protobuf.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\query.go" [label="query.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\\uri.go" [label="uri.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\\xml.go" [label="xml.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\binding\yaml.go" [label="yaml.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               label="binding" color="#3B9FED"
             }
             "D:\dev\go\gin-master\gin-master\context.go" [label="context.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\context_appengine.go" [label="context_appengine.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\debug.go" [label="debug.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\deprecated.go" [label="deprecated.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\doc.go" [label="doc.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\errors.go" [label="errors.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\fs.go" [label="fs.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\gin.go" [label="gin.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             subgraph "cluster_ginS" {
               "D:\dev\go\gin-master\gin-master\ginS\gins.go" [label="gins.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               label="ginS" color="#3B9FED"
             }
             subgraph "cluster_internal" {
               subgraph "cluster_bytesconv" {
                 "D:\dev\go\gin-master\gin-master\internal\bytesconv\bytesconv.go" [label="bytesconv.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
                 label="bytesconv" color="#3B9FED"
               }
               subgraph "cluster_json" {
                 "D:\dev\go\gin-master\gin-master\internal\json\json.go" [label="json.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
                 "D:\dev\go\gin-master\gin-master\internal\json\jsoniter.go" [label="jsoniter.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
                 label="json" color="#3B9FED"
               }
               label="internal" color="#3B9FED"
             }
             "D:\dev\go\gin-master\gin-master\logger.go" [label="logger.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\mode.go" [label="mode.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\path.go" [label="path.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\recovery.go" [label="recovery.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             subgraph "cluster_render" {
               "D:\dev\go\gin-master\gin-master\render\data.go" [label="data.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\html.go" [label="html.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\json.go" [label="json.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\msgpack.go" [label="msgpack.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\protobuf.go" [label="protobuf.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\reader.go" [label="reader.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\redirect.go" [label="redirect.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\render.go" [label="render.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\text.go" [label="text.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\\xml.go" [label="xml.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               "D:\dev\go\gin-master\gin-master\render\yaml.go" [label="yaml.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
               label="render" color="#3B9FED"
             }
             "D:\dev\go\gin-master\gin-master\response_writer.go" [label="response_writer.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\routergroup.go" [label="routergroup.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\tree.go" [label="tree.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\\utils.go" [label="utils.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             "D:\dev\go\gin-master\gin-master\version.go" [label="version.go",penwidth=0.6, color="#395070", style=filled, fontcolor=white, fontsize=18, size=30, fontname=meiryo]
             label="gin-master" color="#3B9FED"
           }
           label="gin-master" color="#3B9FED"
         }
         label="go" color="#3B9FED"
       }
       label="dev" color="#3B9FED"
     }
    "D:\dev\go\gin-master\gin-master\auth.go" -> "D:\dev\go\gin-master\gin-master\internal\bytesconv\bytesconv.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\binding\form_mapping.go" -> "D:\dev\go\gin-master\gin-master\internal\bytesconv\bytesconv.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\binding\binding.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\binding\binding_nomsgpack.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\data.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\html.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\json.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\msgpack.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\protobuf.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\reader.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\redirect.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\render.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\text.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\\xml.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\context.go" -> "D:\dev\go\gin-master\gin-master\render\yaml.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\deprecated.go" -> "D:\dev\go\gin-master\gin-master\binding\binding.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\deprecated.go" -> "D:\dev\go\gin-master\gin-master\binding\binding_nomsgpack.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\gin.go" -> "D:\dev\go\gin-master\gin-master\internal\bytesconv\bytesconv.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\gin.go" -> "D:\dev\go\gin-master\gin-master\render\html.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\ginS\gins.go" -> "D:\dev\go\gin-master\gin-master\gin.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\ginS\gins.go" -> "D:\dev\go\gin-master\gin-master\routergroup.go" [color=white, penwidth=0.4]
    "D:\dev\go\gin-master\gin-master\render\json.go" -> "D:\dev\go\gin-master\gin-master\internal\bytesconv\bytesconv.go" [color=white, penwidth=0.4]
     label="D:" color="#3B9FED"
   }

                `,
            isMouseDown: false,
            preXPos: 0,
            preYPos: 0, 
            packageList : null
        };
    },
    computed: {
        svg() {
            const showPackages = this.$store.getters.showPackages
            const isShowInternalFiles = this.$store.getters.showInternalFiles
            var digraph = dot.read(this.originalInput)
            digraph = this.displayGraph(digraph, showPackages, isShowInternalFiles)
            this.input = dot.write(digraph);
            return Viz(this.input,{ format: "svg" });
        }
    },
    watch:{
        input(val){
            const focusPackages = this.$store.getters.showPackages
            this.initializeSVGView(focusPackages)
        }
    },
    mounted() {
    },
    created(){
        const isHideIsolatedNode = this.$store.getters.showInternalFiles
        const selectedPackages = new Array()
        let digraph = dot.read(this.originalInput)
        digraph = this.displayGraph(digraph, selectedPackages, isHideIsolatedNode)
        this.input = dot.write(digraph)

        const packageList = digraph.nodes().filter( nodeName => nodeName.includes("cluster_")).map(e => e.replace("cluster_",""))
        this.$store.commit("setPackageList", packageList);
        const packageTree = this.createPackageTree(digraph)
        this.$store.commit("setPackageTree", packageTree)
    },
    methods: {
        initializeSVGView(focusPackages){
            const svgDOM = this.$refs["svgdiv"].getElementsByTagName("svg")[0]
            this.$store.commit('setSVGDOM', svgDOM)
            const menuHeight = document.getElementById("menu").clientHeight
            const packageTreeWidth = document.getElementById("packageView").clientWidth
            this.setSVGSize("width", window.innerWidth - packageTreeWidth)
            this.setSVGSize("height", window.innerHeight - menuHeight - 100)

            const nodes = this.$refs["svgdiv"].getElementsByClassName("node");
            Array.from(nodes).forEach(node => {
                const titles = node.getElementsByTagName("title");
                const nodeName = titles[0].innerHTML;
                const { paths, polygons } = this.startPaths(nodeName);
                if (paths.length > 0) {
                    node.addEventListener("click", e => {
                        paths.forEach(path => {
                            path.classList.toggle("focusPath");
                        });
                        polygons.forEach(path => {
                            path.classList.toggle("focusPolygon");
                        });
                    });
                }
                const ellipse = node.getElementsByTagName("ellipse")[0];
                node.addEventListener("click", e => {
                    ellipse.classList.toggle("focusNode")
                    const nodeText = node.getElementsByTagName("text")[0]
                    nodeText.classList.toggle("focusNodeText")
                })
            });            
            if(focusPackages.length > 0){
                const clusters = this.$refs["svgdiv"].getElementsByClassName("cluster");
                const focusedCluster = Array.from(clusters).filter(c => focusPackages.includes(c.getElementsByTagName("title")[0].innerHTML) )
                focusedCluster.forEach(fc => {
                    const polygon = fc.getElementsByTagName("polygon")[0]
                    polygon.classList.toggle("focusedPackages")
                    const text = fc.getElementsByTagName("text")[0]
                    text.classList.toggle("focusedPackages")
                })
            }

            // Array.from(nodes).forEach(node =>)
            svgDOM.addEventListener("mousedown", e => {
                this.isMouseDown = true;
                this.preXPos = e.offsetX
                this.preYPos = e.offsetY
            })
            svgDOM.addEventListener("mousemove", e => {
                if(this.isMouseDown){
                    const xdiff = e.offsetX - this.preXPos
                    const ydiff = e.offsetY - this.preYPos
                    //if you move mouse to +x dir, viewPort id decresed
                    let viewBoxElements = svgDOM.getAttribute("viewBox").split(" ")
                    const newXMin = +viewBoxElements[0] - xdiff
                    const newYMin = +viewBoxElements[1] - ydiff
                    const newVB = [newXMin,newYMin,viewBoxElements[2],viewBoxElements[3]].join(" ")
                    svgDOM.setAttribute("viewBox", newVB)
                    this.preXPos = e.offsetX
                    this.preYPos = e.offsetY
                }
            })
            svgDOM.addEventListener("mouseup", e => {
                this.isMouseDown = false
            })
            svgDOM.addEventListener("wheel", e => {
                const scaleFactor = 1.05;
                const scale = Math.pow(scaleFactor, e.deltaY < 0 ? -1 : 1);
                const [minx, miny, w, h] =  this.getViewBox(svgDOM)

                const sx = e.offsetX/svgDOM.clientWidth
                const sy = e.offsetY/svgDOM.clientHeight
                const x = minx + w*sx
                const y = miny + h*sy
                const nw = w * scale;
                const nh = h * scale;
                const nx = x + scale * (minx - x);
                const ny = y + scale * (miny - y);
                svgDOM.setAttribute("viewBox", this.toViewBox(nx, ny, nw, nh))
                
            })
        },
        startPaths(nodeName) {
            var paths = new Array();
            var polygons = new Array();
            const edges = this.$refs["svgdiv"].getElementsByClassName("edge");
            Array.from(edges).forEach(edge => {
                const titles = edge.getElementsByTagName("title");
                const connection = titles[0].innerHTML;
                //connection : a -> b (-> = -&gt;)
                const startNode = connection.split("-&gt;")[0];
                if (startNode == nodeName) {
                    paths.push(edge.getElementsByTagName("path")[0]);
                    polygons.push(edge.getElementsByTagName("polygon")[0]);
                }
            });
            return { paths: paths, polygons: polygons };
        },
        setSVGSize(widthOrHeight, size) {
            this.$store.commit("updateWidth", size);
            const svgDOM = this.$store.getters.svg
            svgDOM.setAttribute(widthOrHeight, size + "px");
        },
        toViewBox(x, y, w, h){
            return [x, y, w, h].join(" ")
        },
        getViewBox(svgDOM){
            return svgDOM.getAttribute("viewBox").split(" ").map(v => parseFloat(v))
        },
        getParentList(list, digraph, name){
            const parentName = digraph.parent(name)
            if(parentName === void 0){
                return
            }
            list.push(parentName)
            this.getParentList(list, digraph, parentName)
        },
        focusPackage(digraph, packageName){
            if(packageName == ""){
                return dot.write(digraph);
            }
            const packageNode = digraph.children("cluster_"+packageName)
            const deleteEdges = digraph.edges().filter(e => !packageNode.includes(e.v) && !packageNode.includes(e.w))
            const showEdges = digraph.edges().filter(e => packageNode.includes(e.v) || packageNode.includes(e.w))
            let showNodesName = new Array()
            showEdges.forEach(e => showNodesName.push(e.v, e.w))
            deleteEdges.forEach(e => digraph.removeEdge(e.v, e.w))
            let parentList = new Array()
            showNodesName.forEach(name => this.getParentList(parentList, digraph, name))
            //to remove duplicate parent, utilize Set.
            parentList = [...new Set(parentList)];
            digraph
                .nodes()
                .filter(name => !parentList.includes(name) && !showNodesName.includes(name))
                .forEach(name => digraph.removeNode(name))        
            return dot.write(digraph);
        },
        createPackageTree(digraph){
            return JSON.stringify(this.searchTree(digraph, "root", "root"));
        },
        searchTree(digraph, packageName, showName){
            const childs = packageName === "root"? digraph.children() : digraph.children(packageName)
            if(childs.length < 1){
                return {name: packageName, showName: showName ,child: new Array()}
            }
            let childTree = new Array()
            childs.forEach(name => {
                childTree.push(this.searchTree(digraph, name, digraph.node(name).label))
            })
            return {name: packageName, showName: showName, childs: childTree}
        },
        focusPackages(digraph, packageNames){
            let deleteEdges = new Array()
            let showEdges = new Array()
            packageNames.forEach(packageName => {
                const packageNode = digraph.children(packageName)
                //search dependent edges of focused packages.
                digraph.edges().filter(e => !packageNode.includes(e.v) && !packageNode.includes(e.w)).forEach(e => deleteEdges.push(e))
                digraph.edges().filter(e => packageNode.includes(e.v) || packageNode.includes(e.w)).forEach(e => showEdges.push(e))
            })

            let showNodesName = new Array()
            // Filtering showEdges from deleteEdges.
            deleteEdges = deleteEdges.filter(de => !showEdges.some(se => se.v===de.v && se.w === de.w))
            showEdges.forEach(e => showNodesName.push(e.v, e.w))
            deleteEdges.forEach(e => digraph.removeEdge(e.v, e.w))
            let parentList = new Array()
            showNodesName.forEach(name => this.getParentList(parentList, digraph, name))
            //to remove duplicate parent, utilize Set.
            parentList = [...new Set(parentList)];
            digraph
                .nodes()
                .filter(name => !parentList.includes(name) && !showNodesName.includes(name))
                .forEach(name => digraph.removeNode(name))        
            return digraph
        },

        hideIsolatedNodes(digraph, flag){
            if(!flag){
                return digraph
            }
            const dg = new Digraph(digraph)
            dg.removeIsolatedNodes()
            dg.removeEmptyPackages()
            return dg.result()
        },
        focusSelectedPackageNodes(digraph,  showPackages){
            if(showPackages.length <= 0){
                return digraph
            }
            return this.focusPackages(digraph, showPackages)
        },
        displayGraph(digraph, showPackages, isHideIsolatedNode){
            digraph = this.hideIsolatedNodes(digraph, isHideIsolatedNode)
            return this.focusSelectedPackageNodes(digraph, showPackages)
        },

    }
};
</script>

<style >
.focusPath {
    stroke: #EECC22;
    stroke-width: .2em;
}
polygon.focusPolygon {
    fill: #EECC22;
    stroke: #EECC22;
    width: 10em ;
}
#g {
    font-size: 60px;
}
path:hover  {
    stroke: #EECC22;
    stroke-width: 0.2em;
}
ellipse{
    stroke-width: 0.15em;
}
path{
    stroke-width: 0.1em;
}
.edge > polygon{
    stroke-width: 0.2em;
}
.cluster > polygon {
    stroke-width: 0.125em;
    stroke: #3B9FED;
}

.focusNode {
    fill: #EECC22;
    stroke-width: 0.5em;
    stroke: #EECC22;
}
.edge,.node{
    cursor: pointer;
}
text{
    font-size: 1.5em;
    font-weight: 200;
}
.focusNodeText{
    fill: black;
    font-size: 1.5em;
    font-weight: 600;
}
polygon.focusedPackages{
    stroke-width: 0.1em;
    stroke: #EECC22;
}
text.focusedPackages{
    fill: #EECC22 !important;
}
.cluster > text{
    font-size: 1.75em;
    fill: rgb(181, 200, 214);
    font-weight: bold;
}
</style>