<template>
    <div id="intro-component">
        <hr/>
            <h1>Learning Vue.Js</h1>
            <h2>{{texto}}</h2>
        <hr/>
    </div>
</template>

<script>
export default {
    name: 'IntroComponent',
    data(){
        return{
            texto: "Testing..."
        }
    }
}
</script>
