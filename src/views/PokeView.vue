<script setup>
    // import axios from 'axios';
    // import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { useGetData } from '@/composables/getData';

    // Activamos el metodo useRoute para acceder a los parametros enviados por url
    const route = useRoute()
    // Con use router podemos usar la funciones de routerLink, por ejemplo para enviar al
    // usuario a otra pagina
    const router = useRouter()

    const back = () => {
        router.push('/pokemons')
    }
    // Ejemplo 1
    // const poke = ref({})
    // const getData = async () => {
    //     try {
    //         const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    //         poke.value = data
    //     } catch (error) {
    //         console.log(error);
    //         // Si se coloca un pokemon que no existe cach captura el error, por lo que le podemos asignar null
    //         poke.value = null
    //     }
    // }
    // getData()

    // Ejemplo 2
    const {getData, data, loading , error} = useGetData();
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>
<template>
    <!-- Ejemplo 1 -->
    <!-- <div v-if="poke">
        <h1>Poke name: {{ $route.params.name  }}</h1>
        <img :src="poke.sprites?.front_default" :alt="poke.name">
    </div>
    <h1 v-else>No existe el pokemon</h1> -->

    <!-- Ejemplo 2, con composable -->
    <p v-if="loading">Cargando...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="data">
        <h1>Poke name: {{ $route.params.name }}</h1>
        <img :src="data.sprites?.front_default" :alt="data.name">
    </div>
    <!-- <h1 v-else>No existe el pokemon</h1> -->

    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>