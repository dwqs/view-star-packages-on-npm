<template>
    <div id="app">
        <h3>{{title}}</h3>
        <p class="doc">
            Documentation can be found at:
            <a href="https://github.com/dwqs/vue-startup" target="_blank">vue-startup</a>
        </p>
    </div>
</template>

<script>
    import './index.less';

    export default{
        data () {
            return {
                title: 'vuejs 2 + webpack 3'
            };
        }
    };
</script>
