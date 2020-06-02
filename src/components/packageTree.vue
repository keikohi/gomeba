<template>
    <div class="item">
        <div class="right floated content">
            <div
                v-if="isDir&&hasFiles"
                class="ui small"
                :class="iconType(packages)"
                v-on:click="showPackage(packages.name, $event)"
            >
                <i v-if="!isShow" class="icon circle outline"></i>
                <i v-if="isShow" class="icon circle check"></i>
            </div>
        </div>
        <div class="content" :class="focusedPackage()">
            <div class="header" :class="iconType(packages)" v-on:click="showChildren($event)">
                <i class="icon" v-if="isDir" :class="openFolderClass" ></i>
                {{packages.showName}}
            </div>
            <div v-if="!isLastNode() && isShowChildren">
                <div
                    class="list"
                    :class="iconType(packages)"
                    v-for="child in ordering(packages.childs)"
                    :key="child.name"
                >
                    <PackageTree :packages="child" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import PackageTree from "./packageTree.vue";
export default {
    name: "PackageTree",
    components: {
        PackageTree
    },
    props: {
        packages: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isShow: false,
            isDir: false,
            isShowChildren: false
        };
    },
    computed: {
        openFolderClass(){
            if(!this.isFolder(this.packages)){
                return "file"
            }
            if(this.isShowChildren){
                return "open folder"
            }
            return "folder"
        },
        hasFiles(){
            const files = this.packages.childs.filter(e =>!e.name.includes("cluster_"));
            return files.length > 0
        }
    }, 
    created() {
        this.isDir = this.packages.childs !== void 0;
        this.isShowChildren = this.isDeepestDir()
    },

    methods: {
        // First File then Folder.
        ordering(childs) {
            let files = childs.filter(
                e => e.showName.split(".").pop() === "go"
            );
            let dirs = childs.filter(
                e => !(e.showName.split(".").pop() === "go")
            );
            files.forEach(e => dirs.push(e));
            const result = {};
            dirs.forEach((e, i) => (result[i] = e));
            return result;
        },
        isFolder(packages) {
            return packages.childs !== void 0;
        },
        iconType(packages) {
            return this.isFolder(packages) ? "folder" : "file";
        },
        showPackage(packageName, event) {
            if (!this.isShow) {
                this.$store.commit("addShowPackages", packageName);
            } else {
                this.$store.commit("removeShowPackages", packageName);
            }
            this.isShow = !this.isShow;
            event.stopPropagation();
        },
        focusedPackage() {
            return this.isShow ? "focusedPackage" : "nonFocusedPackage";
        },
        showChildren(event) {
            if (this.isDir) {
                this.isShowChildren = !this.isShowChildren;
                event.stopPropagation();
            }
        },
        isLastNode(){
            return this.packages.childs === void 0
        },
        isDeepestDir(){
            if(!this.isLastNode()){
                const dirs = this.packages.childs.filter(e =>e.name.includes("cluster_"));
                const files = this.packages.childs.filter(e =>!e.name.includes("cluster_"));
                return  files.length === 0 || dirs.length > 0
            }
            return false
        }
    }
};
</script>

<style scoped>

/* div.context.nonFocusedPackage {
    color: red ;
} */

.folder > .icon {
    color: #242A3C !important;
}

.folder {
    color: #242A3C !important;
}

.focusedPackage {
    background-color: rgba(85, 92, 95, 0.226);
    border-radius: 5px;
}
.folder, .eye {
    cursor: pointer;
}
.header:hover,.eye:hover {
    background-color: rgba(53, 61, 65, 0.692);
    color: #e7e7e7 !important;
}
.list {
    padding: 0.4em 0 0 0.7em !important;
}

</style>