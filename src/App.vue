<template>
    <div>
        <h1>Hello {{ msg }}</h1>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg: 'tefdsfs'
            }
        }
    }
</script>
<style scoped>
    h1{
        font-family: 'Courier New';
        color: blue;
        display: flex;
    }
    ::placeholder {
        color: gray;
    }
</style>