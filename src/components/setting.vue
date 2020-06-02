<template>
    <div class="ui list small">
        <div class="item" v-on:click="toggleInternalFiles()">
            <div class="right floated content">
                <div class="ui">
                    <i v-if="!isShow" class="icon circle outline"></i>
                    <i v-if="isShow" class="icon circle check"></i>
                </div>
            </div>
            <div class="content">
                <div class="header">Hide Internal Files</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        };
    },
    methods: {
        toggleInternalFiles() {
            this.isShow=!this.isShow
            this.$store.commit("toggleShowInternalFiles", this.isShow)
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