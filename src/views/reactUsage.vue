<template>
    <div>
        <my-react-component/>
    </div>
</template>

<script>
    import MyReactComponent from './demo';
    export default {
        name: "reactUsage",
        components: { 'my-react-component': MyReactComponent },
    }
</script>

<style scoped>

</style>
