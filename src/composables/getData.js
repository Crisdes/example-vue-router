import axios from 'axios'
import {ref} from 'vue'

// hacemos el export nombrado para que no genere error
export const useGetData = () => {
    // El composable, puede tener metodos, referencias reactivas, computed

    // La pasamos en null, ya que no sabemos que va a recibir y necesitamos que sea reutilizable
    const data = ref(null)
    const loading = ref(true)

    // Manejo de errores con axios
    const error = ref(null)
    const getData = async (url) => {
        loading.value = true
        try {
            // Usamos axios como alternativa de fetch
            const resp = await axios.get(url)
            data.value = resp.data
        } catch (e) {
            // console.log(error);
            // la variable error no puede ser la misma que captura el cach ya que la optra es de axios
            error.value = 'Error de servidor'
        } finally{
            loading.value = false;
        }
    }
    return{
        getData,
        data,
        loading,
        error
    }
}