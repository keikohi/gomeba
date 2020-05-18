<template>
    <div id="app">
        <div id="menu" class="ui pointing menu massive">
            <div class="item" >Gomeba</div>
        </div>
        <div class="ui grid">
            <div id = "packageView" class="three wide column padded" >
                <div class="ui list" >
                    <PackageTree :packages="packageTree"/>
                </div>
            </div>
            <div class="thirteen wide column" id="viz">
                <Viz></Viz>
            </div>
        </div>
    </div>
</template>

<script>
import Test from "./components/Test.vue";
import Viz from "./components/viz.vue";
import PackageTree from "./components/packageTree.vue"
export default {
    name: "app",
    data() {
        return {};
    },
    components: {
        Test,
        Viz,
        PackageTree
    },
    computed: {
        packageTree() {
            return JSON.parse(this.$store.getters.packageTree)
        }
    },
    mounted(){
    },
    methods: {
        expandSVG() {
            // this.$store.commit('updateWidth', 200);
            this.changeSVGSize("width", +100);
        },
        contractSVG() {
            this.changeSVGSize("width", -100);
        },
        changeSVGSize(widthOrHeight, d) {
            const svg = this.$store.getters.svg;
            const nowsize = svg.getAttribute(widthOrHeight).slice(0, -2);
            const newWidth = this.$store.getters.width + d;
            this.$store.commit("updateWidth", newWidth);
        }
    }
};
</script>

<style >
#packageView {
    height: 90vh;
    overflow: auto;
}
body, #menu{
    background-color: #061A2B;
    font-family:  "Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro W3","Meiryo","メイリオ","sans-serif";
}
.ui.menu .item {
    color: white;
}
</style> 