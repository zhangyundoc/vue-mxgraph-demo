<template>
    <div class="flow-main">
        <Breadcrumb v-if="false">
            <BreadcrumbItem>工作流</BreadcrumbItem>
            <BreadcrumbItem>名称</BreadcrumbItem>
        </Breadcrumb>
        <div class="flow-content-main">
            <div class="siderbar-container">
                <ul>
                    <li
                        v-for="item in toolbarItems"
                        :key="item['name']"
                        ref="dragItem"
                    >{{item['title']}}</li>
                </ul>
            </div>
            <div class="graph-container" ref="container"></div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    @import './index.styl'
</style>
<script>
    import JS from "./index.js";
    export default JS;
</script>
