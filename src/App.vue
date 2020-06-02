<template>
    <div id="app">
        <div id="menu" class="ui pointing menu massive">
            <div class="item">Gomeba</div>
        </div>
        <div class="ui grid">
            <div id="packageView" class="three wide column padded">
                <div class="ui horizontal divider header">
                    <i class="setting icon"></i>
                    View Settings
                </div>
                <Setting></Setting>

                <div class="ui horizontal divider header">
                    <i class="sitemap icon"></i>
                    Package Tree
                </div>

                <div class="ui list">
                    <PackageTree :packages="packageTree" />
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
import PackageTree from "./components/packageTree.vue";
import Setting from "./components/setting.vue"
export default {
    name: "app",
    data() {
        return {};
    },
    components: {
        Test,
        Viz,
        PackageTree,
        Setting
    },
    computed: {
        packageTree() {
            return JSON.parse(this.$store.getters.packageTree);
        }
    },
    mounted() {},
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
body,
#menu {
    background-color: #061a2b;
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "Meiryo",
        "メイリオ", "sans-serif";
}
#packageView {
    background-color: #eeedeb;
    border-radius: 10px;
}
.ui.menu {
    color: white;
}
.externalPackage {
    font-size: 1em;
    float: left;
}
.externalEye {
    float: right;
}
.ui {
    clear: left;
}
div.ui.divider.header {
    font-size: 1em;
}
div.ui.divider.header > .icon {
    font-size: 1.25em;
    margin: 0;
}
</style> 