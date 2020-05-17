<template>
    <div class="item">
        <div class="right floated content">
            <div
                v-if="isDir"
                class="ui small"
                :class="iconType(packages)"
                v-on:click="showPackage(packages.name, $event)"
            >
                <i v-if="isShow" class="icon eye"></i>
                <i v-if="!isShow" class="icon eye slash"></i>
            </div>
        </div>
        <div class="content" :class="focusedPackage()">
            <div class="header" :class="iconType(packages)" v-on:click="showChildren($event)">
                <i class="icon" v-if="isDir" :class="iconType(packages)"></i>
                {{packages.showName}}
            </div>
            <div v-if="packages.childs !== void 0 && isShowChildren">
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
    data() {
        return {
            isShow: false,
            isDir: false,
            isShowChildren: false
        };
    },
    created() {
        this.isDir = this.packages.childs !== void 0;
    },
    components: {
        PackageTree
    },
    props: {
        packages: {
            type: Object,
            required: true
        }
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
            console.log("childs:", packages.childs);
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
        }
    }
};
</script>

<style scoped>
/* .ui.list .list > .item .header,
.ui.list > .item .header,
i.icon.file {
    color: #777777;
} */

.file {
    color: #777777 !important;
}

.folder > .icon {
    color: white !important;
}

.folder {
    color: white !important;
}

.focusedPackage {
    background-color: #133b5b;
    border-radius: 5px;
}
.folder,
.eye {
    cursor: pointer;
}
.header:hover,
.eye:hover {
    background-color: rgb(53, 61, 65);
}
.list {
    padding: 0.25em 0 0 0.7em !important;
}
</style>