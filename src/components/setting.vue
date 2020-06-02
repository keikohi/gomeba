<template>
    <div class="ui list small">
        <div class="item" v-on:click="toggleInternalFiles()">
            <div class="right floated content">
                <div class="ui">
                    <i v-if="!hideInternalFiles" class="icon circle outline"></i>
                    <i v-if="hideInternalFiles" class="icon circle check"></i>
                </div>
            </div>
            <div class="content">
                <div class="header">Hide Internal Files</div>
            </div>
        </div>
        <div class="item" v-on:click="toggleShowAllPackages()">
            <div class="right floated content">
                <div class="ui">
                    <i v-if="!showAllPackages" class="icon circle outline"></i>
                    <i v-if="showAllPackages" class="icon circle check"></i>
                </div>
            </div>
            <div class="content">
                <div class="header">Show All Packages</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hideInternalFiles: true,
            showAllPackages: true
        };
    },
    methods: {
        toggleInternalFiles() {
            this.hideInternalFiles = !this.hideInternalFiles;
            this.$store.commit("toggleShowInternalFiles",this.hideInternalFiles);
        },
        toggleShowAllPackages() {
            this.showAllPackages = !this.showAllPackages;
            this.$store.commit("setShowAllPackages",this.showAllPackages);
        }
    }
};
</script>

<style scoped>
.item {
    cursor: pointer;
    color: #242a3c !important;
}
.header:hover,
.eye:hover {
    background-color: rgba(53, 61, 65, 0.692);
    color: #e7e7e7 !important;
}
</style>