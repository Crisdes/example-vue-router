<script setup>
import { ref } from 'vue' 
// import axios from 'axios'
import { RouterLink } from 'vue-router';
// Como es una exportacion nombrada se coloca en {}
import { useGetData } from '@/composables/getData' 

// Ejempl 1: Logica directamente en cada vista
// const pokemons = ref([])
// const getData = async () => {
//     try {
//         // Usamos axios como alternativa de fetch
//         const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
//         pokemons.value = data.results
//     } catch (error) {
//         console.log(error);  
//     }
// }
// getData()


// Ejemplo 2: Obtener datos reutilizando codigo con composable
// Desestructuramos y obtenemos la informacion del Composable
const { data, getData, loading, error } = useGetData();
getData('https://pokeapi.co/api/v2/pokemon');


</script>
<template>
    <h1>Pokemons</h1>
    <!-- Ejemplo 1 -->
    <!-- <ul>
        <li v-for="poke in pokemons">
            <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>    
        </li>
    </ul> -->
    <!-- Ejemplo 2 -->
    <p v-if="loading">Cargando...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="data">
    <!-- Validamos para evitar que este cargando la data sin que esta no exista en el componenete -->
        <ul class="list-group">
            <li class="list-group-item" v-for="poke in data.results">
                <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>    
            </li>
        </ul>
        <div class="mb-2 mt-2">
            <button 
                class="btn btn-success me-2" 
                :disabled="!data.previous" 
                @click="getData(data.previous)">
                Previus
            </button>
            <button 
                class="btn btn-primary" 
                :disabled="!data.next" 
                @click="getData(data.next)">
                Next
            </button>
        </div>
    </div>
</template>